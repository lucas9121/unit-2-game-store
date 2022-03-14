const React = require('react')
const Default = require('../Default')

class Index extends React.Component {
    render() {
        const {games, username} = this.props
        return(
            <Default account="developer" username={username}>
                <div className='main-div'>
                    {
                        games.map((game) => {
                            return(
                                <div className={game.qty > 0 ? 'sub-div border border-success' : 'sub-div border border-danger'}>
                                    <a href={`/dev/${game._id}`}> <img src={game.img} alt={game.name} /></a>
                                    <div className='banner-div bg-secondary'>
                                        <h2>{game.name}</h2>
                                        <div>
                                            <p>${game.price}</p>
                                            {game.qty > 0 ? <p className="text-success stock">In Stock({game.qty})</p> : <p className="text-danger stock">Out of Stock</p> }
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