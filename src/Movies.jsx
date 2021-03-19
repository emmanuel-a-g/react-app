import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Pagination from './components/pagination';
import { paginate } from './utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from './services/fakeGenreService';
import MoviesTable from './components/moviesTable';
import _ from 'lodash';

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      pageSize: 4,
      currentPage: 1,
      genres: [],
      selectedGenre: undefined,
      sortColumn: { path: 'title', order: 'asc'},
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.genreSelect = this.genreSelect.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  //want to render all the movies
  //want to be able to delete them with button
  //want to be able to have table dissapear with no left movies
  componentDidMount() {
    const genres = [{"_id": "","name": "All Genres"}, ...getGenres()];
    this.setState({movies: getMovies(), genres});
  }

  handleDelete(mov) {
    // console.log('I am deleting this one!', mov.title);
    let movies = this.state.movies;
    let movieInDb = movies.find(m => m._id === mov._id);
    movies.splice(movies.indexOf(movieInDb), 1);
    this.setState({movies: movies});
  }

  handleLike(mov) {
    //we add a property like to True, if true then false.
    let movies = this.state.movies;
    let movieInDb = movies.find(m => m._id === mov._id);
    //we need to check status of liked or if exists
    if (!movieInDb['liked']) {
      movieInDb['liked'] = true;
    } else {
      movieInDb['liked'] = false;
    }
    this.setState({movies: movies});
  }

  pageChange(page) {
    //it will only render the movies in currentlyShowing
    this.setState({currentPage: page});
  }

  genreSelect(genre) {
    console.log('Genre:', genre);
    this.setState({selectedGenre: genre, currentPage: 1});
  }

  handleSort = sortColumn => {
      // console.log('Chaned to path:', path);
    //first ascending sort
    this.setState({sortColumn});
  }

  getPageData = () => {
    const {selectedGenre, sortColumn, movies, currentPage, pageSize} = this.state;
    let filtered = selectedGenre && selectedGenre._id ?
    movies.filter(m => m.genre._id === selectedGenre._id) : movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const theMovies = paginate(sorted, currentPage, pageSize);
    return {totalCount: filtered.length, data: theMovies};
  }

  render() {
    console.log('Are the props actually passing down?', this.props);
    let itemsCount = this.state.movies.length;
    const { currentPage, pageSize, sortColumn} = this.state;

    const {totalCount, data: theMovies} = this.getPageData(); 
    
    return (
      <div className="row">
      <div className="col-3">
        <ListGroup 
        items={this.state.genres} 
        onSelectedItem={this.genreSelect}
        selectedItem={this.state.selectedGenre}
        />
      </div>
      <div className="col">
        { itemsCount > 0 ? <h5>There are currently {totalCount} movies.</h5> :
        <h5>There are currently no movies available to see.</h5>}
       
          <MoviesTable 
          theMovies={theMovies}
          sortColumn={sortColumn}
          handleDelete={this.handleDelete}
          handleLike={this.handleLike} 
          onSort={this.handleSort}
          />
          <Pagination 
          itemsCount={totalCount}
          pageSize={pageSize}
          pageChange={this.pageChange} 
          currentPage={currentPage}/>
      </div>
    
      </div>
    );
  }
}
 
export default Movies;