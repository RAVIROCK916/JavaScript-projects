# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy the static files into the web server's document root
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/