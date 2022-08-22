# Example MERN Stack

This repo provides a simple MERN stack application to be used in containerization demos. It is intended to NOT be a containerized application, but will be converted as part of demos.

## Architecture

This particular application is composed of an Express backend with a React frontend. Data is persisted in a Mongo database. Hence the MERN stack name.

The Express backend is configured to serve static content, allowing the React application to be bundled and deployed with the backend. But, they remain in separate codebases because development for each uses different tooling.

## Development

This repo contains a `docker-compose.yml` file that allows you to simply run:

```
docker compose up -d
```

The backend is available at http://localhost:4000 and the frontend is at http://localhost:3000.

When you're done, simply run:

```
docker compose down
```


## Deploying

To deploy the application, you will need to do the following:

1. Build the frontend.

    ```
    cd frontend
    yarn build
    ```

1. Copy the artifacts from the newly created/populated `frontend/build` directory into `backend/src/static` directory.

1. Deploy the `backend` directory and start it using `node src/index.js`. The frontend application will be deployed using the backend.
