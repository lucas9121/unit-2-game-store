const { render } = require('express/lib/response')
const React = require('react')
const Default = require('./Default')

class Home extends React.Component {
    render() {
        return(
            <Default>
                <div>
                    <a href="/user/signup"><button>Signup</button></a>
                    <a href="/user/login"><button>Login</button></a>
                </div>
            </Default>
        )
    }
}

module.exports = Home