const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home');
const Header = require('./Header');
const Forecast = require('./Forecast');
const Detail = require('./Detail');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/detail' component={Detail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;