import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { App } from '/imports/ui/App';
import { NotFound } from '/imports/ui/Info';
import { EditPage } from '/imports/ui/EditPage';
import { ReadEntries } from '/imports/ui/ReadEntries';

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
    renderPage(<App/>);
  }
});

// TODO: Make this show the entry list page
// 11/30/2020: Just need to get the functionality of read entries then un comment if and else satements
FlowRouter.route('/entries', {
  name: 'entries',
  action() {
    renderPage(<ReadEntries/>);
    /*if (Meteor.user())
      renderPage(<App/>);
    else
      renderPage(<readEntry/>);
      //renderPage(<readEntry/>);
      //FlowRouter.go('login'); */
  }
});

FlowRouter.route('/edit/:_id', {
  name: 'edit',
  action(params) {
    console.log(`Trying to go to edit page, user ID is ${Meteor.userId()}`);
    if (Meteor.userId())
      renderPage(<EditPage id={params._id} />);
    else
      FlowRouter.go('/login');
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
    console.log("not found 404 lol");
    renderPage(<NotFound/>);
  }
});