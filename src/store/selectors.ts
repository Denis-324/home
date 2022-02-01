/* eslint-disable import/prefer-default-export */
import { ReducerType } from "./types/types";
// @ts-ignore
export const getPostsData = (state: ReducerType) => state.postReducer.posts;

export const getUserData = (state: ReducerType) =>
  state.userRegistrationReducer.user;
