## VPN

### Setup

```bash
$ brew install node pulumi sshuttle
$ npm i
$ gcloud auth application-default login
$ pulumi up --stack prod --yes
```

### Usage

```bash
$ bin/vpn
```

### Teardown

```bash
$ pulumi destroy --stack prod --yes
```
