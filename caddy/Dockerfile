# Set base image for the build
FROM node:22-alpine AS build

# Set working directory
WORKDIR /client

# Copy dependencies
COPY client/package.json client/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY client/. .

# Build the client
RUN npm run build


# Set base image for caddy
FROM caddy:2-alpine

# Copy the client build to the caddy image
COPY --from=build /client/dist /usr/share/caddy

# Copy the Caddyfile
COPY caddy/Caddyfile /etc/caddy/Caddyfile
