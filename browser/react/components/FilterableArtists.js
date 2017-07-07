import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import AllArtists from './AllArtists'
import FilterInput from './FilterInput'


export default class FilterableArtists extends Component {
  constructor () {
    super();
    this.state = {
      artists: [],
      value: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({ artists }));
  }

  handleChange(event) {
    this.setState({value:event.target.value})
  }

  render () {
    const artists = this.state.artists.filter((artist) => artist.name.match(this.state.value));

    return (
      <div>
        <AllArtists artists={artists}/>
        <FilterInput handleChange={this.handleChange} />
      </div>
        );
    }
}
