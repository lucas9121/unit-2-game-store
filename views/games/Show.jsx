const React = require('react')
const Default = require('../Default.jsx')

class Show extends React.Component {
    render(){
        const {game, username} = this.props
        return(
            <Default account="gamer" username={username}>
                <div className='show-div'>
                    <h2>{game.name}</h2>
                    <img src={game.img} alt={game.name} />
                    <div className='about-div form-group'>
                        <h3>About this Game:</h3>
                        <hr />
                        <div className='bg-dark text-light border border-light rounded'>
                            <p className=''>{game.description}</p>
                        </div>
                    </div>
                    <div className='purchase-div form-group jumbotron-sm'>
                        <p>Buy {game.name}</p>
                        <p>${game.price}</p>
                        <a href={`/games/cart/${game._id}`}>
                        <form action={`/games/cart/${game._id}`} method="POST">
                            <input type="submit" value='Add to Cart' />
                        </form>
                        </a>
                    </div>
                    <div className='review-div form-group'>
                        <h3>Customer Reviews</h3>
                        <hr />
                        <ul>
                            {
                                game.reviews.map((review) => {
                                    return(
                                    <div>
                                        <li key={game._id} >{review}</li>
                                        <li>By: {game.username}</li>
                                    </div>
                                    )
                                })
                            }
                        </ul>
                        <a href={`/games/${game._id}/new`}><button>Write a review</button></a>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Show