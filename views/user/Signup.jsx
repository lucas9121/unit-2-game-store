const React = require('react')
const Default = require('../Default')

class Signup extends React.Component {
    render(){
        return(
            <Default account=''>
                <div>
                    <form className='needs-validation' action="/user/signup" method="post">
                        <fieldset className='sign-up'>
                            <legend className='text-center h1'>New User</legend>
                                <div className="form-group">
                                    <label htmlFor="username" className='col-form-label'>Username:</label>
                                    <input type="text" className='form-control form-control-sm' name="username" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-form-label">Password:</label>
                                    <input type="password" className='form-control form-control-sm' name="password" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className="col-form-label">Name:</label>
                                    <input type="name" className='form-control form-control-sm' name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input type="email" className='form-control form-control-sm' name="email" required />
                                </div>
                                <div className="form-group account-type">
                                    <label htmlFor='accountType' className="">Account Type:</label>
                                    <select name="accountType">
                                        <option  value="gamer" >Gamer</option>
                                        <option value="developer">Developer</option>
                                    </select>
                                </div>
                            {/* <label>
                                Gamer <input type="radio" name="account" value="gamer"/>
                            </label>
                            <label>
                                Developer <input type="radio" name="account" value="developer"/>
                            </label> */}
                            <input type="submit" className='btn btn-outline-success' value="Create Account" />
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Signup