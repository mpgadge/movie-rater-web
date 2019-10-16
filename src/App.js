import React,{Component} from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

class App extends Component {
  //movies = ['titanic', 'avatar','RHTDM'];

  state = {
    movies: [],
    selectedMovie: null
  }

  componentDidMount(){
    //fetch data from REST API
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization': 'Token a7ccc956ea681a615e6928302b55131d76096f44'
      }
    }).then( resp => resp.json())    
    .then( res => this.setState({movies: res}))
    .catch( error => console.log(error))
  }

  movieClicked = movie => {
    this.setState({selectedMovie : movie})
  }

  render(){     
            return (
              <div className="App">      
                  <h1>Movie Rater Web</h1>   
                  <div className='layout'>
                      <MovieList movies={this.state.movies} movieClicked={this.movieClicked}></MovieList> 
                      <MovieDetails movie={this.state.selectedMovie} />  
                  </div>
                  
              </div>
            );

  }
    
 
}

export default App;
