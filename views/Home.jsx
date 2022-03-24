const { render } = require('express/lib/response')
const React = require('react')
const Default = require('./Default')

class Home extends React.Component {
    render() {
        const props = this.props
        const {games} = props
        return(
            <Default account="">
                <div className='main-div'>
                    {
                        games.map((game) => {
                            const imageStyle = {
                                backgroundImage: `url(${game.img})`,
                            }
                            return(
                                <div className={game.qty > 0 ? 'sub-div border border-success' : 'sub-div border border-danger'} >
                                    <a style={imageStyle} href={`/home/${game._id}`}> </a>
                                    <div className='banner-div'>
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

module.exports = Home