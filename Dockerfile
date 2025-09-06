# Use the official, lightweight Nginx web server image
FROM nginx:alpine

# Declare a build-time argument that we will pass in from Northflank
ARG GEMINI_API_KEY_ARG

# Copy our index.html file into a temporary location
COPY ./index.html /tmp/index.html

# Run the substitution command inside the container during the build.
# This finds the placeholder in the temporary file and replaces it with the secret argument,
# then saves the result to the final web server directory.
RUN sed "s|__GEMINI_API_KEY_PLACEHOLDER__|${GEMINI_API_KEY_ARG}|g" /tmp/index.html > /usr/share/nginx/html/index.html

# This is the same command as before to keep the server running
CMD ["nginx", "-g", "daemon off;"]
