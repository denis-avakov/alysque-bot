# Based on the following articles:
# — https://simplernerd.com/docker-nodemon
# — https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker-on-ubuntu-20-04
# — https://snyk.io/blog/10-docker-image-security-best-practices/
# — https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/

# Alpine is a small Node.js image
FROM node:16-alpine

# Set production mode to optimize Node.js tooling
ENV NODE_ENV production

# Doppler CLI provides easy access to secrets and uses as a replacement for .env files
RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

# Ensure that application code have the non-root permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set the working directory
WORKDIR /home/node/app

# Take advantage of Docker's caching mechanism to cache node_modules
COPY ["package.json", "package-lock.json*", "./"]

# Ensure that dependencies will be installed by the non-root node user
USER node

# Install only production dependencies
RUN npm ci --only=production

# Copy the entire project with the appropriate permissions
COPY --chown=node:node . .

# Expose port at runtime
EXPOSE 8080

# Inject secrets into the environment and safely run the application
CMD ["doppler", "run", "--", "npm", "run", "start"]
