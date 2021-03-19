import { useReducer, useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  // Store user state in localStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user, null, 2));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
