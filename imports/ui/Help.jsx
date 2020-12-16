import React from 'react';
import 'bootstrap';
import { ListGroup } from 'react-bootstrap';

export const Help = () => {
  return (
    <div>

    <div className="jumbotron text-center">
      <h1>Help Documentation</h1>
      <p className="lead">This page documents how you can manage your account and it's entries.</p>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Create an Account.</h2>
          <p className="card-text">Follow the Steps below to create an account:</p>
          <p className="card-text">1. Navigate and click on "Home" on the Navbar. </p>
          <p className="card-text">2. Center of page, click the Blue "Log in or sign up" button</p>
          <p className="card-text">3. Create an account with a Username and Password, then click Register</p>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Create New Entries.</h2>
          <p className="card-text">Documentation Pending</p>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Edit your existing entries.</h2>
          <p className="card-text">Documentation Pending</p>
        </div>
    </div>

</div>
  );
}
