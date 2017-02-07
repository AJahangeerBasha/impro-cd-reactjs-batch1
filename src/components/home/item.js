import React from 'react';

class Item extends React.Component {
  render() {
  	return(
		<li className="panel panel-info">
			<div className="panel-heading">{ this.props.title }</div>
			<div className="panel-body">{ this.props.description }</div>
		</li>
  	)
  }
}

Item.defaultProps = {
};

export default Item;
