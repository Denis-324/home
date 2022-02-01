import { PostsActionsType } from "../actions/fetchPostsDataAction";
import { ActionsType, ReducerType } from "../types/types";

const initialState: ReducerType = {
  posts: [],
};

const postReducer = (
  state = initialState,
  action: ActionsType
): ReducerType => {
  switch (action.type) {
    case PostsActionsType.fetchPostsData:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
