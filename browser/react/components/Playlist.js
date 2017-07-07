import React from 'react'
import axios from 'axios'
import Songs from './Songs'
import AddSongContainer from './AddSongContainer'

export default class Playlist extends React.Component {
  constructor(){
    super()
    this.state = {
      playlist: {},
      songs: []
    }
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this)
  }

  loadPlaylist(playlistId){
    axios.get(`/api/playlists/${playlistId}`)
      .then(res => res.data)
      .then(playlist => this.setState({
        playlist
      }))
  }

  componentDidMount(){
    const playlistId = this.props.match.params.playlistId
    this.loadPlaylist(playlistId)
    this.allSongList()
  }

  componentWillReceiveProps(nextProps){
    const newPlayListId = nextProps.match.params.playlistId
    const currentplaylistId = this.props.match.params.playlistId
    if (newPlayListId !== currentplaylistId){
      this.loadPlaylist(newPlayListId)
    }
  }

  addSongToPlaylist(songId){
    axios.post(`/api/playlists/${this.state.playlist.id}/songs`,{id: songId})
      .then(res => res.data)
      .then((songAdded)=>{
          this.setState((prevState)=>{
              return {playlist:  Object.assign({},prevState.playlist,{
                songs: [...prevState.playlist.songs,songAdded]
              })}
          })
      })
  }

  allSongList(){
    axios.get('/api/songs')
    .then(res => res.data)
    .then((songs) =>{
      this.setState({songs})
    })
  }


  render(){
    return <div>
      <h3>{ this.state.playlist.name }</h3>
      <Songs songs={this.state.playlist.songs} /> {/** Hooray for reusability! */}
      { this.state.playlist.songs && !this.state.playlist.songs.length && <small>No songs.</small> }
      <hr />
      <AddSongContainer songs={this.state.songs} addSongToPlaylist={this.addSongToPlaylist}/>
    </div>
  }
}
