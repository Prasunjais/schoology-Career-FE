import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import history from './history';
import NotFound from './Pages/NotFound';
import JobsListing from './Pages/JobsListing';
import ScrollToTop from './ScrollToTop';

//CSS Styles
import './Resources/css/style.css';
import './Resources/css/spinner.css';

//Scroll the page to top on route change
const handlePageChange = () => {
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <Router history={history} >
            <ScrollToTop>
              <Switch>
                <Route path="/" exact component={JobsListing} />
                <Route path="/404" component={NotFound} />
                <Redirect from='*' to='/404' />
              </Switch>
            </ScrollToTop>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(App);

