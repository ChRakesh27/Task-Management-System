# TASK MANAGER - Backend

## Getting started

task management api service..

- Postman collection is added in the repository
- Swagger documentation

#### Install required tools

- [Node.js](https://nodejs.org) (v18.x.x)
- [MongoDB](https://www.mongodb.com/)

Core package used in the project

- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [logger](https://www.npmjs.com/package/logger)
- [jest](https://www.npmjs.com/package/jest)
- [supertest](https://www.npmjs.com/package/supertest)

#### Clone the repo

```bash
git clone https://github.com/ChRakesh27/TaskManagementSystem.git
```

### Install dependencies

```bash
npm install
```

#### Run local server

Run start will start the server with nodemon in development mode. server start on `http://localhost:3000`

```bash
npm run start
```

or

```bash
npm run start:dev
```

#### Run test cases

to run test case once

```bash
npm run test
```

to run test cases with watch

```bash
npm run test:watch
```

## Postman collection

- postman collection available - [collection link](./postman%20collection/Rakesh%20-%20Task-Manager.postman_collection.json)

  ![collection](./postman-collection/collection-img.png)

## Swagger document

- List Available apis on tasks & users - [swagger link](./swagger/swagger.yaml)

  ![swagger](./swagger/swagger-img.png)
