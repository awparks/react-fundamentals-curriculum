const React = require('react');
const ZipcodeInput = require('./ZipcodeInput');
const Link = require('react-router-dom').Link;

class Header extends React.Component {
  handleSubmit(e) {

  }

  render() {
    return (
      <div className='header'>
        <h1 className='site-title'>
          <Link
            to='/'>
            Reactive Weather
          </Link>
        </h1>
        <ZipcodeInput flexDirection='row' />
      </div>
    )
  }
}

module.exports = Header;