import React from 'react';
const PropTypes = require('prop-types');
const api = require('../utils/api');
const Link = require('react-router-dom').Link;

class ZipcodeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState(() => {
      return {
        location: value
      }
    })
  }

  handleClick() {
    this.setState(() => {
      return {
        location: ''
      }
    })
  }

  render() {
    const match = this.props.match;

    return (
      <div className='zipcode-input' style={{flexDirection: this.props.flexDirection}}>
        <input 
          className='form-control' 
          type='text' 
          placeholder='St. Georges, Utah' 
          value={this.state.value} 
          onChange={this.handleChange} />
        <Link 
          to={{
            pathname: '/forecast',
            search: '?city=' + encodeURIComponent(this.state.location)
          }}
          type='button' 
          className='btn get-weather' 
          onClick={this.handleClick}>
          Get weather
        </Link>
      </div>
    )
  }
}

ZipcodeInput.propTypes = {
  flexDirection: PropTypes.string.isRequired
}

ZipcodeInput.defaultProps = {
  flexDirection: 'column'
}

module.exports = ZipcodeInput;