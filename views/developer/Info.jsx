const React = require('react')
const Default = require('../Default')

class Info extends React.Component {
    render() {
        const {user} = this.props
        return(
            <Default account="developer" username={user.username}>
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