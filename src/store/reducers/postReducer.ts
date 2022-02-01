import { PostsActionsType } from "../actions/fetchPostsDataAction";
import { ActionsType, RedecerPostType } from "../types/types";

const initialState: RedecerPostType = {
  posts: [],
};

const postReducer = (
  state = initialState,
  action: ActionsType
): RedecerPostType => {
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
