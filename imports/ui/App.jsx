import React from 'react';

import 'bootstrap';

export const App = () => (
  <div>
    <div className="jumbotron text-center">
      <h1>Journaler</h1>
      <p className="lead">Easily keep track of your most important memories for free.</p>
      <a href="/login" className="btn btn-primary">Log in or sign up</a>
    </div>

    <div className="container text-left">
      <div className="container">
        <h2 className="card-title">View your entries.</h2>
        <p className="card-text">Your journal entries are organized by creation date, so you can read through them easily.</p>
      </div>
    </div>

    <div className="container text-right">
      <div className="container">
        <h2 className="card-title">Edit your entries.</h2>
        <p className="card-text">Write some more text here.</p>
      </div>
    </div>

    <div className="container text-left">
      <div className="container">
        <h2 className="card-title">Share your entries.</h2>
        <p className="card-text">Write some more text here.</p>
      </div>
    </div>

  </div>
);
