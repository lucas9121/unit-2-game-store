const React = require('react')
const express = require("express")
const User = require('../models/user')

class Default extends React.Component {
    render() {
        let user2 = User.find({})
        const {user, game} = this.props
        console.log(user2)
        console.log(user)
        console.log(game)
        return(
            <html lang='en'>
                <head>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="X-UA-Compatible" content='IE-edge' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <title>GameHub</title>
                </head>
                <body>
                    <header>
                        {/* <a href={user.accountType == 'gamer' ? "/games" : "/dev"}><h1>GameHub</h1></a>
                        <div className="login">
                            {
                            !user ? <a href="/">Sign in</a> : 
                            user.accountType == 'developer' ? <a className="account" href={`/dev/${user.username}`}><button>My account</button></a> && <a href="/dev/logout"><button>Logout</button></a>:
                            <a className='account' href={`/user/${user.username}`}><button>My account</button></a> || <a className='logout' href="/user/logout"><button>Logout</button></a>
                            }
                            {
                            user.accountType == 'developer' ?  <a href="/dev/logout"><button>Logout</button></a>:
                            <a className='logout' href="/user/logout"><button>Logout</button></a>
                            }
                        </div> */}
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default