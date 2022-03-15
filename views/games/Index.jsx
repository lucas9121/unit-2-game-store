const React = require('react')
const Default = require('../Default.jsx')

class Index extends React.Component {
    render(){
        const props = this.props
        const {games, username, length} = props
        console.log('Game Index!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(length)
        return(
            <Default account="gamer" username={username} length={length}>
                <div className='main-div'>
                    {
                        games.map((game) => {
                            return(
                                <div className={game.qty > 0 ? 'sub-div border border-success' : 'sub-div border border-danger'} >
                                    <a href={`/games/${game._id}`}> <img src={game.img} alt={game.name} /></a>
                                    <div className='banner-div bg-secondary'>
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