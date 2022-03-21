const React = require('react')
const Default = require('../Default')

class Edit extends React.Component {
    render(){
        const {username} = this.props
        return(
            <Default account="developer" username={username}>
                <h2>Edit {this.props.game.name} </h2>
                <form className='edit-form' action={`/dev/${this.props.game._id}?_method=PUT`} method="POST">
                    <div className='row'>
                        <div className='form-group col'>
                            <label htmlFor='name' className='text-primary'>Name</label>
                            <input name="name" type="text" defaultValue={this.props.game.name} className='form-control form-control-sm' id='name'/>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="price" className='text-primary'>Price</label>
                            <input name="price" type="number" defaultValue={this.props.game.price} className='form-control form-control-sm' id='price'/>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="qty" className='text-primary'>Quantity</label>
                            <input name="qty" type="number" defaultValue={this.props.game.qty} className='form-control form-control-sm' id='qty'/>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="img" className='text-primary'>Image</label>
                            <input name="img" type="url" defaultValue={this.props.game.img} className='form-control form-control-sm' id='url'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description" className='text-primary'>  Description</label>
                        <textarea name="description" defaultValue={this.props.game.description} id="description description-box" maxLength={'500'} className='form-control' cols="40" rows="3"></textarea>
                    </div>
                    <input className='btn btn-outline-success' type="submit" value="Edit Game" />
                </form>
                <form action={`/dev/${this.props.game._id}?_method=DELETE`} method="POST">
                    <input className='btn btn-danger' type="submit" value='Delete Game' />
                </form>
            </Default>
        )
    }
}

module.exports = Edit