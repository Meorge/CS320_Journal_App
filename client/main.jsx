import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { App } from '/imports/ui/App';
import { NotFound } from '/imports/ui/Info';
import { EditPage } from '/imports/ui/EditPage';

import { LoginPage } from '/imports/ui/LoginPage';

import { Container } from '/imports/ui/Container';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function renderPage(page) {
  render(<Container content={page} userId={Meteor.userId()} />, document.getElementById('react-target'));
}

FlowRouter.route('/', {
  name: 'index',
  action() {
    renderPage(<App />);
  }
});

// TODO: Make this show the entry list page
FlowRouter.route('/entries', {
  name: 'index',
  action() {
    if (Meteor.user())
      renderPage(<App/>);
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

FlowRouter.route('/edit/:_id', {
  name: 'edit',
  action(params) {
    console.log(`Trying to go to edit page, user ID is ${Meteor.userId()}`);
    Meteor.call('entries.isOwner', params._id, (err, res) => {
      console.log(err, res);
      if (err || res == false) {
        FlowRouter.go('error');
      } else {
        renderPage(<EditPage id={params._id} />);
      }
    }); 
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    renderPage(<LoginPage />);
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
    renderPage(<NotFound/>);
  }
});