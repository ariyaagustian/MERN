# pull official base image
FROM node:current

# install app dependencies
RUN git clone https://github.com/ariyaagustian/MERN.git

# # set working directory
WORKDIR /MERN

RUN cd /MERN/mern-blog
RUN npm install

CMD ["npm","start"]