const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: "Enter book's title"},
    subtitle: { type: String },
    authors: { type: [String], required: "Enter book's author" },
    image: { type: String, required: "Enter an image link" },
    description: { type: String, required: "Enter description for the book" },
    googleId: { type: String, required: "Enter Google Id", unique: true },
    link: { type: String, required: "Enter Google book's link" }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;