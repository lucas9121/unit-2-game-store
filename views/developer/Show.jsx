const React = require('react')
const Default = require('../Default')

class Show extends React.Component {
    render(){
        const {game, username} = this.props
        const reviews = game.reviews
        // const background = {background: 'linear-gradient(rgba(0, 123, 255, 0.37) ,rgba(0, 0, 0) 85%)'}
        return(
        <Default account="developer" username={username}>
            <div className='show-div'>
                <a style={{padding: '5px !Important', fontSize: '14px !Important'}} className="nav-link btn btn-info" href={`/dev/${game._id}/edit`}>Edit</a>
                <h2>{game.name}</h2>
                <img src={game.img} alt={game.name} />
                <p style={{background: 'linear-gradient(rgba(0, 123, 255, 0.37) ,rgba(0, 0, 0) 85%)', marginBottom: '0', padding: '2px'}}>Quantity: {game.qty}</p>
                <div className='about-div form-group'>
                    <h3>About this Game:</h3>
                    <hr />
                    <div className='about-description rounded'>
                        <p className=''>{game.description}</p>
                    </div>
                </div>
                <div className='review-div form-group'>
                    <h3>Customer Reviews</h3>
                    <hr />
                    <div className="review-comments">
                        {
                            reviews.map((review) => {
                                return(
                                    <div className='form-group'>
                                    <small>{review.name}</small>
                                    <p key={game._id} className="">{review.description}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Default>
        )

    }
    
}
module.exports = Show