# base image 
FROM node:19-alpine

# copy local files <src> into container <dest>
COPY package.json /app/
COPY src /app/

# change directory
WORKDIR /app

# install package.jon dependencies
RUN npm install

# execute the container to start
CMD [ "node", "server.js" ]
