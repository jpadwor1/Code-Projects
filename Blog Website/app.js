//jshint esversion:6
const Blog = require('./server');
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const googleAuth = require('./googleAuth'); // Path toGoogle OAuth
const ejs = require("ejs");
const mongoose = require('mongoose');
var lodash = require('lodash');
const LocalStrategy = require("passport-local");
const User = require("./User");
const passportLocalMongoose = require('passport-local-mongoose');


const app = express();
let posts = [];
var userProfile;


app.use(require("express-session")({
  secret: "Rusty is a dog",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

// Configure passport-local-mongoose


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // User is authenticated, allow access to the route
    return next();
  }

  // User is not authenticated, redirect to the login page or display an error
  res.redirect('/login');
}


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));






//Homepage
app.get("/", async (req,res)=>{
  try{
  posts = await Blog.find({});
  res.render("home",{posts:posts});
  }catch(err){
    console.log(err);
  }
});

//About Page
app.get("/about", (req,res)=>{
  res.render("about");
});

//Contact
app.get("/contact", (req,res)=>{
  res.render("contact");
});

//Compose
app.get("/compose", (req,res)=>{
 
  res.render("compose", {posts: posts});
});

//compose Post
app.post("/compose", async (req,res)=>{
 try {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  
  await Blog.create({title: post.title, content: post.content});
  console.log(post);
  posts.push(Blog.find({}));
  res.redirect("/");

}catch(err){
  console.log(err);
}
});

app.get('/posts/:title', (req,res) =>{
 const requestedTitle = lodash.lowerCase(req.params.title);
 
 posts.forEach(post => {
  const storedTitle = lodash.lowerCase(post.title);
  if(storedTitle === requestedTitle){
    const storedContent = post.content;
    res.render("partials/post", {storedTitle: post.title,storedContent:storedContent });
  }
 });
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});

// Showing register form
app.get("/register", function (req, res) {
  res.render("register");
});

// Handling user signup
app.post("/register", async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password
  });
  
  return res.status(200).json(user);
});


//Showing login form
app.get("/login", function (req, res) {
  res.render("login");
});



//Handling user login
app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret', // Redirect to the secret page on successful login
  failureRedirect: '/login' // Redirect to the login page on failed login
}));

//Handling user logout 
app.get("/logout", function (req, res) {
  req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server started on port 3000");
});


app.get('/protected-route', ensureAuthenticated, (req, res) => {
  // Handle the protected route logic
  res.send('You are auhenticated')
});


//Google Auth Get
app.get('/auth/google', 
passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/error' }),
function(req, res) {
  // Successful authentication, redirect success.
  res.redirect('/success');
});

app.get("/success", function (req, res) {
  console.log(User.username);
  res.render("success", {User:User});
});

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
