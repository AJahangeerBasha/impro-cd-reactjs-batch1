import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import * as userstoryActions from '../../actions/userstoryAction';
import UserstoryForm from './UserstoryForm';

class UserstoryManager extends Component {
    constructor(props, context) {
        super(props, context);
        let pageMode;
        if (this.context.router.getCurrentLocation().pathname.includes('/delete')) {
            pageMode = true;
        } else {
            pageMode = false;
        }
        this.state = {
            userstory: Object.assign({}, props.userstory),
            errors: {},
            saving: false,
            deleteMode: pageMode
        };
        this.updateUserstoryState = this.updateUserstoryState.bind(this);
        this.saveUserstory = this.saveUserstory.bind(this);
        this.deleteUserstory = this.deleteUserstory.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.userstory.id != nextProps.userstory.id) {
            // Necessary to populate form when existing userstory is loaded directly.
            this.setState({ userstory: Object.assign({}, nextProps.userstory) });
        }
    }

    updateUserstoryState(event) {
        const field = event.target.name;
        let userstory = this.state.userstory;
        userstory[field] = event.target.value;
        return this.setState({ userstory: userstory });
    }
    userstoryFormIsValid() {
        let formIsValid = true;
        let errors = {};
        if (this.state.userstory.title === undefined || this.state.userstory.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }
        else if (this.state.userstory.description === undefined || this.state.userstory.description.length < 10) {
            errors.description = 'Description must be at least 10 characters.';
            formIsValid = false;
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    deleteUserstory(event) {
        event.preventDefault();
        this.props.actions.deleteUserstory(this.state.userstory);
        this.redirect();
    }
    saveUserstory(event) {
        event.preventDefault();
        if (!this.userstoryFormIsValid()) {
            return;
        }
        this.setState({ saving: true });
        // if(this.state.userstory.id === '') {
        //     this.state.userstory.id = +new Date;
        //     this.state.userstory.status = 'To do';
        //     this.props.actions.createUserstory(this.state.userstory);
        // }
        // else {
        //     this.props.actions.updateUserstory(this.state.userstory);
        // }
        // this.props.actions.saveUserstory(this.state.userstory);
        // this.redirect();
        this.props.actions.saveUserstory(this.state.userstory)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }
    redirect() {
        this.setState({ saving: false });
        toastr.success('Userstory saved');
        // this.context.router.push('/userstory');
        this.context.router.push('/dashboard');
    }

    render() {
        return (
            <div>
                <UserstoryForm
                    onChange={ this.updateUserstoryState }
                    onSave={ this.saveUserstory }
                    onDelete = {this.deleteUserstory}
                    userstory={ this.state.userstory }
                    errors={ this.state.errors }
                    saving={ this.state.saving }
                    deleteMode = {this.state.deleteMode}
                    />
            </div>
        )
    }
}

UserstoryManager.propTypes = {
    // userstory: PropTypes.object.isRequired
    actions: PropTypes.object.isRequired
};
UserstoryManager.contextTypes = {
    router: PropTypes.object
};

function getUserstoryById(userstories, id) {
    const userstory = userstories.filter(userstory => userstory.id == id);
    if (userstory) return userstory[0];
    return null;
}
function mapStateToProps(state, ownProps) {
    const userstoryId = ownProps.params.id;
    let userstory = { id: '', title: '', description: '', status: '' };
    if (userstoryId && state.userstories.length > 0) {
        userstory = getUserstoryById(state.userstories, userstoryId);
    }
    return {
        userstory: userstory
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userstoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserstoryManager);
