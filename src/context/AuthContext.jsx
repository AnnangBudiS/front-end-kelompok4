import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
// import { jwt } from "jsonwebtoken-esm";
import { jwtDecode } from "jwt-decode";

const UserAuth = createContext();

export const useAuth = () => {
  return useContext(UserAuth);
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = () => {
    return !!Cookies.get("token");
  };

  const userAuthCredentials = (token) => {
    Cookies.set("token", token);
    // setUser(token, userData);
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
  };

   const logout = () => {
    console.log("hello");
    Cookies.remove("token");
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
    console.log(token);
  }, []);

  return (
    <UserAuth.Provider
      value={{
        user,
        isAuthenticated,
        userAuthCredentials,
        logout,
      }}
    >
      {children}
    </UserAuth.Provider>
  );
}
