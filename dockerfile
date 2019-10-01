FROM node:10

COPY . /app

WORKDIR /app

EXPOSE 8080

ENTRYPOINT ["npm", "start"]