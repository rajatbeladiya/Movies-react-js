import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from 'react-overdrive';

const Movie = ({ apidata }) => (
  <div>
    <Link to={`/${apidata.id}`}>
      <Overdrive id={apidata.id}>
        <Poster src={apidata.url} alt={apidata.url} height="250" />
      </Overdrive>
    </Link>
  </div>
);

export default Movie;

Movie.propTypes = {
  apidata: propTypes.shape({
    title: propTypes.string.isRequired,
    albumId: propTypes.number.isRequired
  }).isRequired
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
