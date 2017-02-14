import React from 'react';
import jQuery from 'jquery';
import jQueryui from 'jquery-ui/ui/widgets/sortable';
import Item from './item'
import TodoForm from './todoForm'
import { Modal, Button,Alert } from 'react-bootstrap';
class Home extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      showModal: false,
      editIndex: null,
      alertVisible: true,
    };
    this.getTodoItems = this.getTodoItems.bind(this)
    this.insertTodo = this.insertTodo.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.openEditModal = this.openEditModal.bind(this)
    this.editTodoItem = this.editTodoItem.bind(this)
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
  }

  deleteItem(itemIndex) {
    var splicedTodoList = this.state.todoItems.slice()
    splicedTodoList.splice(itemIndex, 1)
    this.setState({todoItems: splicedTodoList})
  }

  openEditModal(index) {
    this.setState({showModal: true, editIndex: index})
  }

  editTodoItem(todo, index) {
   if(todo.title === null && todo.description === null){
       this.setState({alertVisible: true})
       return false;
   }
    var todolist = this.state.todoItems.slice()
    todolist[index] = todo
    this.setState({todoItems: todolist, showModal: false})
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  close() {
    this.setState({ showModal: false, editIndex: null });
  }

  open() {
    this.setState({ showModal: true });
  }

  getTodoItems() {
    var self = this;
    return(
      this.state.todoItems.map(function (todoItem, index){
        return <Item key={index}
                  index={index}
                  title={todoItem.title}
                  description={todoItem.description}
                  deleteItem={self.deleteItem}
                  openEditModal = {self.openEditModal}
                />
      })
    )
  }

  insertTodo(todo) {
    if(todo.title === null && todo.description === null){
       this.setState({alertVisible: true})
       return false;
   }
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
              Add Story
            </Button>
          </div>
          <div className="vertical-gap"></div>
          <div className="col-sm-12 col-md-12">
            <div className="col-sm-6 col-md-4 thumbnail">
              <h3>Story</h3>
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
                <TodoForm 
                  addTodoItem={this.insertTodo}
                  index ={this.state.editIndex}
                  todo ={typeof(this.state.editIndex) == 'number' ? this.state.todoItems[this.state.editIndex] : null}
                  editTodoItem = {this.editTodoItem}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close} >Close</Button>
              </Modal.Footer>
            </Modal>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
};

export default Home;
