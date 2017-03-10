"use strict";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userstoryActions from '../../actions/userstoryAction';
import UserStoryList from './userstoryList';

class UserStoryPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToUserstoryManager = this.redirectToUserstoryManager.bind(this);
    }
    redirectToUserstoryManager() {
        this.props.router.push('/userstory/create');
    }
    render() {
        // let userstories = [{
        //     id: 1,
        //     title: 'Title 1',
        //     description: 'Description 1',
        //     status: 'status 1'
        // }];
        const {userstories} = this.props;
        return (
            <div>
                <h1>User stories</h1>
                <div className="addUser">
                <input type="submit"
                    value="Add Userstory"
                    className="btn btn-primary"
                    onClick={ this.redirectToUserstoryManager } />
                <div className="fa fa-plus" aria-hidden="true"></div>
          </div>
                <UserStoryList userstories={ userstories } />
            </div>
        );
    }
}

UserStoryPage.propTypes = {
    userstories: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        userstories: state.userstories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userstoryActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserStoryPage);