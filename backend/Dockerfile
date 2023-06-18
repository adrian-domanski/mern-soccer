# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Expose the port on which the Express.js application will listen
EXPOSE 3001

# Install the TypeScript compiler
RUN npm install -g typescript

# Build the project with 'tsc'
RUN tsc

# Set the command to run the application
CMD [ "npm", "start" ]