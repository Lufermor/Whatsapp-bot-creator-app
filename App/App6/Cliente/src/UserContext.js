import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');

  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  const updateUserId = (id) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userEmail, updateUserEmail, userId, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};
