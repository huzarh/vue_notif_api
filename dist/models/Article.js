"use strict";

const mongoose = require("mongoose");
const ArticleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "Hoca adını girin."],
    // Fixed the error message.
    maxlength: [100, "Hoca adının uzunluğu 100 karakterden az olmalıdır."] // Fixed the error message.
  },

  name: {
    type: String,
    required: [true, "Ders adını girin."]
  },
  id: {
    type: Number,
    required: [true, "Ders ID'sini girin."]
  },
  details: {
    type: String,
    required: [true, "Ders detaylarını girin."],
    trim: true,
    maxlength: [5000, "Ders detayları maksimum 5000 karakter içermelidir."]
  },
  type: {
    type: String,
    required: [true, "Ders türünü girin."]
  },
  file_name: {
    type: String
  },
  code: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Article", ArticleSchema);