const mongoose = require('./connection')

const {Schema, model} = mongoose

const reviewSchema = new Schema({
    name: String,
    description: String,
})

const Review = model('Review', reviewSchema)

module.exports = Review