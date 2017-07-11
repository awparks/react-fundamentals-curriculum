import React from 'react';
const moment = require('moment');
const Day = require('./Day');

class Detail extends React.Component {
  convertTemp (kelvin) {
    return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10)
  }

  render() {
    const props = this.props.location.state;
    return (
      <div className='detail-container'>
        {console.log(props)}
        <Day 
          date={props.dt} 
          icon={props.weather[0].icon} />
        <h1 className='detail-title'>{props.city}</h1>
        <div className='detail-item'>{props.weather[0].description}</div>
        <div className='detail-item'>Max: {this.convertTemp(props.temp.min)} degrees</div>
        <div className='detail-item'>Min: {this.convertTemp(props.temp.max)} degrees</div>
        <div className='detail-item'>Humidity: {props.humidity}</div>
      </div>
    )
  }
}

module.exports = Detail;