import React from 'react';
import 'bootstrap';

// This is the help page accessible from the navbar
export const Help = () => {
  return (
    <div>

    <div className="jumbotron text-center">
      <h1>Help Documentation</h1>
      <p className="lead">This page documents how you can manage your account and its entries.</p>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Create an account</h2>
          <p className="card-text">
            Follow the steps below to create an account:
            <ol>
              <li>On the top right corner of the page, click "Log in".</li>
              <li>Create an account with a username and password, then click "Register".</li>
            </ol>
          </p>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Create a new entry</h2>
          <p className="card-text">
            New entries can be created on the "My Entries" page by clicking the "Create New Entry" button.<br/>
            The text box will initally be empty, and you can write as you see fit. There are two options for saving:
            <ul>
              <li>"Save" will simply save the updated entry.</li>
              <li>"Save &amp; View" will save and redirect the user to the "View Entry" page.</li>
            </ul>
          </p>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">Edit your existing entries</h2>
          <p className="card-text">
            To edit an entry, first view it by clicking "View" on an entry from the "My Entries" page. Then, click "Edit".<br/>
            Modify the entry's contents in the provided text field. There are two options for saving:
            <ul>
              <li>"Save" will simply save the updated entry.</li>
              <li>"Save &amp; View" will save and redirect the user to the "View Entry" page.</li>
            </ul>
          </p>
        </div>
    </div>

    <div className="card">
        <div className="card-body">
          <h2 className="card-title">"Oops! This page couldn't be found."</h2>
          <p className="card-text">
            If you've encountered this page, you've either attempted to access an invalid page, or you don't have permission to interact with a journal entry.<br/>
            Please <a href="mailto:support@journaler.com">contact us</a> if you believe there is a mistake.
          </p>
        </div>
    </div>
</div>
  );
}
