import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieCard from '../MovieCard/MovieCard'


export default class MovieList extends Component {
  static propTypes = {
  }

  state= {
    movieData: []
  }

  componentDidMount() {
    this.loadData(this.props.match.params.category);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.category !== nextProps.match.params.category) {
      this.loadData(nextProps.match.params.category);
    }
  }

  loadData(category) {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=2be7d8ea984bb55c6cefc8e86802870c&language=en-US&page=1`)
    .then((res) =>  res.json())
    .then((data) => this.setState(
      {
        movieData: data.results
      },
      () => {console.log(this.state)}
    ))
    .catch()
    console.log('category!!!!!', category);
  }

  render() {
    console.log('MovieList', this.props);
    return (
      <div>
        <ul>
          {this.state.movieData.map((obj)=> <MovieCard key={obj.id} title={obj.title} text={obj.overview} rating={obj.vote_average} poster={obj.poster_path}  />) }
        </ul>
      </div>
    )
  }
}
