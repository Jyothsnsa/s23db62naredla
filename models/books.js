const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
    author: String,
    price: Number,
    publishedyear: Number
})
module.exports = mongoose.model("Books",
booksSchema)