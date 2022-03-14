const React = require('react')
const Default = require('../Default')

class Cart extends React.Component {
    render() {
        const {user} = this.props
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
                                        <p>Qty: {game.qty}</p>{game.qty > 0 ? <p className="stock">In Stock</p> : <p className="stock">Out of Stock</p> }
                                        <a href={`/user/cart/${user.username}/${game.name}`}>
                                            <form action={`/user/cart/${user.username}/${game.name}`} method="POST">
                                                <input type="submit" value='Buy' />
                                            </form>
                                        </a>
                                        <a href={`/user/cart/${user.username}/${game.name}`}>
                                            <form action={`/user/cart/${user.username}/${game.name}`} method="POST">
                                                <input type="submit" value='Remove' />
                                            </form>
                                        </a>
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