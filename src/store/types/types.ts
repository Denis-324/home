import { PostsDataType } from "../../assets/data";
import { FetchPostsDataActionType } from "./postType";
import {
  userLogoutActionType,
  userRegistrationActionType,
  UserType,
} from "./userType";

export type RedecerUserType = {
  user: UserType;
};
export type RedecerPostType = {
  posts: PostsDataType;
};

export type ReducerType = {
  userRegistrationReducer: RedecerUserType;
  postReducer: RedecerPostType;
};

export type ActionsType =
  | FetchPostsDataActionType
  | userRegistrationActionType
  | userLogoutActionType;
