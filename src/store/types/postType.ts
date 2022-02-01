import { PostsDataType } from "../../assets/data";
import { PostsActionsType } from "../actions/fetchPostsDataAction";

export type FetchPostsDataActionType = {
  type: PostsActionsType.fetchPostsData;
  payload: PostsDataType;
};
