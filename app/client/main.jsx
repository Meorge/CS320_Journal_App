import React from 'react';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

import { App } from '/imports/ui/App';
import { NotFound } from '/imports/ui/Info';
import { Help } from '/imports/ui/Help';

import ListPageContainer_Malcolm from '/imports/ui/ListPage_Malcolm';
import { EditPage } from '/imports/ui/EditPage';

import { LoginPage } from '/imports/ui/LoginPage';

import { Container } from '/imports/ui/Container';
import { ViewPage_Malcolm } from '/imports/ui/ViewPage_Malcolm';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// This file handles URL routing for Journaler.
// In practice, the URL will begin with localhost:3000/...
// But for the purposes of explaining the routes, we'll act
// as if the app is hosted on https://journaler.com


// https://journaler.com/ goes to the landing page.
FlowRouter.route('/', {
  name: 'index',
  action() {
    mount(Container, { main: <App />});
  }
});

// https://journaler.com/entries goes to the List Entries page
// if a user is logged in; otherwise, it redirects to the Login page.
FlowRouter.route('/entries', {
  name: 'index',
  action() {
    if (Meteor.user()) {
      mount(Container, { main: <ListPageContainer_Malcolm />});
    }
    else
      FlowRouter.go('login');
  }
});

// https://journaler.com/new creates a new entry, then redirects the
// user to the entry's edit page.
FlowRouter.route('/new', {
  name: 'createNew',
  action() {
    if (Meteor.userId()) {
      console.log("Attempt to create a new entry");
      Meteor.call('entries.createNew', (err, res) => {
        console.log("something happened");
        console.log(err, res);
        if (res) {
          FlowRouter.go('edit', {_id: res});
        }
      });
    }
  }
});

// https://journaler.com/view/[ID] displays the contents of entry [ID] to
// the user if they are logged in and authorized to view the entry; otherwise,
// it displays the error page.
FlowRouter.route('/view/:_id', {
  name: 'view',
  action(params) {
    console.log(`Trying to go to view page, user ID is ${Meteor.userId()}`);
    Meteor.call('entries.isOwner', params._id, (err, res) => {
      console.log(err, res);
      if (err || res == false) {
        FlowRouter.go('error');
      } else {
        mount(Container, { main: <ViewPage_Malcolm id={params._id} />});
      }
    }); 
  }
});

// https://journaler.com/edit/[ID] allows the user to edit the contents of
// entry [ID] if they are logged in and authorized to edit the 
// entry; otherwise, it displays the error page.
FlowRouter.route('/edit/:_id', {
  name: 'edit',
  action(params) {
    console.log(`Trying to go to edit page, user ID is ${Meteor.userId()}`);
    Meteor.call('entries.isOwner', params._id, (err, res) => {
      console.log(err, res);
      if (err || res == false) {
        FlowRouter.go('error');
      } else {
        mount(Container, { main: <EditPage id={params._id} />});
      }
    }); 
  }
});

// https://journaler.com/login displays the login/signup page.
FlowRouter.route('/login', {
  name: 'login',
  action() {
    mount(Container, { main: <LoginPage />});
  }
});

// https://journaler.com/help displays a page with steps on how
// to use the software.
FlowRouter.route('/help', {
  name: 'help',
  action() {
    console.log("help page");
    mount(Container, { main: <Help />});
  }
});

// Any URL that we haven't defined a route for will redirect to
// the error page.
FlowRouter.route('*', {
  action() {
    FlowRouter.go('error');
  }
});

// https://journaler.com/error displays a generic error message.
FlowRouter.route('/error', {
  name: 'error',
  action() {
    console.log("not found 404 lol");
    mount(Container, { main: <NotFound />});
  }
});
