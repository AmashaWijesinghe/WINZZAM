// context/UserContext.js
import { createContext, useState } from 'react';

// Create a UserContext
const UserContext = createContext();

// Create a UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // You can add functions to update the user state here if needed

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
