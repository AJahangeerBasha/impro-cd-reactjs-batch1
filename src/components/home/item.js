import React from 'react';
import { Button } from 'react-bootstrap';

class Item extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    };

	    this.handleDelete = this.handleDelete.bind(this)
	  }

  handleDelete(itemIndex) {
    this.props.deleteItem(itemIndex)
  }

  openEditModal(itemIndex) {
    this.props.openEditModal(itemIndex)
  }

  render() {
  	return(
	  <li className="panel panel-info">
        <div className="panel-heading">{ this.props.title }</div>
        <div className="panel-body">{ this.props.description }</div>
        <Button bsStyle="danger" bsSize="small" className="glyphicon glyphicon-trash" onClick={function () {this.handleDelete(this.props.index)}.bind(this)}></Button>
        <Button bsStyle="primary" bsSize="small"className="glyphicon glyphicon-pencil btn btn-primary" onClick={function () {this.openEditModal(this.props.index)}.bind(this)}></Button>
      </li>
  	)
  }
}

Item.defaultProps = {
};

export default Item;
