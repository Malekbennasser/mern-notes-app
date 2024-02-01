import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("token-userNote") || null
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(token);
    }
  }, []);

  const loginUser = async (userData) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await res.json();
    if (data.success) {
      setUser(data.token);
      // save to local storage
      localStorage.setItem("token-userNote", data.token);
      toast.success("user logged in successful");
    }

    if (!data.success) {
      toast.error(data.error);
    }
  };

  const registerUser = async (userData) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await res.json();
    if (data.success) {
      setUser(data.token);
      // save to local storage
      localStorage.setItem("token-userNote", data.token);
      toast.success("Registration successful");
    }

    if (!data.success) {
      toast.error(data.error);
    }
  };

  const logoutUser = async () => {
    setUser(null);
    localStorage.removeItem("token-userNote");
    toast.success("user logged out successfully");
  };

  const contextData = {
    user,
    loginUser,
    registerUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
