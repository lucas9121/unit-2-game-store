const React = require('react')
const Default = require('../Default.jsx')

class New extends React.Component {
    render(){
        const {game, username, length} = this.props
        return(
            <Default account="gamer" username={username} length={length}>
                <h2>{game.name} Review form</h2>
                <form action={`/games/${game._id}`} method="POST">
                    <fieldset>
                        <label htmlFor="description">
                            Write Review
                        </label>
                        <textarea name="description" id="" maxLength={'300'} cols="40" rows="3"></textarea>
                    </fieldset>
                    <input className='btn btn-outline-success' type="submit" value="Submit" />
                </form>
            </Default>
        )
    }
}

module.exports = New