import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { App } from '/imports/ui/App';
import { NotFound } from '/imports/ui/Info';
import { EditPage } from '/imports/ui/EditPage';

import { Container } from '/imports/ui/Container';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function renderPage(page) {
  render(<Container content={page}/>, document.getElementById('react-target'));
}

FlowRouter.route('/', {
  name: 'index',
  action() {
    renderPage(<App/>);
  }
});

FlowRouter.route('/edit/:_id', {
  name: 'edit',
  action(params) {
    renderPage(<EditPage id={params._id} />);
  }
});

FlowRouter.route('*', {
  action() {
    console.log("not found 404 lol");
    renderPage(<NotFound/>);
  }
});