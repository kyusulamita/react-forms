import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {

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
    console.log(this.state.value)
  }

  render () {
    const artists = this.state.artists.filter((artist) => artist.name.match(this.state.value));

    return (
      <div>
        <h3>Artists</h3>
        <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
                </div>
              );
            })
          }
        </div>
        <form className="form-group" style={{marginTop: '20px'}}>
          <input onChange={this.handleChange}
            className="form-control"
            placeholder="Enter artist name"
          />
        </form>
      </div>
    );
  }
}
