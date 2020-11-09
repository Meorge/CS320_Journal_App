import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { Info } from '/imports/ui/Info';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function renderPage(page) {
  render(page, document.getElementById('react-target'));
}

FlowRouter.route('/', {
  name: 'index',
  action() {
    renderPage(<App/>);
  }
});

FlowRouter.route('*', {
  action() {
    console.log("not found 404 lol");
    renderPage(<Info/>);
  }
});