import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    this.props.addTodoItem(this.state)
    event.preventDefault();
    this.setState({title: '', description:''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}  >
       <div className="form-group">
        <label>
          Title: 
        </label>
          <input type="text" name="title" className ="form-control" value={this.state.title} onChange={this.handleTitleChange} />
        </div>
        <div className="form-group">
        <label>
          Description:
        </label>
          <textarea type="text" name="description" className ="form-control" value={this.state.description} onChange={this.handleDescriptionChange}>
          ></textarea>
       
        </div>
        <input type="submit" className="btn btn-primary"  value="Submit" />
      </form>
    )
  }
}

TodoForm.defaultProps = {
};

export default TodoForm;
