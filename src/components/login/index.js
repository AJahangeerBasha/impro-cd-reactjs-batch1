import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class Login extends React.Component {
	handleSubmit (values) {debugger 
		browserHistory.push('/home');
	}
  render() {
    return (
      <div className="container">
        <div className="row" >		
		<div className="col-sm-6 col-md-4 col-md-offset-4">
          <h1 className="text-center login-title">Sign in to Kanban</h1>
		  <div className="account-wall">
           
		  <form className="form-signin" action="#" onSubmit={(e) => this.handleSubmit(e)}>
               <input type="text" className ="form-control" placeholder="Email" required  ref={node => { this.username = node }} /><br/>
               <input type="password" className ="form-control" placeholder="Password" required  ref={node => { this.password = node }} /><br/>
               <input type="submit" className="btn btn-lg btn-primary btn-block" value="Login" />
          </form>
        </div>
		</div>
		</div>
      </div>
    );
  }
}

Login.defaultProps = {
};

export default Login;
