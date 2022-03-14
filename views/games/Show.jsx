const React = require('react')
const Default = require('../Default.jsx')

class Show extends React.Component {
    render(){
        const {game, username} = this.props
        console.log(game)
        // console.log(username)
        return(
            <Default account="gamer" username={username}>
                <nav>
                <a href="/games"><h1>GameHub</h1></a>
                        <div className="login">
                            {
                            !username ? <a href="/">Sign in</a> : 
                            <a className='account' href={`/user/${username}`}><button>My account</button></a>
                            }
                            <a className='logout' href="/user/logout"><button>Logout</button></a>
                        </div>
                <a href={`/user/cart/${username}`}><button>Cart</button></a>
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
                        <a href={`/games/cart/${game._id}`}>
                        <form action={`/games/cart/${game._id}`} method="POST">
                            <input type="submit" value='Add to Cart' />
                        </form>
                        </a>
                    </div>
                    <div>
                        <h3>Customer Reviews</h3>
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