import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

/* React Router passes some props to the components being routed,
  that's why 'history' prop is available here */
export const LoginScreen = ({ history }) => {
  useEffect(() => {
    document.title = 'Heroes App - Login';
  }, []);

  const { dispatch } = useContext(AuthContext);

  const action = {
    type: types.login,
    payload: { username: 'John Doe' },
  };

  const handleLogin = () => {
    dispatch(action);
    // * Add a history entry
    // history.push('/');
    // * Replace current history entry:
    history.replace('/');
    /* When replace is used browser's back button won't redirect 
    to the previous history entry as this one was replaced*/
  };

  return (
    <div className="container py-4">
      <h1 className="pb-2 border-bottom mb-3">LoginScreen</h1>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
