# swagger-schema-validator

Validate the integrity of your Swagger API definitions with a few extra steps.

## Usage

Copy the `.travis.yml` file into the root of the repository containing Swagger specifications. The directory containing the Swagger specifications should resemble the following structure:

```
.
├── .travis.yml
├── LICENSE
└── cisco
    └── ios
        └── 12_4_0
            └── 2017-01-15.swagger.json
```

An example can be found [here](https://github.com/slate-io/specifications).
