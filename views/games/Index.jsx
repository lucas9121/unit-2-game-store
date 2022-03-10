const React = require('react')
const Default = require('../Default.jsx')

class Index extends React.Component {
    render(){
        const props = this.props
        const {games} = props
        console.log('New Log!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        // console.log(`Games are: ${games}`)
        return(
            <Default title='GameHub'>
                <div>
                    {
                        games.map((game) => {
                            // console.log('Individual Games!!!!!!!!!')
                            // console.log(game)
                            // console.log('Game review 0' + game.reviews[0])
                            return(
                                <div>
                                    <a href={`/games/${game._id}`}> <img src={game.img} alt={game.name} /></a>
                                    <h2>{game.name}</h2>
                                    <div>
                                    <p>${game.price}</p>
                                    {game.qty > 0 ? <p class="stock">In Stock</p> : <p class="stock">Out of Stock</p> }
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