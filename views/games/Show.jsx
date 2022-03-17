const React = require('react')
const Default = require('../Default.jsx')

class Show extends React.Component {
    render(){
        const {game, username, length, review} = this.props
        return(
            <Default account="gamer" username={username} length={length}>
                <div className='show-div'>
                    <h2>{game.name}</h2>
                    <img src={game.img} alt={game.name} />
                    <div className='about-div form-group'>
                        <h3>About this Game:</h3>
                        <hr />
                        <div className='about-description bg-secondary text-light border border-light rounded'>
                            <p className=''>{game.description}</p>
                        </div>
                    </div>
                    <div className='purchase-div form-group jumbotron-sm'>
                        <p>Buy {game.name}</p>
                        <p>${game.price}</p>
                        <p>Quantity: {game.qty}</p>
                        <a href={`/games/cart/${game._id}`}>
                        <form action={`/games/cart/${game._id}`} method="POST">
                            {game.qty <= 0 ? <input type="submit" value='Add to Cart' disabled/>: <input type="submit" value='Add to Cart' />}
                        </form>
                        </a>
                    </div>
                    <div className='review-div form-group'>
                        <h3>Customer Reviews</h3>
                        <hr />
                            {
                                game.reviews.map((review) => {
                                    return(
                                    <div className='form-group bg-secondary'>
                                        <p key={game._id} className="">{review}</p>
                                        <p className='small'>{game.person}</p>
                                    </div>
                                    )
                                })
                            }
                        <a href={`/games/${game._id}/new`}><button>Write a review</button></a>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Show