# pull official base image
FROM node:current

# install app dependencies
RUN npm install

CMD [ "npm", "start"]
