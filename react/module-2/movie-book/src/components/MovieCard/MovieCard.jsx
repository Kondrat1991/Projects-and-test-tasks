import React from 'react'
import PropTypes from 'prop-types'

const MovieCard = ({title, text, rating, poster}) => {
  return (

    <li>
      <img src={'http://image.tmdb.org/t/p/' + 'w185' + poster } alt="poster"/>
      <h2 className="movie-name" > {title} </h2>
      <p className="movie-text">{text} </p>
      <h3 className="movie-rating">{rating}</h3>

    </li>
  )
};

MovieCard.propTypes = {
   title:PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired,
   poster: PropTypes.string
};

MovieCard.defaultProps = {
  poster: "/no-image.png"
};

export default MovieCard;













