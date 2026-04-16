FROM node:20

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm ci --include=dev  # Include devDependencies like @playwright/test

COPY . /app/
# RUN chmod +x /app/docker.sh

USER root

# Install Playwright browsers
RUN npx playwright install --with-deps

# Set Playwright to use system-installed browsers
ENV PLAYWRIGHT_BROWSERS_PATH=0