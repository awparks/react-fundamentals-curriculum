const React = require('react');
const ZipcodeInput = require('./ZipcodeInput');

class Home extends React.Component {
  handleSubmit(city) {

  }

  render() {
    return (
      <div className='home-container'>
        <h1>Enter a city and state</h1>
        <ZipcodeInput />
      </div>
    )
  }
}

module.exports = Home;