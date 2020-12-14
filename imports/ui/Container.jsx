import React, { Component } from 'react';

import { Meteor } from 'meteor/meteor';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


export class Container extends Component {
    constructor(props) {
        super(props);

        this.goToLoginScreen = this.goToLoginScreen.bind(this);
    }

    goToLoginScreen() {
        if (Meteor.userId()) {
            // log out
            Meteor.logout((err) => {
                this.setState({userId: Meteor.userId()});
                if (!err) {
                    console.log("Successfully logged out");
                }
                FlowRouter.go('login');
            });
        } else {
            // log in
            FlowRouter.go('login');
        }
    }

    componentDidUpdate() {
        console.log("container will update, current user is", Meteor.userId());
    }

    render() {
        console.log(`Currently logged in: ${Meteor.userId()}`);
        return (
            <div className="">
              <nav className="navbar navbar-dark bg-dark navbar-expand">
                  <a className="navbar-brand">Journaler</a>
                  <ul className="navbar-nav">
                      <li className="nav-item mr-auto" href="#">
                          <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item mr-auto" href="#">
                          <a className="nav-link" href="/entries">My Entries</a>
                      </li>
                      <li className="nav-item" href="#">
                          <a className="nav-link" href="#">Help</a>
                      </li>
                  </ul>
          
                  {/* right-aligned item from https://stackoverflow.com/questions/19733447/bootstrap-navbar-with-left-center-or-right-aligned-items */}
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item mr-auto">
                          <div className="nav-link active">{Meteor.userId() ? (Meteor.user() ? Meteor.user().username : Meteor.userId()) : 'Not logged in'}</div>
                      </li>
                      <li className="nav-item">
                          <a className="btn btn-outline-light" onClick={this.goToLoginScreen}>{Meteor.userId() ? "Log out" : "Log in"}</a>
                      </li>
                  </ul>
              </nav>
              <main role="main" className="container p-3">{this.props.main}</main>
            </div>
          );
    }
}