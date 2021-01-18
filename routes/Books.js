const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({ 
    
    title: String,
    author: String,
    // will be date object
    description: String,
    
  });

module.exports = mongoose.model("books", messageSchema);