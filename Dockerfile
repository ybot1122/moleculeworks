FROM nginx:alpine

# Create app directory
WORKDIR /app

# Copy project files into the docker image
COPY .  /app

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy website to default nginx public folder
COPY /dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]