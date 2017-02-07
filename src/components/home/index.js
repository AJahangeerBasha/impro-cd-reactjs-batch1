import React from 'react';
import jQuery from 'jquery';
import jQueryui from 'jquery-ui/ui/widgets/sortable';
import Item from './item'
import TodoForm from './todoForm'
import { Modal, Button } from 'react-bootstrap';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      showModal: false
    };
    this.getTodoItems = this.getTodoItems.bind(this)
    this.insertTodo = this.insertTodo.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  getTodoItems() {
    return(
      this.state.todoItems.map(function (todoItem, index){
        return <Item key={index} title={todoItem.title} description={todoItem.description} />
      })
    )
  }

  insertTodo(todo) {
    this.setState({todoItems: this.state.todoItems.concat([todo]), showModal: false})
  }
  
  render() {
    jQuery(function($) {
        var panelListTodo = $('#draggablePanelTodoList');
        var panelListInProgress = $('#draggablePanelInProgressList');
        var panelListDone = $('#draggablePanelDoneList');
    
        panelListTodo.sortable({
            // Only make the .panel-heading child elements support dragging.
            // Omit this to make then entire <li>...</li> draggable.
            handle: '.panel-heading', 
            update: function() {
                $('.panel', panelListTodo).each(function(index, elem) {
                     var $listItem = $(elem),
                         newIndex = $listItem.index();

                     // Persist the new indices.
                });
            }
        });
    panelListInProgress.sortable({
            // Only make the .panel-heading child elements support dragging.
            // Omit this to make then entire <li>...</li> draggable.
            handle: '.panel-heading', 
            update: function() {
                $('.panel', panelListInProgress).each(function(index, elem) {
                     var $listItem = $(elem),
                         newIndex = $listItem.index();

                     // Persist the new indices.
                });
            }
        });
    panelListDone.sortable({
            // Only make the .panel-heading child elements support dragging.
            // Omit this to make then entire <li>...</li> draggable.
            handle: '.panel-heading', 
            update: function() {
                $('.panel', panelListDone).each(function(index, elem) {
                     var $listItem = $(elem),
                         newIndex = $listItem.index();

                     // Persist the new indices.
                });
            }
        });
    });
    return (
      <div className="index">
        <div className="notice">
          <div className="col-sm-12 col-md-12 ">
            <h1 className="pull-left">This is the Dashboard page</h1>
          </div>
          <div className="col-sm-12 col-md-12 ">
            <Button
              bsStyle="primary"
              bsSize="small"
              className="pull-right"
              onClick={this.open}
            >
              Add Todo
            </Button>
          </div>
          <div className="vertical-gap"></div>
          <div className="col-sm-12 col-md-12">
            <div className="col-sm-6 col-md-4 thumbnail">
            <h3>Todo</h3>
            <ul className="list-unstyled" id="draggablePanelTodoList">
              {this.getTodoItems()}
            </ul>
            </div>
            <div className="col-sm-6 col-md-4 thumbnail">
            <h3>Inprogress</h3>
            <ul className="list-unstyled" id="draggablePanelInProgressList">
              <li className="panel panel-info">
                <div className="panel-heading">You can drag this panel.</div>
                <div className="panel-body">Content ...</div>
              </li>
              <li className="panel panel-info">
                <div className="panel-heading">You can drag this panel too.</div>
                <div className="panel-body">Content ...</div>
              </li>
            </ul>
            </div>
            <div className="col-sm-6 col-md-4 thumbnail">
            <h3>Done</h3>
            <ul className="list-unstyled" id="draggablePanelDoneList">
              <li className="panel panel-info">
                <div className="panel-heading">You can drag this panel.</div>
                <div className="panel-body">Content ...</div>
              </li>
              <li className="panel panel-info">
                <div className="panel-heading">You can drag this panel too.</div>
                <div className="panel-body">Content ...</div>
              </li>
            </ul>
            </div>
          </div>
           <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header>
                <Modal.Title>Add Todo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <TodoForm addTodoItem={this.insertTodo} />
              </Modal.Body>
            </Modal>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
};

export default Home;
