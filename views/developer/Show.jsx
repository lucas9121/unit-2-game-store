const React = require('react')
const Default = require('../Default')

class Show extends React.Component {
    render(){
        const {game, username} = this.props
        return(
            <Default account="developer" username={username}>
                <a className="nav-link btn btn-outline-primary" href={`/dev/${game._id}/edit`}>Edit</a>
                <div>
                    <h2>{game.name}</h2>
                    <img src={game.img} alt={game.name} />
                    <div>
                        <h3>About this Game:</h3>
                        <p>{game.description}</p>
                    </div>
                    <div>
                        <p>${game.price}</p>
                    </div>
                </div>
            </Default>
        )

    }
    
}
module.exports = Show