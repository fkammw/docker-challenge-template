Docker Challenge 2 Report

Student Name: Florence Kam
Student ID: 000900955

Introduction
This report recorded the steps I taken to set up a Node.js application in a Docker container, using NGINX as a reverse proxy to expose the application's endpoints to external clients. It includes building a Docker image for the Node.js application, configuring NGINX, and managing both services using Docker Compose.

1. Environment Setup:

    - Installed Docker Desktop on Windows.
    - Forked the GitHub repository and cloned it to my local machine.
    - node.js is set up

2. Create the Node.js Application

    - Initialized a new Node.js project using npm init -y in the project directory.
    - Created a simple Express.js server in app.js that responds to /api/books with a JSON list of books.
    - Installed Express.js using npm install express and verified the package.json and package-lock.json files were correctly updated.

3. Dockerize the Node.js Application

    - Wrote a Dockerfile to use the official Node.js image, copy the application files, install dependencies, and start the Node.js server.
    - Built the Docker image for the Node.js application using docker build.

4. Configure NGINX as a Reverse Proxy
    - Created an NGINX configuration file (default.conf) to define the reverse proxy settings.
    - Set up NGINX to listen on port 80 inside the container and forward requests to the Node.js application.

5. Use Docker Compose to Manage Containers
    - Created a docker-compose.yml file defining services for both the Node.js application and NGINX.
    - Included configuration for building the Docker images and establishing the network relationships between containers.
    - Ran docker-compose up --build to start the multi-container setup.
6. Testing the Application
    - Accessed http://localhost:8080/api/books from a web browser to confirm that the NGINX reverse proxy correctly forwarded requests to the Node.js application.(generate single book)
7. Modify the Application Data
    - Update app.js:
        - Added two new book objects to the books array in app.js.
        - Ensured each book has a unique id and proper title and author attributes.
8. Rebuild and Restart the Application
    - Stop the Current Containers:

        - Ran docker-compose down in the terminal to stop and remove the running containers.
    - Rebuild the Docker Images:

        - Executed docker-compose up --build to rebuild the Docker images and start the containers with the updated application code.
    - Check for Successful Build and Run:

        - Verified the terminal output for any errors during the build and watched for the message indicating the server is running.
9. Testing the Application
    - Accessed http://localhost:8080/api/books from a web browser to confirm that the NGINX reverse proxy correctly forwarded requests to the Node.js application.(generate multiple books)

Conclusion
The Node.js application now successfully returns an updated list of books via the /api/books endpoint. This update was accomplished by modifying the application code and restarting the Docker containers.