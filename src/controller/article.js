const Article = require("../models/Article");
const asyncHandler = require("express-async-handler");


// api/v1/books

exports.getArticle = asyncHandler(async (req, res) => { 

  const articles = await Article.find() 

  res.status(200).json({
    success: true, 
    data: articles,
  });
});


exports.upArticle = asyncHandler(async (req, res) => {
  const article = await Article.create(req.body);  

  res.status(200).json({
    success: true,
    data: article,
  });
});