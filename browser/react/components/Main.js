import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import FilterableArtists from './FilterableArtists'
import SingleAlbum from './SingleAlbum';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import NewPlaylist from './NewPlaylist';
import axios from 'axios'
import Playlist from './Playlist'

export default class Main extends Component {
  constructor (){
    super()
    this.state = {
      playlists: []
    }
    this.addPlaylist = this.addPlaylist.bind(this)
  }
   componentDidMount(){
     axios.get('/api/playlists')
     .then(res => res.data)
     .then((playlists) =>{
       this.setState({playlists})
     })
   }

   addPlaylist(newPlayList){
     axios.post('/api/playlists',newPlayList)
     .then(res => res.data)
     .then(result => {
       this.setState((prevState) => {
         return {playlist : prevState.playlists.concat(result)}
       })
     })

   }
  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlists={this.state.playlists}/>
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={FilterableArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route exact path="/newplaylist" render={() => (<NewPlaylist addPlaylist={this.addPlaylist}/>)} />
              <Route path="/playlists/:playlistId" component={Playlist} />
              <Route component={StatefulAlbums} />

            </Switch>
          </div>
          <Player />
        </div>
    </Router>
    );
  }
}
