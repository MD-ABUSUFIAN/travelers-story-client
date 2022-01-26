import React, { Children, createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
export const AuthContext=createContext(null);
const AuthProvider = ({Children}) => {
    const allContext=useFirebase();
    return (
      <AuthContext.Provider value={allContext}>
          {Children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;