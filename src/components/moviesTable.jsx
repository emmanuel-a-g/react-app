import React, {Component} from 'react';
import Table from '../common/table';

class  MoviesTable extends Component {

  columns = [
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { key: 'like', content: item => <i onClick={() => {this.props.handleLike(item)}} id="heart"
    className={item.liked === true ? "fa fa-heart" : "fa fa-heart-o"}
    aria-hidden="true"> </i>},
    { key: 'delete', content: item => <button onClick={() => this.props.handleDelete(item)}
    className="btn btn-danger btn-sm">Delete</button> }, 
  ]
  
  render() {
    const { theMovies, onSort, sortColumn } = this.props;
    if (theMovies.length <= 0) {
      return null;
    }

    return (
      <Table 
      columns={this.columns}
      data={theMovies}
      onSort={onSort}
      sortColumn={sortColumn}
      />
    );
    }
}

export default MoviesTable;