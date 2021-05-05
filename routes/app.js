const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');
const {isLoggedIn} = require('../middleware');

// Display all the blogs
router.get('/blogs', async(req, res) => {
  try {
    const blogs =  await Blog.find({})
    res.render('blogs/index', {blogs});
  } catch(e) {
    console.log('Something Went Wrong');
    req.flash('error', 'Cannot Find Blogs')
    res.render('error')
  }
  
});

// Get the form for new product
router.get('/blogs/new', isLoggedIn , (req, res) => {
     res.render('blogs/new');
 })


// Create a New Product
router.post('/blogs', isLoggedIn, async(req, res) => {
  try {
    await Blog.create(req.body.product);
    req.flash('success', 'Created Successfully');
      res.redirect('/blogs')
  } catch(e) {
    console.log('Something Went Wrong');
    req.flash('error', 'Cannot Create Blogs')
    res.render('error')
  }
 
   })


// Show a particular blog
router.get('/blogs/:id', async(req, res) => {
  try {
    const blog =  await Blog.findById(req.params.id).populate('reviews');
    res.render('blogs/show', {blog});
  }catch(e) {
    console.log('e.message');
    req.flash('error', 'Cannot Find Blogs');
    res.redirect('/error')
  }
 
})


//Edit a Particular Blog
router.get('/blogs/:id/edit', isLoggedIn, async(req, res) => {
  try {
    const blog =  await Blog.findById(req.params.id);
    res.render('blogs/edit', {blog})
  } catch (e) {
    console.log('e.message');
    req.flash('error', 'Cannot Edit this Blogs');
    res.redirect('/error')
  }
})


router.patch('/blogs/:id',isLoggedIn, async(req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body.product);
    req.flash('success', 'Updated Succesfully');
    res.redirect(`/blogs/${req.params.id}`)
  } catch (e)
 {
  console.log('e.message');
  req.flash('error', 'Cannot Update this Blogs');
  res.redirect('/error')
 }   
})



// Delete a Particular Blog
router.delete('/blogs/:id',isLoggedIn, async(req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    req.flash('deleted', 'Deleted Succesfully');
    res.redirect('/blogs')
  } 
  catch(e) {
    console.log(e.message);
    req.flash('error', 'Cannot Delete this Blogs');
    res.redirect('/error')
  }

})


// Creating a New Comment on a Blog
router.post('/blogs/:id/review',isLoggedIn, async(req, res) => {
   try {
    const blog = await Blog.findById(req.params.id);
    const review = new Review({
      user : req.user.username,
        ...req.body
    });
 
   blog.reviews.push(review);
 
   await review.save();
   await blog.save();
 
   res.redirect(`/blogs/${req.params.id}`);
  }
   catch(e) {
    console.log(e.message);
    req.flash('error', 'Cannot Delete this Blogs');
    res.redirect('/error')
   }
})


router.get('/error', (req, res) => {
  res.status(404);
  res.render('error');
})



module.exports = router;