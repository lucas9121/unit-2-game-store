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
                    <div className='purchase-div form-group'>
                        <h4>Buy {game.name}</h4>
                        <p>Quantity: {game.qty}</p>
                        <div>
                            <p>${game.price}</p>
                            {game.qty > 0 ?
                                <a href={`/games/cart/${game._id}`}>
                                <form action={`/games/cart/${game._id}`} method="POST">
                                    <input className='btn btn-info' type="submit" value='Add to Cart' />
                                </form>
                                </a> : 
                                <a href={`/games/cart/${game._id}`} disabled>
                                <form action={`/games/cart/${game._id}`} method="POST" disabled>
                                    <input className='btn btn-outline-info disabled' type="submit" value='Add to Cart' disabled/>
                                </form>
                                </a>
                            }
                        </div>
                    </div>
                    <div className='about-div form-group'>
                        <h3>About this Game:</h3>
                        <hr />
                        <div className='about-description rounded'>
                            <p className=''>{game.description}</p>
                        </div>
                    </div>
                    <div className='review-div form-group'>
                        <h3>Customer Reviews</h3>
                        <hr />
                        <a href={`/games/${game._id}/new`}><button className='btn btn-outline-primary'>Write a review</button></a>
                        <div className="review-comments">
                            {
                                reviews.map((review) => {
                                    return(
                                        <div className='form-group'>
                                        <small>{review.name}</small>
                                        <p key={game._id} className="">{review.description}</p>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Show