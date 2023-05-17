import { AuthActionTypes } from "./action-types";
import { AuthActions } from "./auth-actions";

export const authIntialState = {
  logged: false,
  name: null,
};

export interface AuthState {
  logged: boolean;
  name: string | null;
}

export const authReducer = (
  state: AuthState = authIntialState,
  action: AuthActions
) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, logged: true, name: action.payload };
    case AuthActionTypes.LOGOUT:
      return { ...state, logged: false, name: null };
    default:
      return state;
  }
};
