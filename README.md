# Front End Capstone - IMDb Clone

> <em>Project description</em>
> This project is meant to further our understanding of front end design. While there is some server and databse work, the majority of the project will be focused on recreating the front end of an IMDb movie page.

## Related Projects

- https://github.com/NKAJE-FEC-BLD09/N-Cast-Service

- https://github.com/NKAJE-FEC-BLD09/k-morelikethis-service

- https://github.com/NKAJE-FEC-BLD09/J-Photos-service

## Table of Contents

1. [Usage](#Usage)

1) [Requirements](#requirements)

1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

* etc

## Development

### Installing Dependencies

From within the root directory:

```sh

npm install

```

### Seeding Database

From within the root directory:

```sh

knex migrate:latest

knex seed:run

```

### Deleting Database

If at any time you need to delete the database, from within the root directory:

```sh

knex migrate:rollback

```
