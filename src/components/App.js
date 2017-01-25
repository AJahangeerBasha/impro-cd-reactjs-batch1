import React from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
