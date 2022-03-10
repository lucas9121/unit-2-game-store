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
                                    <h2>{game.name}</h2>
                                    <a href={`/games/${game._id}`}> <img src={game.img} alt={game.name} /></a>
                                    <p>Price: ${game.price}</p>
                                    <p>Quantity: {game.qty} </p>
                                    <p>{game.reviews.length} Reviews</p>
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