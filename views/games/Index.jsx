const React = require('react')
const Default = require('../Default.jsx')

class Index extends React.Component {
    render(){
        const props = this.props
        const {games, username} = props
        // console.log('New Log!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        // console.log(username)
        // console.log(`Games are: ${games}`)
        return(
            <Default>
                <nav className='navbar navbar-expand-sm navbar-light bg-dark'>
                    <a className='navbar-brand text-primary' href="/games"><h1>GAMEHUB</h1></a>
                    <div className="login navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"> 
                                {
                                !username ? <a href="/">Sign in</a> : 
                                <a className='account nav-link text-light' href={`/user/${username}`}>My account</a>
                                }
                            </li>
                            <li className="nav-item">
                                <a className='logout nav-link text-light' href="/user/logout">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link text-light' href={`/user/cart/${username}`}>
                                    Cart <span className="badge badge-info small">5</span> 
                                    </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='main-div bg-light'>
                    {
                        games.map((game) => {
                            // console.log('Individual Games!!!!!!!!!')
                            // console.log(game)
                            // console.log('Game review 0' + game.reviews[0])
                            return(
                                <div className='sub-div'>
                                    <a href={`/games/${game._id}`}> <img src={game.img} alt={game.name} /></a>
                                    <div className='banner-div'>
                                    <h2>{game.name}</h2>
                                    <p>${game.price}</p>
                                    {game.qty > 0 ? <p className="text-success">In Stock</p> : <p className="text-danger">Out of Stock</p> }
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