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
                            const imageStyle = {
                                backgroundImage: `url(${game.img})`,
                            }
                            return(
                                <div className={game.qty > 0 ? 'sub-div border border-success' : 'sub-div border border-danger'}>
                                    <a style={imageStyle} href={`/dev/${game._id}`}></a>
                                    <div className='banner-div bg-secondary'>
                                        <h2>{game.name}</h2>
                                        <div>
                                            <p>${game.price}</p>
                                            {game.qty > 0 ? <p className="text-success stock">Available({game.qty})</p> : <p className="text-danger stock">Sold Out. Add aditional inventory.</p> }
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