# Use the official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY . .

# Expose the port that your server uses
EXPOSE 8080

# Start your server
CMD ["npm", "start"]
