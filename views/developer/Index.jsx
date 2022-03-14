const React = require('react')
const Default = require('../Default')

class Index extends React.Component {
    render() {
        const {games} = this.props
        return(
            <Default>
                <a href="/dev"><h1>GameHub</h1></a>
                <div className="login">
                    <a className='account' href={`/dev/${user.username}`}><button>My account</button></a>
                    <a className='logout' href="/user/logout"><button>Logout</button></a>
                </div>
                <div>
                    {
                        games.map((game) => {
                            return(
                                <div>
                                    <a href={`/dev/${game._id}`}> <img src={game.img} alt={game.name} /></a>
                                    <h2>{game.name}</h2>
                                    <div>
                                    <p>${game.price}</p>
                                    {game.qty > 0 ? <p className="stock">In Stock({game.qty})</p> : <p className="stock">Out of Stock</p> }
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

module.exports = Index