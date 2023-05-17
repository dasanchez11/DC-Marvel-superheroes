FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

ADD . ./

CMD [ "yarn", "dev" ]
