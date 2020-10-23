import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobListing from '../../Containers/JobListing';

// job listing 
class JobsListing extends Component {
  // render function 
  render() {
    return (
      <React.Fragment>
        <JobListing />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(JobsListing);