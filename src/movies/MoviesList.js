import React from "react";
import Movie from "./Movie";
import styled from "styled-components";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from './actions';

class MoviesList extends React.Component {
  componentDidMount() {
    if (!this.props.moviesLoaded) {
      this.props.getMovies()
    }
  }

  render() {
    const { movies } = this.props;
    if (!this.props.moviesLoaded) return <h1>Loading...</h1>;
    return (
      <MovieGrid>
        {movies.map(data => (
          <Movie apidata={data} key={data.id} />
        ))}
      </MovieGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  moviesLoaded: state.movies.moviesLoaded
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 20vw 20vw 20vw 20vw 20vw;
  grid-row-gap: 1rem;
`;
