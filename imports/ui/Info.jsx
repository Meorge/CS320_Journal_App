import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const NotFound = () => {
  return (
    <div>
      <h1 className="text-center">Oops! This page couldn't be found.</h1>
      <p className="text-center">You may have typed an invalid URL.</p>
    </div>
  );
};
