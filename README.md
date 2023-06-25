# Programming-Blog Web Application Documentation

## Introduction

The Programming-Blog web application is a blogging platform developed using the Angular framework.
 It leverages the NoSQL database Firebase by Google for data storage and is integrated 
 with the BlogCMS backend application, also developed in Angular.
  This documentation provides an overview of the application's features, architecture, and usage.

## Features

User Registration and Authentication:

Users can register and create an account to access the application.
Authentication is handled securely through Firebase Authentication.
Blog Post Management:

Users can create, edit, and delete blog posts.
Each blog post includes a title, content, and publication date.
Posts are stored in the Firebase database.
Commenting System:

Users can leave comments on individual blog posts.
Comments are stored in the Firebase database and associated with the respective blog post.
Blog Subscription:

Users can subscribe to a blog to receive updates on new posts.
Subscriptions are managed through the BlogCMS backend application.

## Architecture

The Programming-Blog web application follows a client-server architecture with the following components:

Frontend (Angular):

The frontend is built using Angular, a TypeScript-based framework for building web applications.
It provides the user interface for interacting with the application.
Angular's components, services, and routing are utilized for the application's structure and functionality.
Backend (BlogCMS - Angular):

The backend application, BlogCMS, is also developed using Angular.
It handles server-side operations, including managing subscriptions and integrating with Firebase.
Database (Firebase):

Firebase, a NoSQL cloud-based database service provided by Google, is used for storing application data.
The database stores blog posts, comments, and user information.
Authentication (Firebase Authentication):

Firebase Authentication is employed for user registration and authentication.
It provides secure user authentication and management features.

## Access

Visit the deployed version at https://programing-blog-86c73.web.app.

## Conclusion
The Programming-Blog web application provides a comprehensive platform for publishing blog posts, allowing users to comment on posts and subscribe to blogs. With its Angular frontend, integration with Firebase, and collaboration with the BlogCMS backend application, the application offers a seamless and efficient blogging experience.