# # Use an official Node.js image as the base
# FROM node:18

# # Set working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json (or yarn.lock)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the frontend code
# COPY . .

# # Expose the port the frontend runs on (e.g., 3000 for React)
# EXPOSE 5173

# # Command to start the frontend (adjust based on your framework)
# CMD ["npm", "run", "dev"]

# FROM node:20
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]

# FROM node:20
# WORKDIR /app
# COPY package*.json ./
# # Clear node_modules and package-lock.json to avoid npm bug
# RUN rm -rf node_modules package-lock.json
# RUN npm install
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]--cache /tmp/npm-cache && rm -rf /tmp/npm-cache

# FROM node:20
# WORKDIR /app
# COPY package*.json ./
# RUN rm -rf node_modules package-lock.json
# RUN npm install --cache /tmp/npm-cache && rm -rf /tmp/npm-cache
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]


# promogpt-frontend/Dockerfile
FROM node:20-slim

WORKDIR /app

# Install build tools for native deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install deps
RUN npm ci --cache /tmp/npm-cache \
    && rm -rf /tmp/npm-cache

# FORCE install native binaries
RUN npm install --force \
    @rollup/rollup-linux-x64-gnu \
    @rolldown/binding-linux-x64-gnu \
    --save-optional

# Rebuild
RUN npm rebuild rollup rolldown --verbose || true

# Copy source
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]