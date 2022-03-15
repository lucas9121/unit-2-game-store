const React = require('react')
const Default = require('../Default.jsx')

class New extends React.Component {
    render(){
        const {game, username, length} = this.props
        return(
            <Default account="gamer" username={username} length={length}>
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