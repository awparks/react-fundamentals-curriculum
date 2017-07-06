import React from 'react';
const PropTypes = require('prop-types');

class ZipcodeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState(() => {
      return {
        location: value
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.location);
    // this.props.onSubmit(
    //   this.state.location
    // )
  }

  render() {
    return (
      <div className='zipcode-input' style={{flexDirection: this.props.flexDirection}}>
        <form onSubmit={this.handleSubmit}>
          <input 
            className='form-control' 
            type='text' 
            placeholder='St. Georges, Utah' 
            value={this.state.value} 
            onChange={this.handleChange} />
          <button type='submit' className='btn get-weather' disabled={!this.state.location}>
            Get weather
          </button>
        </form>
      </div>
    )
  }
}

ZipcodeInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  flexDirection: PropTypes.string.isRequired
}

ZipcodeInput.defaultProps = {
  flexDirection: 'column'
}

module.exports = ZipcodeInput;