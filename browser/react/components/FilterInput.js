import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const FilterInput = (props) => {
    const {handleChange} = props

    return (
      <div>
        <form className="form-group" style={{marginTop: '20px'}}>
          <input onChange={handleChange}
            className="form-control"
            placeholder="Enter artist name"
          />
        </form>
      </div>
    )
}

export default FilterInput
