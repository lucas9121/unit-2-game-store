const mongoose = require('./connection')

const {Schema, model} = mongoose

const gameSchema = new Schema({
    name: String,
    description: String,
    img: String,
    Price: Number,
    qty: Number,
    reviews: String
})

const Game = model('Game', gameSchema)

module.exports = Game