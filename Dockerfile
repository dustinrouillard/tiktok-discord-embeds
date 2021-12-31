FROM node:16-alpine AS builder
#RUN apk add build-base python
WORKDIR /usr/src/app
COPY package*.json .
COPY yarn.lock .

RUN yarn

COPY . .
RUN yarn build

FROM node:16-alpine

WORKDIR /usr/src/app
#RUN apk add build-base python
COPY --from=builder /usr/src/app/node_modules node_modules
COPY --from=builder /usr/src/app/dist dist
COPY --from=builder /usr/src/app/package.json ./

ENTRYPOINT yarn start

