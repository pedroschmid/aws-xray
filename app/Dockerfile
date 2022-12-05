FROM node:18.12.1-alpine

USER root

WORKDIR /opt/app

COPY package*.json /opt/app/

RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD [ "npm", "run", "start" ]