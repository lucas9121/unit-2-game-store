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
                            <label>
                                USERNAME: <input type="text" name="username" required /> </label>
                            <label>
                                PASSWORD: <input type="password" name="password" required />
                            </label>
                            <label>
                                Name: <input type="name" name="name" required />
                            </label>
                            <label>
                                EMAIL: <input type="email" name="email" required />
                            </label>
                            <label>Account Type:</label>
                            <select name="accountType">
                            <option  value="gamer" >Gamer</option>
                            <option value="developer">Developer</option>
                            </select>
                            {/* <label>
                                Gamer <input type="radio" name="account" value="gamer"/>
                            </label>
                            <label>
                                Developer <input type="radio" name="account" value="developer"/>
                            </label> */}
                            <input type="submit" value="Create Account" />
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Signup