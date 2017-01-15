# swagger-schema-validator
Validate the integrity of your Swagger API definitions with a few extra steps.

## Usage
Set an environment variable `SCHEMA_PATH` to the swagger specifications. Once configured, execute `gulp` or `gulp validate`.
The validator will traverse within the directory for swagger files (yaml/yml/json).

*Example*
````
├── index.js
├── specifications
    └── pets
        └── swagger.json
    └── humans
        └── swagger.yaml
    └── cars
        └── swagger.yml
````

`SCHEMA_PATH=./specifications`
