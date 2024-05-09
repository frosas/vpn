## VPN

### Setup

```bash
$ brew install node pulumi sshuttle google-cloud-sdk
$ npm i
$ gcloud auth application-default login
$ npm run infra-up
```

### Configuration

Edit gcp:zone in Pulumi.prod.yaml to connect from another location.

See f1-micro section in https://cloud.google.com/compute/all-pricing#sharedcore for a list of available regions.

You'll still need to pick a zone, which can be obtained while manually creating an instance from https://console.cloud.google.com/compute/instancesAdd

### Usage

```bash
$ bin/vpn
```

### Teardown

```bash
$ npm run infra-down
```
