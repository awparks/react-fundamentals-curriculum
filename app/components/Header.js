const React = require('react');
const ZipcodeInput = require ('./ZipcodeInput');

class Header extends React.Component {
  handleSubmit(e) {

  }
  
  render() {
    return (
      <div className='header'>
        <h1 className='site-title'>Reactive Weather</h1>
        <ZipcodeInput flexDirection='row' onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

module.exports = Header;