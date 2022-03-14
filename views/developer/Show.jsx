const React = require('react')
const Default = require('../Default')

class Show extends React.Component {
    render(){
        const {game, username} = this.props
        return(
            <Default>
                <a href="/dev"><h1>GameHub</h1></a>
                 <div className="login">
                    <a className='account' href={`/dev/${username}`}><button>My account</button></a>
                    <a className='logout' href="/user/logout"><button>Logout</button></a>
                </div>
                <div>
                    <h2>{game.name}</h2>
                    <img src={game.img} alt={game.name} />
                    <div>
                        <h3>About this Game:</h3>
                        <p>{game.description}</p>
                    </div>
                    <div>
                        <p>${game.price}</p>
                        <a href={`/games/cart/${game._id}`}>
                        <form action={`/games/cart/${game._id}`} method="POST">
                            <input type="submit" value='Add to Cart' />
                        </form>
                        </a>
                    </div>
                </div>
            </Default>
        )

    }

    
}