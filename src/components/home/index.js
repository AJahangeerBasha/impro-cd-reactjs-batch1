import React from 'react';
import jQuery from 'jquery';
import jQueryui from 'jquery-ui/ui/widgets/sortable';
class Home extends React.Component {
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
          <h1>this is the Dashboard page</h1>
			
			<div className="row">
			  <div className="col-sm-6 col-md-4 thumbnail">
				<h3>Todo</h3>
				<ul className="list-unstyled" id="draggablePanelTodoList">
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
			
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
};

export default Home;
