const React = require('react')
const Default = require('../Default')

class Cart extends React.Component {
    render() {
        const {user, length} = this.props
        const cart = user.cart
        return(
            <Default account="gamer" username={user.username} length={length}>
                <div>
                    {
                        cart.length === 0 ? <h2>Cart is Empty</h2> :
                        cart.map((game) => {
                            return(
                                <div>
                                    <img src={game.img} alt={game.name} />
                                    <h2>{game.name}</h2>
                                    <div>
                                        <p>${game.price} </p>
                                        <form action={`/user/cart/buy/${user.username}/${game.name}`} method="POST">
                                        Qty: <input name={game.qty} type="number" defaultValue={game.qty}/>
                                        {game.qty > 0 ? <p className="stock">In Stock</p> : <p className="stock">Out of Stock</p> }
                                            <a href={`/user/cart/buy/${user.username}/${game.name}`}>
                                                <input type="submit" value='Buy' />
                                            </a>
                                        </form>
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
                </div>
            </Default>
        )
    }
}

module.exports = Cart