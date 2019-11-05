import React from "react";
import { Poster } from "./Movie";
import styled from "styled-components";
import Overdrive from 'react-overdrive';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMovie, resetMovie } from './actions'

const backgroundImage =
  "https://cdn.pixabay.com/photo/2017/03/02/08/58/background-texture-2110724__340.jpg";

class MovieDetail extends React.Component {

  componentWillMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetMovie();
  }

  render() {
    const { movie } = this.props;
    return (
      <MovieWrapper backgroundImg={backgroundImage}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={movie.url} height="250" width="180" />
          </Overdrive>
          <div>
            <h1>Id : {movie.id}</h1>
            <h3>Album Id : {movie.albumId}</h3>
            <h3>Title : {movie.title}</h3>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  movieLoaded: state.movies.movieLoaded
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovie,
  resetMovie
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovieDetail));

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
      margin-left: 20px;
    }
    img {
      position: relative;
      top: -10rem;
    }
`;

const MovieWrapper = styled.div`
  position: relative;
  background: url(${props => props.backgroundImg}) no-repeat;
  padding-top : 50vh;
  background-size: cover;
`;


