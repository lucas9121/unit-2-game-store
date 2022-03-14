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
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" 
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
                        crossOrigin="anonymous">
                    </link>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>GameHub</title>
                </head>
                <body>
                    <header>
                        <nav className='navbar navbar-expand-sm navbar-light bg-dark'>
                            <a className='navbar-brand text-primary' href={this.props.account === 'gamer' ? "/games" : "/dev"}><h1>GAMEHUB</h1></a>
                            <div className="login navbar-collapse">
                                <ul className='nav navbar-nav'>
                                    <li className="nav-item">
                                        {
                                        this.props.account === 'developer' ? <a className="account nav-link text-light" href={`/dev/${this.props.username}`}>My account</a> :
                                        this.props.account === 'gamer' ? <a className='account nav-link text-light' href={`/user/${this.props.username}`}>My account</a> :
                                        <a className='nav-link text-light' href="/">Sign in</a>
                                        }

                                    </li>
                                    <li className="nav-item">
                                        {
                                            this.props.account === 'gamer' ? <a className='nav-link text-light' href={`/user/cart/${username}`}> Cart <span className="badge badge-info small">5</span> </a>:
                                            this.props.account === 'developer' ? <a className='nav-link text-light' href='#'> Cart <span className="badge badge-info small">5</span> </a>:
                                            <a className='nav-link text-light' href={`/user/login`}> Cart <span className="badge badge-info small">5</span> </a>
                                        }
                                    </li>
                                    <li className="nav-item">
                                        {
                                        this.props.account === 'developer' ?  <a className='nav-link text-light' href="/dev/logout">Logout</a>:
                                        this.props.account === 'gamer' ? <a className='logout nav-link text-light' href="/user/logout">Logout</a> :
                                        <a href=""></a>
                                        }
                                    </li>
                                </ul>
                            </div>

                        </nav>
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