import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
// import { jwt } from "jsonwebtoken-esm";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

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

  console.log(user);
  const updateUserProfile = async (userData) => {
    try {
      const token = Cookies.get("token");
      console.log(userData);
      const ress = await axios.put(
        `http://localhost:5000/profilPekerja/${user.id_pekerja}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const updatedUser = ress.data;
      setUser(updatedUser);
    } catch (error) {
      if (error.ress && error.ress.status === 404) {
        alert("Data tidak ditemukan");
      } else {
        alert("error update data", error.message);
      }
    }
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
        updateUserProfile,
        userAuthCredentials,
        logout,
      }}
    >
      {children}
    </UserAuth.Provider>
  );
}
