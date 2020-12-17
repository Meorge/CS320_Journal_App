import React from 'react';

// This is the page that appears when the user attempts to access an invalid or unauthorized page
export const NotFound = () => {
  return (
    <div>
      <h1 className="text-center">Oops! This page couldn't be found.</h1>
      <p className="text-center">You may have typed an invalid URL, or you might not have permission to view this page.</p>
    </div>
  );
};
