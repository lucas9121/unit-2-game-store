const React = require('react')
const Default = require('../Default')

class Cart extends React.Component {
    render() {
        const {user, length} = this.props
        const cart = user.cart
        return(
            <Default account="gamer" username={user.username} length={length}>
                <div className='cart-div'>
                    {
                        cart.length === 0 ? <h2 className='text-center text-light'>Cart is Empty</h2> :
                        cart.map((game) => {
                            return(
                                <div className='cart-info'>
                                    <img src={game.img} alt={game.name} />
                                    <h2>{game.name}</h2>
                                    <div className='cart-choice'>
                                        {game.price <= 0 ? <p>Free</p> : <p>${game.price/game.qty} </p>}
                                        {game.price <= 0 ? <p></p> : <p>X</p>}
                                        <form action={`/user/cart/buy/${user.username}/${game.name}`} method="POST" className='buy-form'>
                                        Qty: <input name="buyNumber" className='qty-input' type="number" defaultValue={game.qty}/>
                                        {game.qty > 0 ? <p className="stock">In Stock</p> : <p className="stock" style={{color: 'red'}}>Out of Stock</p> }
                                            <a href={`/user/cart/buy/${user.username}/${game.name}`}>
                                                <input type="submit" className='btn btn-success' value='Buy' />
                                            </a>
                                        </form>
                                        <a href={`/user/cart/${user.username}/${game.name}`}>
                                            <form action={`/user/cart/${user.username}/${game.name}`} method="POST">
                                                <input type="submit" className='btn btn-danger' value='Remove' />
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