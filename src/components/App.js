import React from 'react';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <div className="notice">
          <h1>Hello Impro, </h1>
          <h3>Welcome to React Competency Development Program !!!</h3>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
