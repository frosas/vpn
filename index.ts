import * as gcp from "@pulumi/gcp";

const instance = new gcp.compute.Instance("vpn", {
  bootDisk: {
    initializeParams: {
      image: "debian-9-stretch-v20200210"
    }
  },
  machineType: "f1-micro",
  networkInterfaces: [
    {
      accessConfigs: [{}] // Enable external access
    }
  ]
});

export const sshDestination = instance.networkInterfaces.apply(
  nis => `frosas@${nis[0].accessConfigs![0].natIp}`
);
