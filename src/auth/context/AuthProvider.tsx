import { ReactNode, useReducer } from "react";
import { AuthContext } from "./AuthContex";
import {
  authIntialState,
  authReducer,
  createLogin,
  createLogout,
} from "../store";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initializer = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    let name = user?.name ? user.name : null;
    return { logged: !!user, name };
  };

  const [authState, dispatch] = useReducer(authReducer, {}, initializer);

  const login = (name: string) => {
    dispatch(createLogin(name));
    localStorage.setItem("user", JSON.stringify({ name }));
  };

  const logout = () => {
    dispatch(createLogout());
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ authState, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
