import React from 'react';
const PropTypes = require('prop-types');
const moment = require('moment');

class Day extends React.Component {
  render() {
    const iconFile = '/app/images/weather-icons/' + this.props.icon + '.svg';
    const day = moment(this.props.date * 1000).format("dddd, MMMM D");

    return (
      <div className='forecast-day' onClick={this.props.onClick}>
        <img className='weather-icon' src={iconFile} />
        <h3 className='day'>{day}</h3>
      </div>
    )
  }
}

Day.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

module.exports = Day;