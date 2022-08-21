# Example MERN Stack

This repo provides a simple MERN stack application to be used in containerization demos. It is intended to NOT be a containerized application, but will be converted as part of demos.

## Architecture

This particular application is composed of an Express backend with a React frontend. Data is persisted in a Mongo database. Hence the MERN stack name.

The Express backend is configured to serve static content, allowing the React application to be bundled and deployed with the backend. But, they remain in separate codebases because development for each uses different tooling.

## Development

### A database

This application requires Mongo. If you haven't yet, install it and then start a database.

```
mongod
```

### The backend

To start the backend, run the following in the `backend` directory:

```
yarn install
yarn dev
```

The backend runs on [localhost:4000](http://localhost:4000)

### The frontend

To start the frontend, run the following in the `client` directory:

```
yarn install
yarn start
```

The react app will start on [localhost:3000](http://localhost:3000).


## Deploying

To deploy the application, you will need to do the following:

1. Build the frontend.

    ```
    cd frontend
    yarn build
    ```

1. Copy the artifacts from the newly created/populated `frontend/build` directory into `backend/src/static` directory.

1. Deploy the `backend` directory and start it using `node src/index.js`. The frontend application will be deployed using the backend.
