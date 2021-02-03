import axios from "axios"



const API = {

    // Get book from google search 
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
      console.log(savedBooks)
        return axios.post("/api/books/", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
};

export default API;