import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import JobListingComponent from '../Components/JobListingComponent';

//Action Creator
import { postJobDetails, postJobList } from '../Actions/jobs';

const mapStateToProps = state => {
  return { jobDetails: state.jobDetails }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    postJobList,
    postJobDetails
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobListingComponent))