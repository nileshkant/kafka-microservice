# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port Vite will run on
EXPOSE 3000

# Run Vite in development mode
CMD ["npm", "run", "dev"]
