import React,{Component} from 'react';

var Fontawesome = require('react-fontawesome');

class MovieDetails extends Component{

    render(){
        const mov = this.props.movie
        return(
            <React.Fragment>   
            
                { this.props.movie ? (
                    <div>
                        <h3>{this.props.movie.title}</h3>

                        <Fontawesome name='star' className={mov.avg_rating > 0 ? 'orange': 0}/>
                        <Fontawesome name='star' className={mov.avg_rating > 1 ? 'orange': 0}/>
                        <Fontawesome name='star' className={mov.avg_rating > 2 ? 'orange': 0}/>
                        <Fontawesome name='star' className={mov.avg_rating > 3 ? 'orange': 0}/>
                        <Fontawesome name='star' className={mov.avg_rating > 4 ? 'orange': 0}/>
                        ({mov.no_of_ratings})
                        <p>{mov.description}</p>

                    </div>
                    
                ) : null}
            </React.Fragment>

        ) 
    }
}

export default MovieDetails;