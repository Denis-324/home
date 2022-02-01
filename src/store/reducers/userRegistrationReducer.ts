import { UsersActionsType } from "../actions/userRegistrationAction";
import { ActionsType, ReducerType } from "../types/types";

const initialState: ReducerType = {
  user: { lastName: "", firstName: "" },
};

const userRegistrationReducer = (
  state = initialState,
  action: ActionsType
): ReducerType => {
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
