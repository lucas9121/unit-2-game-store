const React = require('react')
const Default = require('../Default')

class Show extends React.Component {
    render(){
        const {game, username} = this.props
        const reviews = game.reviews
        return(
            <Default account="gamer" username={username}>
                <div className='show-div'>
                    <h2>{game.name}</h2>
                    <img src={game.img} alt={game.name} />
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