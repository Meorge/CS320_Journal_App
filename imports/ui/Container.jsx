import React from 'react';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = (props) => (
  <div className="">
    <nav className="navbar navbar-dark bg-dark navbar-expand">
        <a className="navbar-brand">Journaler</a>
        <ul className="navbar-nav">
            <li className="nav-item mr-auto" href="#">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item mr-auto" href="#">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item" href="#">
                <a className="nav-link" href="#">Help</a>
            </li>
        </ul>
    </nav>
    <main role="main" className="container p-3">{props.content}</main>
  </div>
);