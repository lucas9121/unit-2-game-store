const React = require('react')
const Default = require('../Default.jsx')

class New extends React.Component {
    render(){
        const {game, username} = this.props
        return(
            <Default account="gamer" username={username}>
                <nav>
                <a href="/games"><h1>GameHub</h1></a>
                        <div className="login">
                            {
                            !username ? <a href="/">Sign in</a> : 
                            <a className='account' href={`/user/${username}`}><button>My account</button></a>
                            }
                            <a className='logout' href="/user/logout"><button>Logout</button></a>
                        </div>
                <a href={`/user/cart/${username}`}><button>Cart</button></a>
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