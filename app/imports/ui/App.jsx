import React from 'react';

import 'bootstrap';

// This is the homepage/landing page
export const App = () => (
  <div>
    <div className="jumbotron text-center">
      <h1>Journaler</h1>
      <p className="lead">Easily keep track of your most important memories for free.</p>
      <a href="/login" className="btn btn-primary">Log in or sign up</a>
    </div>

    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">View your entries.</h2>
          <p className="card-text">Your journal entries are organized by creation date, so you can read through them easily.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Edit your entries.</h2>
          <p className="card-text">While your journal entries always remember when they were created, you're free to update them with fresh thoughts whenever you'd like.</p>
        </div>
      </div>
    </div>


    <hr />


  </div>
);
