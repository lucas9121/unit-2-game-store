const React = require('react')
const Default = require('../Default')

class Signup extends React.Component {
    render(){
        return(
            <Default title="Signup">
                <div>
                    <form action="/user/signup" method="post">
                        <fieldset>
                        <legend>New User</legend>
                        <label>USERNAME: <input type="text" name="username" required /> </label>
                        <label
                            >PASSWORD: <input type="password" name="password" required />
                        </label>
                        <input type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Signup