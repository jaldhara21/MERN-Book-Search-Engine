# MERN-Book-Search-Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description.

The MERN Book Search Engine with GraphQL is a full-stack web application that allows avid readers to search for new books to read and manage their reading lists. It has been refactored to use GraphQL for efficient data fetching and modification. This application is built using the MERN stack, including MongoDB, Express.js, React, Node.js, and Apollo Server. Users can search for books, save their favorite books, and view their saved books in a personalized library.

## Table of Contents:
- [Overview](#Overview) 📖
- [Features](#Features) ✨
- [Usage Information](#Usage-Information) 🚀
- [Installation Process](#Installation-Process) 💻
- [Technologies Used](#Technologies-Used) 🛠️
- [License](#License) 💳
- [Questions](#Questions) ❓

# Overview

## Features
The MERN Book Search Engine with GraphQL offers the following features:

User registration and authentication.
Book search functionality powered by Google Books API.
The ability to save and remove books from a user's library.
A personalized library where users can view and manage their saved books.
Integration with MongoDB to store user data and book information.
GraphQL API for efficient data fetching and modification.


## Assigned User Story:
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

```
## Acceptance Criteria:
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

```

## Screenshots



## Usage Instructions:

Once the MERN Book Search Engine is up and running, you can access it through your web browser. Use the following features:

1. Register and log in to your account.
2. Use the search bar to look for books by title, author, or keywords.
3. Save books you're interested in to your personal library.
4. View and manage your saved books in the "My Library" section.
5. Remove books from your library when you're done with them.



## Deployed Application Link:
[Deployed Application Link:]()

## GitHub Repository:
[GitHub Repository:]()
 

## Installation Process
To set up the MERN Book Search Engine on your local machine, follow these steps:

1. Clone the repository from GitHub or download the ZIP folder.
2. Open the cloned or downloaded repository in your preferred code editor.
3. Navigate to both the server and client directories and run `npm install` to install the necessary dependencies.
4. Create a `.env` file in the server directory and add the required environment variables, including database connection information and API keys.
5. Start the server and client applications separately using `npm start` in each respective directory.

## Technologies Used
The MERN Book Search Engine with GraphQL is built with the following technologies:

1. MongoDB: A NoSQL database for storing user data and book information.
2. Express.js: A web application framework for building the server.
3. React: A JavaScript library for building user interfaces.
4. Node.js: A runtime environment for executing server-side code.
5. Apollo Server: A GraphQL server for efficient data fetching and modification.
6. Google Books API: Provides book search functionality.
7. Axios: A library for making HTTP requests from the client.
8. Bootstrap: A front-end framework for responsive web design.


## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

## Questions

For additional questions, you can reach me through:

- GitHub: [jaldhara21](https://github.com/jaldhara21)
- Email: jaldharapatel91@gmail.com