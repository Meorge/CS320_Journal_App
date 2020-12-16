import React from 'react';
import 'bootstrap';

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
          <p className="card-text">New Entries can be created under the "My Entries" Tab</p>
          <p className="card-text">The text box will initally be empty, and you can write as you see fit. There are two options for saving:</p>
          <p className="card-text">1. "Save" which will simply Save the updated Entry.</p>
          <p className="card-text">2. "Save & View" which saves, but also moves the user to the "View Entry" Page.</p>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Edit your existing entries.</h2>
          <p className="card-text">Entries can be edited under the "My Entries" Tab</p>
          <p className="card-text">The text box contents will be populated with the last save's. Saving is the same process as creating:</p>
          <p className="card-text">1. "Save" which will simply Save the updated Entry.</p>
          <p className="card-text">2. "Save & View" which saves, but also moves the user to the "View Entry" Page.</p>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Unathorized Page.</h2>
          <p className="card-text">If you've encountered this page, you've attempted to access an invalid page or unathorized Journal entry.</p>
          <p className="card-text">Please Contact us If you believe there is a mistake..</p>
        </div>
    </div>
</div>
  );
}
