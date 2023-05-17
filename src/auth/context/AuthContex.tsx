import { createContext } from "react";
import { AuthState, authIntialState } from "../store";

export const AuthContextInitialState = {
  authState: authIntialState,
  dispatch: () => {},
  login: () => {},
  logout: () => {},
};

export interface AuthContext {
  authState: AuthState;
  dispatch: Function;
  login: Function;
  logout: Function;
}

export const AuthContext = createContext<AuthContext>(AuthContextInitialState);
