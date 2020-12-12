import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import { App } from '/imports/ui/App';
import { NotFound } from '/imports/ui/Info';

import ListPageContainer_Malcolm from '/imports/ui/ListPage_Malcolm';
import { EditPage } from '/imports/ui/EditPage';

import { LoginPage } from '/imports/ui/LoginPage';

import { Container } from '/imports/ui/Container';
import { ViewPage_Malcolm } from '/imports/ui/ViewPage_Malcolm';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


FlowRouter.route('/', {
  name: 'index',
  action() {
    mount(Container, { main: <App />});
    // renderPage(<App />);
  }
});

// TODO: Make this show the entry list page
FlowRouter.route('/entries', {
  name: 'index',
  // waitOn: () => Meteor.subscribe('entries.getAllForUser'),
  action() {
    if (Meteor.user()) {
      mount(Container, { main: <ListPageContainer_Malcolm />});
      // renderPage(<ListPageContainer_Malcolm/>);
    }
    else
      FlowRouter.go('login');
  }
});

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

FlowRouter.route('/view/:_id', {
  name: 'view',
  action(params) {
    console.log(`Trying to go to view page, user ID is ${Meteor.userId()}`);
    Meteor.call('entries.isOwner', params._id, (err, res) => {
      console.log(err, res);
      if (err || res == false) {
        FlowRouter.go('error');
      } else {
        // renderPage(<EditPage id={params._id} />);
        mount(Container, { main: <ViewPage_Malcolm id={params._id} />});
      }
    }); 
  }
});

FlowRouter.route('/edit/:_id', {
  name: 'edit',
  action(params) {
    console.log(`Trying to go to edit page, user ID is ${Meteor.userId()}`);
    Meteor.call('entries.isOwner', params._id, (err, res) => {
      console.log(err, res);
      if (err || res == false) {
        FlowRouter.go('error');
      } else {
        // renderPage(<EditPage id={params._id} />);
        mount(Container, { main: <EditPage id={params._id} />});
      }
    }); 
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    // renderPage(<LoginPage />);
    mount(Container, { main: <LoginPage />});
  }
});

FlowRouter.route('*', {
  action() {
    FlowRouter.go('error');
  }
});

FlowRouter.route('/error', {
  name: 'error',
  action() {
    console.log("not found 404 lol");
    // renderPage(<NotFound/>);
    mount(Container, { main: <NotFound />});
  }
});