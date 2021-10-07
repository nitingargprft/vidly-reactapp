import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "../common/listGroup";
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
    this.setState({ selectedGenre: genre });
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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedMovies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
