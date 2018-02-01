
// setting up the db and web page searching tools
var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = Promise;
var db = require("../model/article.js");
var axios = require("axios");
var cheerio = require("cheerio");


// finding articles related to the search
app.get("/search", (req, res) => {

	axios.get(" ").then(response => {

		var $ = cheerio.load(response.data);

		$(" ").each((i, element) => {

			var result = {};

			result.title = $(this).children("a").text();
			
			result.link = $(this).children("a").attr("href");

			result.body = $(this).children("a").attr("href");

		});

		res.send("Results!");
	});
});


// sending article to the db for retrieval at saved page view
app.post("/articles/:id", (req, res) => {

	db.Article.create(req)

	.then(dbArticle => console.log(dbArticle))

	.catch(err => res.json(err))
});


// pulling out the saved articles for review
app.get("/articles", (req, res) => {
	
	db.Article.find({}).then(dbArticle => res.json(dbArticle))
	
	.catch(err => res.json(err))
});


// deleting the saved article
// app.delete("/articles/:id", (req, res) => {

// 	db.Article.findOne({ _id: req.params.id })

// 	.then(dbArticle => res.json(dbArticle))

// 	.catch(err => res.json(err))
// });


module.exports = app;
