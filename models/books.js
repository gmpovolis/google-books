const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: "Enter book's title"},
    author: { type: String, required: "Enter book's author" },
    img: { data: Buffer, contentType: String },
    date: { type: Date, default: Date.now }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;