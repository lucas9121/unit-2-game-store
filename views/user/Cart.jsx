const React = require('react')
const Default = require('../Default')

class Cart extends React.Component {
    render() {
        const {user} = this.props
        // console.log(user)
        // console.log(user.cart)
        const cart = user.cart
        return(
            <Default>
                <p>this is the cart page for the user</p>
                <div>
                    {
                        cart.map((game) => {
                            return(
                                <div>
                                    <img src={game.img} alt={game.name} />
                                    <h2>{game.name}</h2>
                                    <div>
                                        <p>${game.price} </p>
                                        {game.qty > 0 ? <p className="stock">In Stock</p> : <p className="stock">Out of Stock</p> }
                                        <a href="#"><button>Buy</button></a>
                                        <a href="#"><button>Remove</button></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                
                    <a href="#"><button>Buy All</button></a>
                </div>
            </Default>
        )
    }
}

module.exports = Cart