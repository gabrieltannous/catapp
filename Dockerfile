# base image
FROM node:8.15.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add app
COPY . /usr/src/app

# install and cache app dependencies
RUN npm install


# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
CMD node backend/server.js
