# Use the official Node.js 14
FROM node:14 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the Vite.js application
RUN npm run build

# ---------------- 
# NGNIX
# ----------------

FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/*

COPY ./nginx.conf /etc/nginx/conf.d/

# Copy the built application from the previous stage (here it's called build)
COPY --from=build /app/dist /usr/share/nginx/html

# Give read access to nginx user
RUN chmod -R 755 /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]