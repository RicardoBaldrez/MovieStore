import React, { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = 'UserContext';

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');

  return(
    <UserContext.Provider value={{ name, setName, lastName, setlastName, email, setEmail }}>
      { children }
    </UserContext.Provider>
  );
} 