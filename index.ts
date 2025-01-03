import * as gcp from "@pulumi/gcp";

const network = new gcp.compute.Network("network");

new gcp.compute.Firewall("firewall", {
  network: network.id,
  allows: [{ protocol: "tcp", ports: ["0-65535"] }],
  sourceRanges: ["0.0.0.0/0"],
});

const instance = new gcp.compute.Instance("instance", {
  bootDisk: {
    initializeParams: {
      image: "debian-12-bookworm-v20240415",
    },
  },
  machineType: "f1-micro",
  networkInterfaces: [
    {
      network: network.id,
      accessConfigs: [{}], // Allocates a public IP address
    },
  ],
  metadataStartupScript: [
    "echo AllowTcpForwarding yes >> /etc/ssh/sshd_config",
    "echo GatewayPorts yes >> /etc/ssh/sshd_config",
    "systemctl restart sshd",
  ].join("\n"),
});

export const instanceIp = instance.networkInterfaces.apply(
  (nis) => nis[0].accessConfigs![0].natIp
);

export const sshDestination = instanceIp.apply(
  (instanceIp) => `frosas@${instanceIp}`
);
