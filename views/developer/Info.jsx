const React = require('react')
const Default = require('../Default')

class Info extends React.Component {
    render() {
        const {user} = this.props
        return(
            <Default account="developer" username={user.username}>
                <div className='account-div'>
                    <h2>My Account</h2>
                    <div className="account-info">
                        <h4>Username</h4>
                        <p>{user.username}</p>
                        <h4>Name</h4>
                        <p>{user.name}</p>
                        <h4>Email</h4>
                        <p>{user.email} </p>
                        <h4>Account Type</h4>
                        <p style={{textTransform: 'capitalize'}}>{user.accountType}</p>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Info