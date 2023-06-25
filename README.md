# BlogCMS Project Documentation

The BlogCMS project is a backend application written in Angular that connects to the NoSQL Firebase database from Google. It serves as a management interface for the web application Programming Blog. In BlogCMS, we can add categories, posts, assign posts to categories, check subscriptions, and control comment content.

# Table of Contents

1. [Project Description](#sekcja-1)
2. [Technologies](#sekcja-2)
3. [Functionalities](#sekcja-3)
    1. [Adding Categories 3.1](#podsekcja-3.1)
    2. [Adding Categories 3.2](#podsekcja-3.2)
    3. [Adding Categories 3.3](#podsekcja-3.3)
    4. [Adding Categories 3.4](#podsekcja-3.4)
    5. [Adding Categories 3.5](#podsekcja-3.5)

## Project Description {#sekcja-1}

BlogCMS is a backend tool that enables management of the Programming Blog web application. It acts as an intermediary between the user interface and the Firebase database. It allows for adding, editing, and deleting categories, posts, subscriptions, and managing comment content.

## Technologies {#sekcja-2}

The BlogCMS project was implemented using the following technologies:

Angular: A JavaScript framework for building user interfaces.
Firebase: A Google platform that offers solutions such as NoSQL database, authentication, hosting, and more.

## Functionalities {#sekcja-3}

### Adding Categories {#podsekcja-3.1}
The "Adding Categories" feature allows BlogCMS users to add new categories for posts. Categories can help organize content and facilitate navigation for readers. The user can provide a name and an optional description for the category, and then save it to the Firebase database.

### Adding Posts {#podsekcja-3.2}

The "Adding Posts" feature allows BlogCMS users to create new blog posts. The user can enter a title, post content, and optionally add an image illustrating the content. After creating the post, it is saved in the Firebase database.

### Assigning Posts to Categories {#podsekcja-3.3}

The "Assigning Posts to Categories" feature allows BlogCMS users to categorize their posts. The user can choose an existing category or create a new one, and then assign the post to the selected category. This helps organize content and facilitates navigation for readers on the blog.

### Checking Subscriptions {#podsekcja-3.4}

The "Checking Subscriptions" feature allows BlogCMS users to monitor subscribers of the Programming Blog web application. The user can view a list of subscribers, see their contact information, and optionally manage subscriptions.

### Controlling Comment Content {#podsekcja-3.5}

The "Controlling Comment Content" feature allows BlogCMS users to moderate comments posted under the posts. The user can view a list of comments, approve or reject a comment, and remove inappropriate content. This helps maintain the quality of discussions and ensure high-quality content.