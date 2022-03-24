const React = require('react')
const Default = require('../Default')

class New extends React.Component {
    render(){
        const {username} = this.props
        return(
            <Default account="developer" username={username}>
                <h2 className='text-light text-center'>New Game</h2>
                <form className='needs-validation' action="/dev" method="POST">
                    <div className='row'>
                        <div className='form-group col'>
                            <label htmlFor='name' className='text-light' >Name</label>
                            <input name="name" type="text" className='form-control form-control-sm' id='name' required/>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="price" className='text-light'>Price</label>
                            <input name="price" type="number" className='form-control form-control-sm' id='price' required/>
                            <div id='price' className="valid-feedback">Looks good!</div>
                            <div id='price' className="invalid-feedback">Please provide price</div>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="img" className='text-light'>Image</label>
                            <input name="img" type="url" className='form-control form-control-sm' id='url' required/>
                            <div id='url' className="valid-feedback">Looks good!</div>
                            <div id='url' className="invalid-feedback">Please provide url</div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description" className='text-light'>  Description</label>
                        <textarea name="description" id="description description-box" className='form-control' cols="40" rows="3" required></textarea>
                        <div id='description' className="valid-feedback">Looks good!</div>
                        <div id='description' className="invalid-feedback">Please provide description</div>
                    </div>
                    <input className='btn btn-outline-success' type="submit" value="Create Game" />
                </form>
            </Default>
        )
    }
}

module.exports = New