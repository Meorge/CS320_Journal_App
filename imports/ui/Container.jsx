import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = (props) => (
  <div className="">
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
      </header>
    <main role="main" className="inner cover">{props.content}</main>
  </div>
);