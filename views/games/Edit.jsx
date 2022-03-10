const React = require('react')
const Default = require('../Default.jsx')

class Edit extends React.Component{
    render() {
        const {game} = this.props
        return(
            <Default>
                <nav>
                    <a href="/games">Home</a> <br/>
                    <a href={`/games/${game._id}`}>Back to {game.name}</a>
                </nav>
                <h2>Edit {game.name} Review form</h2>
                <form action={`/games/${game._id}?_method=PUT`} method="put">
                    <fieldset>
                        <label htmlFor="reviews">
                            Write Review
                        </label>
                        <textarea name="reviews" id="" maxLength={'300'} cols="40" rows="3" defaultValue={game.reviews} ></textarea>
                    </fieldset>
                    <input type="submit" value="Submit" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit