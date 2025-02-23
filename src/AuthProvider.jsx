import React, { createContext, useEffect } from 'react';
import auth from './firebase.config.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
// import { toast } from 'react-toastify';
export const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(undefined);
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .then(() => {
        toast.success('Login successful');
      })
      .catch(() => {
        toast.error('Login failed');
      });
  }

  useEffect(() => {
    const Unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        if (user) {
          axios.put('https://backend14.vercel.app/users', user);
        } else {
          setUser(null);
        }
      },
      [user]
    );
    return () => Unsubscribe();
  });
  const logout = () => auth.signOut();
  const value = {
    loginWithGoogle,
    logout,
    user,
  };
  return (
    <>
      <authContext.Provider value={value}>{children}</authContext.Provider>
    </>
  );
}

export default AuthProvider;
