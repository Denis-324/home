import { UsersActionsType } from "../actions/userRegistrationAction";

export type UserType = {
  lastName: string;
  firstName: string;
};

export type userRegistrationActionType = {
  type: UsersActionsType.userRegistration;
  payload: UserType;
};

export type userLogoutActionType = {
  type: UsersActionsType.userLogout;
};
