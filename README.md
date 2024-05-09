## VPN

### Setup

```bash
$ brew install node pulumi sshuttle google-cloud-sdk
$ npm i
$ gcloud auth application-default login
$ npm run infra-up
```

### Usage

```bash
$ bin/vpn
```

### Teardown

```bash
$ npm run infra-down
```
