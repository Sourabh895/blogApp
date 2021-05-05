const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


//Routes 
const blogRoutes = require('./routes/app');
const authRoutes = require('./routes/auth');



mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true,
useFindAndModify: false})
.then(() => {
    console.log("DB Connected")
})
.catch(err => {
    console.log("Error in connection");
    console.log(err);
})

// seedDB();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(session({
    secret: 'thisismysecret',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

//Initialising passport and session for storing the user input
app.use(passport.initialize());
app.use(passport.session());

//Configuring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.deleted = req.flash('deleted');
    res.locals.currentUser = req.user;
    next();
})


// Landing Page
app.get('/', (req, res) => {
    res.send("Landing Page")
})



// Path 
app.use(blogRoutes);
app.use(authRoutes);






app.listen(3300, () => {
    console.log("Server Running on port 3300")
})