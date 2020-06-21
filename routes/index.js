const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = require("mongodb").ObjectId;
const MongoClient = require("mongodb").MongoClient;

// Admin Schema
const Admin = require('../models/admin');

// Admin Schema
const Slider = require('../models/slider');


MongoClient.connect('mongodb+srv://Ramesh:ramesh123@cluster0-n5l8y.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,  useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;
    const business = client.db("business");
    console.log("Business Connected"); 
        
    // Welcome Page
    router.get('/', (req, res) =>  {
        business.collection('products').find().toArray(function (err, result){
            res.render("home",  { products : result })
        })
    });

    router.get("/products/:id", function(req,res){
        if(err) throw err;
        business.collection('products').
        findOne({"_id": ObjectId(req.params.id)},
        function(err, product) {
            res.render("viewproduct", { product: product })
        })    
    });

    // Get Sliders
    // router.get('/slider', (req, res) =>  {
    //     business.collection('slides').find().toArray(function (err, result){
    //         res.render("slider",  { banner : result })
    //     })
    // });
    router.get('/sliderupload', (req, res) => {
        business.collection('products').find().toArray(function (err, result){
            if(err) throw err;
            res.render("admin" , { products : result })
        })
    });

    // Add Slider Image Product
    router.post('/sliderupload', function(req, res, next) {
        const image  = req.body.image;
        business.collection('slides').insertOne(image,
        function( err, document){
            if(err) throw err;
            res.redirect("/");
        })   
    });

    // Admin 
    router.get('/admin', (req, res) => {
        business.collection('products').find().toArray(function (err, result){
            res.render("admin" , { products : result })
        })
    });

    // Category
    // router.get('/category', (req, res) => {
    //     business.collection('products').find().toArray(function (err, result){
    //         res.render("category" , { products : result })
    //     })
    // });

    // Dashboard
    router.get('/dashboard', (req, res) => {
        business.collection('products').find().toArray(function (err, result){
            res.render("dashboard" , { products : result })
        })
    });

    // Add Product
    router.post('/admin', function(req, res, next) {
        const {title, 
                description, 
                image,
                category,
                price } = req.body;
        business.collection('products').insertOne(req.body,
        function( err, document){
            if(err) throw err;
            res.redirect("/");
        })   
    });

});

module.exports = router;