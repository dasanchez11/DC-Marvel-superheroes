import { ReactNode, useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  const { authState } = useContext(AuthContext);
  return <>{authState.logged ? children : <Navigate to="/login" />}</>;
};
