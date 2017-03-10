import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import './app.css';
import Header from './common/header';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

// export default AppComponent;
export default DragDropContext(HTML5Backend)(AppComponent);