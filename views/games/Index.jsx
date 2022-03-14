const React = require('react')
const Default = require('../Default.jsx')

class Index extends React.Component {
    render(){
        const props = this.props
        const {games, username} = props
        return(
            <Default account="gamer" username={username}>
                {/* <nav className='navbar navbar-expand-sm navbar-light bg-dark'>
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
                                <a className='nav-link text-light' href={`/user/cart/${username}`}>
                                    Cart <span className="badge badge-info small">5</span> 
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a className='logout nav-link text-light' href="/user/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <div className='main-div'>
                    {
                        games.map((game) => {
                            return(
                                <div className={game.qty > 0 ? 'sub-div border border-success' : 'sub-div bborder order-danger'} >
                                    <a href={`/games/${game._id}`}> <img src={game.img} alt={game.name} /></a>
                                    <div className='banner-div'>
                                        <h2>{game.name}</h2>
                                        <div>
                                            <p>${game.price}</p>
                                            {game.qty > 0 ? <p className="text-success stock">In Stock</p> : <p className="text-danger stock">Out of Stock</p> }
                                        </div>
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