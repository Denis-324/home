/* eslint-disable import/prefer-default-export */
import { ReducerType } from "./types/types";
// @ts-ignore
export const getPostsData = (state: ReducerType) => state.postReducer.posts;

export const getUserData = (state: ReducerType) =>
  // @ts-ignore
  state.userRegistrationReducer.user;

// Если делаю таким образом в типах,  ts не видит userRegistrationReducer

// export type RedecerUserType = {
//   userRegistrationReducer: {
//     user: UserType;
//   };
// };

// или так, то тоже не выходит

// export type RedecerUser = {
//    userRegistrationReducer: RedecerUserType;
// };

// аналогичная ситуация и с постами
