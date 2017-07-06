import React from 'react'

export default class NewPlaylist extends React.Component {

  constructor () {
    super()
    this.state = {
      value: '',
      disabled : false
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleOnSubmit(event){
    event.preventDefault()
    console.log(this.state.value)
    this.setState({value: ''})
  }

  handleChange(event) {
    this.setState({value:event.target.value})
    if(event.target.value.length > 16 || !event.target.value.length) this.setState({disabled:true})
    else this.setState({disabled: false})
  }

  render () {
    return <div className="well">
      <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" onChange={this.handleChange} value={this.state.value} required />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={this.state.disabled} >Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
      {
        this.state.disabled ? <div className="alert alert-warning">This is an invalid input</div> : <div></div>
      }
    </div>
  }

}
