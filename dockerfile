#==================== Building Stage ================================================ 

# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:8.12.0 as node

# Change directory so that our commands run inside this new directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy dependency definitions
COPY package.json /usr/src/app/package.json

# Install dependencies using npm
RUN npm install
RUN npm install -g @angular/cli@

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 8000

#Build the app
RUN npm run build

CMD ng serve --host 0.0.0.0
#EXPOSE 8000 49153