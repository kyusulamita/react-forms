import React from 'react'
import axios from 'axios'
import Songs from './Songs'

export default class Playlist extends React.Component {
  constructor(){
    super()
    this.state = {
      playlist: {}
    }
  }

  componentDidMount(){
    const playlistId = this.props.match.params.playlistId

    axios.get(`/api/playlists/${playlistId}`)
      .then(res => res.data)
      .then(playlist => this.setState({
        playlist
      }))
  }

  render(){
    return <div>
      <h3>{ this.state.playlist.name }</h3>
      <Songs songs={this.state.playlist.songs} /> {/** Hooray for reusability! */}
      { this.state.playlist.songs && !this.state.playlist.songs.length && <small>No songs.</small> }
      <hr />
    </div>
  }
}
