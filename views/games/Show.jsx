const React = require('react')
const Default = require('../Default.jsx')

class Show extends React.Component {
    render(){
        const game = this.props.game
        // console.log(game)
        return(
            <Default title="GameHub">
                <nav>
                    <a href={`/games`}>Home</a>
                </nav>
                <div>
                    <h2>{game.name}</h2>
                    <img src={game.img} alt={game.name} />
                    <div>
                        <h3>About this Game:</h3>
                        <p>{game.description}</p>
                    </div>
                    <div>
                        <p>Buy {game.name}</p>
                        <p>${game.price}</p>
                        <button>Add to Cart</button>
                    </div>
                    <div>
                        <h3>Customer Reviews</h3>
                        <ul>
                            {
                                game.reviews.map((review) => {
                                    return(
                                    <li>{review}</li>
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