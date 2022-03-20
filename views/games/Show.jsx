const React = require('react')
const Default = require('../Default.jsx')

class Show extends React.Component {
    render(){
        const {game, username, length, review} = this.props
        const reviews = game.reviews
        return(
            <Default account="gamer" username={username} length={length}>
                <div className='show-div'>
                    <h2>{game.name}</h2>
                    <img src={game.img} alt={game.name} />
                    <div className='purchase-div form-group jumbotron-sm'>
                        <h4>Buy {game.name}</h4>
                        <p>Quantity: {game.qty}</p>
                        <div>
                            <p>${game.price}</p>
                            <a href={`/games/cart/${game._id}`}>
                            <form action={`/games/cart/${game._id}`} method="POST">
                                {game.qty <= 0 ? <input className='btn btn-outline-success' type="submit" value='Add to Cart' disabled/> : <input className='btn btn-outline-info' type="submit" value='Add to Cart' /> }
                            </form>
                            </a>
                        </div>
                    </div>
                    <div className='about-div form-group'>
                        <h3>About this Game:</h3>
                        <hr />
                        <div className='about-description bg-secondary text-light border border-dark rounded'>
                            <p className=''>{game.description}</p>
                        </div>
                    </div>
                    <div className='review-div form-group'>
                        <h3>Customer Reviews</h3>
                        <hr />
                            {
                                reviews.map((review) => {
                                    return(
                                    <div className='form-group bg-secondary'>
                                        <p key={game._id} className="">{review.description}</p>
                                        <p className='small'>By:{review.name}</p>
                                    </div>
                                    )
                                })
                            }
                        <a href={`/games/${game._id}/new`}><button className='btn btn-outline-primary'>Write a review</button></a>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Show