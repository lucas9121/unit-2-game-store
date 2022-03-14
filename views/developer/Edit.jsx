const React = require('react')
const Default = require('../Default')

class Edit extends React.Component {
    render(){
        const {username} = this.props
        return(
            <Default account="developer" username={username}>
                <a href="/dev"><h1>GameHub</h1></a>
                 <div className="login">
                    <a className='account' href={`/dev/${username}`}><button>My account</button></a>
                    <a className='logout' href="/user/logout"><button>Logout</button></a>
                </div>
                <h2>Edit {this.props.game.name} </h2>
                <form className='needs-validation' action={`/dev/${this.props.game._id}?_method=PUT`} method="POST">
                    <div className='row'>
                        <div className='form-group col'>
                            <label htmlFor='name' className='text-light' >Name</label>
                            <input name="name" type="text" defaultValue={this.props.game.name} className='form-control form-control-sm bg-dark text-light' id='name' required/>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="price" className='text-light'>Price</label>
                            <input name="title" type="text" defaultValue={this.props.game.price} className='form-control form-control-sm bg-dark text-light' maxLength={'15'} id='price' required/>
                            <div id='price' className="valid-feedback">Looks good!</div>
                            <div id='price' className="invalid-feedback">Please provide price</div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description" className='text-light'>  Description</label>
                        <textarea name="description" defaultValue={this.props.game.description} id="description description-box" className='form-control bg-dark text-light' cols="40" rows="3" required></textarea>
                        <div id='description' className="valid-feedback">Looks good!</div>
                        <div id='description' className="invalid-feedback">Please provide description</div>
                    </div>
                    <input className='btn btn-outline-success' type="submit" value="Edit Game" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit