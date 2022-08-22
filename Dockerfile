FROM node:lts-alpine AS base
WORKDIR /usr/local/app

FROM base AS development
CMD ["yarn", "dev"]

# Build react app
FROM base AS react-build
COPY client/package.json client/yarn.lock ./
RUN yarn install
COPY client/public ./public
COPY client/src ./src
RUN yarn build

# Setup and build the backend
FROM base
COPY backend/package.json backend/yarn.lock ./
RUN yarn install
COPY backend/src ./src
COPY --from=react-build /usr/local/app/build /usr/local/app/src/static
CMD ["node", "src/index.js"]