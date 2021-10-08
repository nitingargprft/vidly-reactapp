import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "../common/listGroup";
import MovieTable from "./movieTable";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
  };

  handleDelete = (movie) => {
    console.log(movie);

    const movies = this.state.movies.filter((p) => p._id !== movie._id);
    this.setState({ movies: movies });
  };

  handlePageChange = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };

  handleSelectGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  render() {
    const filterByGenre = this.state.selectedGenre
      ? this.state.movies.filter(
          (m) => m.genre._id === this.state.selectedGenre._id
        )
      : this.state.movies;

    const paginatedMovies = paginate(
      filterByGenre,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onSelectGenres={this.handleSelectGenre}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <MovieTable
            moviesCollection={paginatedMovies}
            onDeleteClick={this.handleDelete}
          />
          <Pagination
            itemCount={filterByGenre.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
