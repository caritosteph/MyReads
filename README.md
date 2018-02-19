# MyReads Project

MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Install

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend

[`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* `getAll` - returns a collection of book objects
* `update` - returns a Promise which resolves to a JSON object containing the response data of the POST request.
* `search` - returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Extra features

## License
This project has [MIT](https://github.com/caritosteph/MyReads/blob/master/LICENSE) License
