import React from 'react'
import AddSongForm from './AddSongForm'

export default class AddSongContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      songId: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
		this.setState({
			songId: event.target.value
		})

	}

	handleSubmit(event){
		event.preventDefault()
		this.props.addSongToPlaylist(this.state.songId)
	}


  render(){
    return (
      <div>
        <AddSongForm songs={this.props.songs} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

}
