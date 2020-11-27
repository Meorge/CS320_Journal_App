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

        this.state = { loginMode: true };

        this.toggleMode = this.toggleMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreateUserResult = this.handleCreateUserResult.bind(this);

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    toggleMode() {
        this.setState({loginMode: !this.state.loginMode});
    }

    handleSubmit() {
        console.log("submit time");
        // Try to log in!
        if (this.state.loginMode) {
            Meteor.loginWithPassword(this.state.username, this.state.password,
                function (err) {
                    if (!err) {
                        console.log("Success logging in!");
                        console.log(`User ID is ${Meteor.userId()}`);
                        FlowRouter.go('/entries');
                    } else {
                        console.log(err);
                    }
                }  
            );
        }
        
        // Try to sign up!
        else {
            let userData = {username: this.state.username, password: this.state.password };
            Meteor.call('user.register', userData,
                function (err, res) {
                    console.log(err, res);
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

    render() {
        return (
            <div className="text-center form-signin">
                <h1 className="h3 mb-3 font-weight-normal">{this.state.loginMode ? "Log in to Journaler" : "Join Journaler"}</h1>
              <div>
                  <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.updateUsername} />
                  <input type="password" id="password" className="form-control" placeholder="Password" onChange={this.updatePassword} />
                  <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-lg btn-block">{this.state.loginMode ? "Log in" : "Register"}</button>
                  <button onClick={this.toggleMode} className="btn btn-outline-secondary btn-lg btn-block">{this.state.loginMode ? "Create account" : "Use existing account"}</button>
              </div>
              
            </div>
        );
    }
}
