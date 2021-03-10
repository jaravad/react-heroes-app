import React, { useEffect } from 'react';

/* React Router passes some props to the components being routed,
  that's why 'history' prop is available here */
export const LoginScreen = ({ history }) => {
  useEffect(() => {
    document.title = 'Heroes App - Login';
  }, []);

  return (
    <div className="container py-4">
      <h1 className="pb-2 border-bottom mb-3">LoginScreen</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          // * Add a history entry
          // history.push('/');
          // Replace current history entry
          history.replace('/');
          /* When replace is used browser's back button won't redirect 
          to the previous history entry as this one was replaced*/
        }}
      >
        Login
      </button>
    </div>
  );
};
