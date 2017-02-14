import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps (nextProps) {
  //   this.setState({title: nextProps.title, description:nextProps.description})
  // }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    if (typeof(this.props.index) == 'number') {
      this.props.editTodoItem({title: this.state.title || this.props.todo.title, description: this.state.description || this.props.todo.description}, this.props.index)
    }
    else {
      this.props.addTodoItem(this.state)
    }
    event.preventDefault();
    this.setState({title: '', description:''})
  }
  render() {
    var titleValue = this.state.title !== null ? this.state.title : (typeof(this.props.index) == 'number' ? this.props.todo.title : '')
    var descriptionavalue = this.state.description !== null ? this.state.description : (typeof(this.props.index) == 'number' ? this.props.todo.description : '')
    return(
      <form onSubmit={this.handleSubmit}  >
       <div className="form-group">
        <label>
          Title: 
        </label>
          <input type="text" name="title" className ="form-control"  value={titleValue} onChange={this.handleTitleChange} />
        </div>
        <div className="form-group">
        <label>
          Description:
        </label>
          <textarea 
           type="text" 
           name="description"
           value={descriptionavalue} 
           onChange={this.handleDescriptionChange}
           className ="form-control" >
          </textarea>
        </div>
        <input type="submit" className="btn btn-primary"  value="Submit" />
      </form>
    )
  }
}

TodoForm.defaultProps = {
};

export default TodoForm;
