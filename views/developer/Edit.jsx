const React = require('react')
const Default = require('../Default')

class Edit extends React.Component {
    render(){
        const {username} = this.props
        return(
            <Default account="developer" username={username}>
                <h2>Edit {this.props.game.name} </h2>
                <form className='needs-validation' action={`/dev/${this.props.game._id}?_method=PUT`} method="POST">
                    <div className='row'>
                        <div className='form-group col'>
                            <label htmlFor='name' className='text-primary' >Name</label>
                            <input name="name" type="text" defaultValue={this.props.game.name} className='form-control form-control-sm' id='name' required/>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="price" className='text-primary'>Price</label>
                            <input name="price" type="number" defaultValue={this.props.game.price} className='form-control form-control-sm' maxLength={'15'} id='price' required/>
                            <div id='price' className="valid-feedback">Looks good!</div>
                            <div id='price' className="invalid-feedback">Please provide price</div>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="img" className='text-primary'>Image</label>
                            <input name="img" type="url" defaultValue={this.props.game.img} className='form-control form-control-sm' id='url' required/>
                            <div id='url' className="valid-feedback">Looks good!</div>
                            <div id='url' className="invalid-feedback">Please provide url</div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description" className='text-primary'>  Description</label>
                        <textarea name="description" defaultValue={this.props.game.description} id="description description-box" className='form-control' cols="40" rows="3" required></textarea>
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