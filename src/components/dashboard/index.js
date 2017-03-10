"use strict";

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Dragula from 'dragula';
import 'dragula/dist/dragula.css';

import * as userstoryActions from '../../actions/userstoryAction';

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToUserstoryManager = this.redirectToUserstoryManager.bind(this);
    this.updateUserstoryStatus = this.updateUserstoryStatus.bind(this);
  }
  redirectToUserstoryManager() {
    this.props.router.push('/userstory/create');
  }
  updateUserstoryStatus(userstoryId, status) {
    let userstory = this.props.userstories.filter(userstory => userstory.id === userstoryId)[0];
    userstory.status = status;
    console.log("inside updateUserstoryStatus : ", userstory, userstoryId, status);
    this.props.actions.updateUserstoryStatus(userstory);
  }
  render() {
    const {userstories} = this.props;
    let todoList = userstories.filter(userstory => userstory.status === 'ToDo');
    let progressList = userstories.filter(userstory => userstory.status === 'Progress');
    let doneList = userstories.filter(userstory => userstory.status === 'Done');

    return (
      <div> 
      <div className="addUser">
        <input type="submit"
          value="Add Userstory"
          className="btn btn-primary"
          onClick={ this.redirectToUserstoryManager } />
          <div className="fa fa-plus" aria-hidden="true"></div>
          </div>
        <div className="row">
          <div id="ToDo" className="carton col-md-4" ref={ this.dragulaDecorator }>
            <h1>To do</h1>
            { todoList.map(userstory =>
              <div className="elem" key={ userstory.id } id={ userstory.id } className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">{ userstory.title }</h3>
                </div>
                <div className="panel-body">
                  { userstory.description }
                 <div className="editBtnGroup">
                  <Link className="btn btn-success" to={'/userstory/edit/' + userstory.id}>Edit</Link>
                  <Link className="btn btn-danger" to={'/userstory/delete/' + userstory.id}>Delete</Link>
                 </div>
                </div>
              </div>
            ) }
          </div>
          <div id="Progress" className="carton col-md-4" ref={ this.dragulaDecorator }>
            <h1>Progress</h1>
            { progressList.map(userstory =>
              <div className="elem" key={ userstory.id } id={ userstory.id } className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">{ userstory.title }</h3>
                </div>
                <div className="panel-body">
                  { userstory.description }
                  <div className="editBtnGroup">
                  <Link className="btn btn-success" to={'/userstory/edit/' + userstory.id}>Edit</Link>
                  <Link className="btn btn-danger" to={'/userstory/delete/' + userstory.id}>Delete</Link>
                  </div>
                </div>
              </div>
            ) }
          </div>
          <div id="Done" className="carton col-md-4" ref={ this.dragulaDecorator }>
            <h1>Done</h1>
            { doneList.map(userstory =>
              <div className="elem" key={ userstory.id } id={ userstory.id } className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">{ userstory.title }</h3>
                </div>
                <div className="panel-body">
                  { userstory.description }
                  <div className="editBtnGroup">
                  <Link className="btn btn-success" to={'/userstory/edit/' + userstory.id}>Edit</Link>
                  <Link className="btn btn-danger" to={'/userstory/delete/' + userstory.id}>Delete</Link>
                  </div>  
                </div>
              </div>
            ) }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let that = this;
    Dragula([].slice.call(document.querySelectorAll('.carton')), {
      copy: function (el, source) {
        // return source === document.getElementById('todo')
        return false;
      },
      accepts: function (el, target) {
        // return target !== document.getElementById('todo')
        return true;
      },
      removeOnSpill: true
    }).on('dragend', function (el) {
      console.log("inside dragend : ", el.id, el.parentNode.id);
      this._shadow.remove();
      this._shadow = null;
      that.updateUserstoryStatus(el.id, el.parentNode.id);
    }).on('drop', function (el) {
      console.log("inside drop");
      // el.parentNode.replaceChild(makeElement(el), el);
      el.parentNode.appendChild(el);
    }).on('shadow', function (el, target) {
      console.log("inside shadow");
      if (!this._shadow) {
        this._shadow = makeElement(el);
        this._shadow.classList.add("gu-transit");
      }
      // el.style.display = 'none';
      el.parentNode.insertBefore(this._shadow, el);
    });

    function makeElement(el) {
      var newNode = document.createElement("div");
      newNode.textContent = "Hurray!";
      newNode.classList.add("elem");
      return newNode;
      // return el;
    }
  }

}

Dashboard.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);