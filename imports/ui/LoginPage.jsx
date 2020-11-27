import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

export class LoginPage extends Component {

    constructor(props) {
        super(props);

        // TODO: Get the contents of the entry from the ID
        // TODO: Assign the entry contents to the state

        // Login modes:
        // True for logging in, false for creating account

        this.state = { loginMode: true, error: null };

        this.toggleMode = this.toggleMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreateUserResult = this.handleCreateUserResult.bind(this);

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);

        this.getErrorMessageBox = this.getErrorMessageBox.bind(this);
    }

    toggleMode() {
        this.setState({loginMode: !this.state.loginMode, error: null});
    }

    handleSubmit() {
        console.log("submit time");
        // Try to log in!
        if (this.state.loginMode) {
            Meteor.loginWithPassword(this.state.username, this.state.password,
                (err) => {
                    if (!err) {
                        console.log("Success logging in!");
                        console.log(`User ID is ${Meteor.userId()}`);
                        this.setState({error: null});
                        FlowRouter.go('/entries');

                    } else {
                        console.log(err);
                        this.setState({error: err});
                    }
                }  
            );
        }
        
        // Try to sign up!
        else {
            let userData = {username: this.state.username, password: this.state.password };
            Meteor.call('user.register', userData,
                (err, res) => {
                    console.log(err, res);
                    if (!err) {
                        console.log("Creating account was a success I guess");
                        FlowRouter.go('/entries');
                    } else {
                        this.setState({error: err});
                    }
                }
            );
        }
    }

    handleCreateUserResult(error) {
        console.log(error);
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
        console.log(`Update username to ${event.target.value}`);
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
        console.log(`Update password to ${event.target.value}`);
    }

    getErrorIcon() {
        return (
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
        );
    }
    getErrorMessageBox() {
        if (!this.state.error) return (<div></div>);
        return (
            <div className="alert alert-danger" role="alert">
                {this.getErrorIcon()} <strong>Error</strong> - {this.state.error.reason}
            </div>
        );
    }

    render() {
        return (
            <div className="text-center form-signin">
                <h1 className="h3 mb-3 font-weight-normal">{this.state.loginMode ? "Log in to Journaler" : "Join Journaler"}</h1>
              <div>
                  {this.getErrorMessageBox()}
                  <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.updateUsername} />
                  <input type="password" id="password" className="form-control" placeholder="Password" onChange={this.updatePassword} />
                  <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-lg btn-block">{this.state.loginMode ? "Log in" : "Register"}</button>
                  <button onClick={this.toggleMode} className="btn btn-outline-secondary btn-lg btn-block">{this.state.loginMode ? "Create account" : "Use existing account"}</button>
              </div>
              
            </div>
        );
    }
}
