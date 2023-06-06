const mongoose = require('mongoose');

async function main(){
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
      console.log("Connected to db!");
    } catch(err){
      console.log(err);
    }
  }
  main();

  const blogSchema = new mongoose.Schema({
    title: String,
    content: String
  });

  const Blog = mongoose.model("Blog", blogSchema);

  module.exports = Blog;