import React from 'react'

export default class NewPlaylist extends React.Component {

  constructor () {
    super()
    this.state = {
      value: ''
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleOnSubmit(event){
    event.preventDefault()
    console.log(this.state.value)
  }

  handleChange(event) {
    this.setState({value:event.target.value})
    //console.log(event.target.value)
  }

  render () {
    return <div className="well">
      <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  }

}
