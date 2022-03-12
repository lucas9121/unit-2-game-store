const React = require('react')
// const User = require('../../models/user')
const Default = require('../Default')

class Info extends React.Component {
    render() {
        const {user} = this.props
        return(
            <Default title="GameHub">
                <nav>
                    <a href="/games">Home</a>
                </nav>
                <div>
                    <p>Username: {user.username}</p>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email} </p>
                    <p>account: {user.accountType}</p>
                </div>
            </Default>
        )
    }
}

module.exports = Info