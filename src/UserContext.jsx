import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(); // Default user for demonstration
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => setUser(null);

  useEffect(() => {
    if (user) {
      console.log("User state changed:", user);
      navigate("/");
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
