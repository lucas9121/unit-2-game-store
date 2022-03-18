const React = require('react')
const Default = require('../Default.jsx')

class Index extends React.Component {
    render(){
        const props = this.props
        const {games, username, length} = props
        return(
            <Default account="gamer" username={username} length={length}>
                <div className='main-div'>
                    {
                        games.map((game) => {
                            const imageStyle = {
                                backgroundImage: `url(${game.img})`,
                            }
                            return(
                                <div className={game.qty > 0 ? 'sub-div border border-success' : 'sub-div border border-danger'} >
                                    <a style={imageStyle} href={`/games/${game._id}`}> </a>
                                    <div className='banner-div bg-secondary'>
                                        <h2>{game.name}</h2>
                                        <div>
                                            {game.price <= 0 ? <p>Free</p> : <p>${game.price}</p>}
                                            {game.qty > 0 ? <p className="text-success stock">Available</p> : <p className="text-danger stock">Sold Out</p> }
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