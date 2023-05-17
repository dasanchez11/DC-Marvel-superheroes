import { AuthActionTypes } from "./action-types";
import { Action, ActionWithPayload, createAction } from "./auth-utils";

export type LoginAction = ActionWithPayload<AuthActionTypes.LOGIN, string>;
export type LogoutAction = Action<AuthActionTypes.LOGOUT>;

export type AuthActions = LoginAction | LogoutAction;

export const createLogin = (name: string) => {
  return createAction(AuthActionTypes.LOGIN, name);
};

export const createLogout = () => {
  return createAction(AuthActionTypes.LOGOUT);
};
