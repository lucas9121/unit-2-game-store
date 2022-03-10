const React = require('react')

class Default extends React.Component {
    render() {
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
                        <h1>{this.props.title}</h1>
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