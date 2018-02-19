# MyReads Project

MyReads project, allows you to select and categorize books you have read, are currently reading, or want to read. You can also search for books and categorize them.

## Installation

You need to have [Node](https://nodejs.org/en/download/) and [NPM](https://docs.npmjs.com/cli/install) to run the app.
To install My Reads follow the following steps:
 1. Clone the repository `git clone https://github.com/caritosteph/MyReads.git` 
 2. Install all project dependencies `npm install`
 3. Start the development server `npm start`
 4. Listen the server on http://localhost:3000
 
## Frontend
### Main Page
- [X] The home page shows 3 shelves for books
- [X] Main page show a control that allow users to move book between shelves.
- [X] Using BookAPI.js file to keep data when refresh the page.

### Search page
- [X] The search page has a search input field where the user types and the list of books is displayed on the page.
- [x] Search results are allow to categorized each book “currently reading”, “want to read”, or “read”.
- [x] The new categorize is show in the Main page.

## Backend Server

[`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* `getAll()` - returns a collection of book objects
* `update(book, shelf)` - returns a Promise which resolves to a JSON object containing the response data of the POST request.
* `search(query)` - returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
