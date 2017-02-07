# swagger-spec-validator [![Build Status](https://img.shields.io/travis/slate-io/swagger-spec-validator.svg?style=flat-square)](https://travis-ci.org/slate-io/swagger-spec-validator) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo) [![Docker Pulls](https://img.shields.io/docker/pulls/slate/swagger-spec-validator.svg?style=flat-square)](https://hub.docker.com/r/slate/swagger-spec-validator/)

Validate and ensure the integrity of your Swagger API specifications to any existing repository, all within a few steps.

## Usage

> Swagger files **must** match the filename format: `*.swagger.json` |  `*.swagger.yaml` |  `*.swagger.yml`

Pull the Docker image from the registry, and follow the steps below to validate:

```
$ docker pull slate/swagger-spec-validator
$ cd /YOUR_PROJECT_WITH_SPECS
$ docker run -it -e "SPEC_PATH=$SPEC_PATH" -v $SPEC_PATH:/data --name spec-validator slate/swagger-spec-validator:latest
$ docker logs $(docker ps -lq)
```


The output of the command should yield: `The command "docker logs $(docker ps -lq)" exited with 0.`

### Travis CI

Copy the [`.travis.yml`](https://github.com/slate-io/swagger-spec-validator/blob/master/.travis.yml) file into the root of the repository containing your Swagger specifications. The directory structure of the project should resemble the following structure:

```
.
├── .travis.yml
├── LICENSE
└── cisco
    └── ios
        └── 12_4_0
            └── 2017-01-15.swagger.json
            └── 2017-01-15.swagger.yml
        └── 12_4_1
            └── 2017-02-15.swagger.json
            └── 2017-02-15.swagger.yml
```

An example repository can be found at [Slate-io Specs](https://github.com/slate-io/specifications).

## License

MIT © [Slate-io Team](https://github.com/slate-io)

