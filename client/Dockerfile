# Set base image
FROM node:23-alpine

# Set working directory
WORKDIR /client

# Copy dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Run the client
CMD npm run dev --host
