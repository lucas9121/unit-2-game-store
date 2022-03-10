const React = require('react')
const Default = require('../Default.jsx')

class New extends React.Component {
    render(){
        const {game} = this.props
        return(
            <Default title="GameHub">
                <nav>
                    <a href="/games">Home</a> <br/>
                    <a href={`/games/${game._id}`}>Back to {game.name}</a>
                </nav>
                <h2>{game.name} Review form</h2>
                <form action={`/games/${game._id}`} method="post">
                    <fieldset>
                        <label htmlFor="reviews">
                            Write Review
                        </label>
                        <textarea name="reviews" id="" maxLength={'300'} cols="40" rows="3"></textarea>
                    </fieldset>
                    <input type="submit" value="Submit" />
                </form>
            </Default>
        )
    }
}

module.exports = New