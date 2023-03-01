FROM node:18.2.0 
WORKDIR /usr/src/app/
RUN npm i
CMD npm start