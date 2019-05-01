import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesList, directorsList } from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.getMovies();
    this.props.getDirectors();
  }

  renderMovies = movies => (movies ? movies.map(item => <div>{item.name}</div>) : null);

  render() {
    console.log(this.props);
    return <div>{this.renderMovies(this.props.data.movies)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => {
      dispatch(moviesList());
    },
    getDirectors: () => {
      dispatch(directorsList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
