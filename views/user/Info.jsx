const React = require('react')
// const User = require('../../models/user')
const Default = require('../Default')

class Info extends React.Component {
    render() {
        const {user} = this.props
        return(
            <Default>
                <a href={user.accountType == 'gamer' ? "/games" : "/dev"}><h1>GameHub</h1></a>
                <div className="login">
                    <a className='account' href={`/user/${user.username}`}><button>My account</button></a>
                    <a className='logout' href="/user/logout"><button>Logout</button></a>
                </div>
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