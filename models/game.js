const mongoose = require('./connection')

const {Schema, model} = mongoose

const gameSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number,
    reviews: Array
})

const Game = model('Game', gameSchema)

module.exports = Game