import { UsersActionsType } from "../actions/userRegistrationAction";
import { ActionsType, RedecerUserType } from "../types/types";

const initialState: RedecerUserType = {
  user: { lastName: "", firstName: "" },
};

const userRegistrationReducer = (
  state = initialState,
  action: ActionsType
): RedecerUserType => {
  switch (action.type) {
    case UsersActionsType.userRegistration:
      return {
        ...state,
        user: action.payload,
      };
    case UsersActionsType.userLogout:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};

export default userRegistrationReducer;
