import React from 'react';
const api = require('../utils/api');
const queryString = require('query-string');
const PropTypes = require('prop-types');
const moment = require('moment');
const Link = require('react-router-dom').Link;
const Day = require('./Day');

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      weather: '',
      forecast: '',
      loading: true
    }
  }

  componentWillMount() {
    this.setState(() => {
      return {
        city: queryString.parse(this.props.location.search).city
      }
    })
  }

  componentDidMount() {
    api.returnForecasts(this.state.city)
      .then((response) => {
        this.setState(() => {
          return {
            weather: response.weatherData,
            forecast: response.forecastData,
            loading: false
          }
        })
      })
  }

  handleCityClick(city) {
    city.city = this.state.city;
    this.props.history.push({
      pathname: '/detail/' + this.state.city,
      state: city
    }) 
  }

  render() {
    const loading = this.state.loading;
    if (loading) {
      return <div>Loading</div>
    }

    if (!loading) {
      return (
        <div className='forecast-container'>
          <h1 className='forecast-title'>{this.state.city}</h1>
          {this.state.forecast.data.list.map((day) => {
            return (
              <Day 
                date={day.dt} 
                icon={day.weather[0].icon} 
                onClick={this.handleCityClick.bind(this, day)} 
                key={day.dt} />
            )
          })}
        </div>
      );
    }
  }
}

module.exports = Forecast;