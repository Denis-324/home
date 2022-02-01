import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "../../components/PostsLists";
import fakeData from "../../assets/data";
import { fetchPostsDataAction } from "../../store/actions/fetchPostsDataAction";
import { getPostsData } from "../../store/selectors";
// import { useTypedSelector } from "../../store/hooks/useTypeSelector";

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);
  // const data = useTypedSelector((state) => state.postReducer);

  useEffect(() => {
    setTimeout(() => dispatch(fetchPostsDataAction(fakeData)), 2000);
  }, []);

  return <PostsList data={data} />;
};

export default PostsPage;
