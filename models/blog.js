const mongoose = require('mongoose');
const Review = require('./review')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    img: {
        type: String
    },
    author: {
        type: String
    }, 
    desc: {
        type: String
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

 const Blog = mongoose.model('Blog', blogSchema);
 
 module.exports = Blog;

