import React from 'react';

import { Meteor } from 'meteor/meteor';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = (props) => (
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
            <li className="nav-item">
                <a className="nav-link" href="/login">{Meteor.user() ? Meteor.user().username : "Log in"}</a>
            </li>
        </ul>
    </nav>
    <main role="main" className="container p-3">{props.content}</main>
  </div>
);