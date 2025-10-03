# Use the official, lightweight Nginx web server image
FROM nginx:alpine

# This is the critical fix.
# Copy EVERYTHING from the repository into the web server's public directory.
COPY . /usr/share/nginx/html
