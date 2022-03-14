const React = require('react')
const Default = require('../Default')

class Cart extends React.Component {
    render() {
        const {game} = this.props
        console.log(game)
        return(
            <Default>
                <p>this is the cart page for the games</p>
                {/* <p>Name: {game.name}</p>
                <p>qty: {game.qty} </p>
                <p>price: {game.price} </p> */}
            </Default>
        )
    }
}

module.exports = Cart