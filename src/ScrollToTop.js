import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import history from './history';
import { scrollToTop } from './Actions/jobs';



class ScrollToTop extends Component {

    componentDidUpdate(prevProps) {
        const { dispatch } = this.props;
        if (this.props.location !== prevProps.location) {
            dispatch(scrollToTop())
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(connect(null)(ScrollToTop))
