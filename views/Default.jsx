const React = require('react')

class Default extends React.Component {
    render() {
        const {length} = this.props
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
                <body className='container-md'>
                    <header>
                        <nav className='navigation navbar navbar-expand-sm navbar-light bg-dark'>
                            <a className='navbar-brand text-primary' href={this.props.account === 'gamer' ? "/games" : 
                            this.props.account === 'developer' ? "/dev" : 
                            "/"}><h1>GAMEHUB</h1></a>
                            <div className="login navbar-collapse">
                                <ul className='ul nav navbar-nav'>
                                    <li className="nav-item">
                                        {
                                        this.props.account === 'developer' ? <a className="account nav-link text-light" href={`/dev/account/${this.props.username}`}>My account</a> :
                                        this.props.account === 'gamer' ? <a className='account nav-link text-light' href={`/user/${this.props.username}`}>My account</a> :
                                        <form action="/user/login" method="post">
                                            <fieldset className='login-field needs-validation'>
                                                <div className="login-username">
                                                    <label htmlFor='username'>USERNAME: </label>
                                                    <input type="text" name="username" required />
                                                </div>
                                                <div className="login-password">
                                                    <label htmlFor='password'>PASSWORD: </label>
                                                    <input type="password" name="password" required />
                                                    <input className='btn btn-outline-primary btn-sm' type="submit" value="Login" />
                                                </div>
                                            </fieldset>
                                        </form>
                                        }

                                    </li>
                                    <li className="nav-item">
                                        {
                                            this.props.account === 'gamer' ? <a className='nav-link text-light' href={`/user/cart/${this.props.username}`}> Cart <span className="badge badge-info small">{length}</span> </a>:
                                            this.props.account === 'developer' ? <a className='nav-link text-light' href='/dev/new'> New Game </a>:
                                            <a className='nav-link text-light' href={`/user/signup`} disabled> Sign up </a>
                                        }
                                    </li>
                                    <li className="nav-item">
                                        {
                                        this.props.account === 'developer' ?  <a className='nav-link text-light' href="/user/logout">Logout</a>:
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