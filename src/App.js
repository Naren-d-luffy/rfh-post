import React from "react";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";

const App = () => {
  return (
    <div>
      <CreatePost />
      <PostList />
    </div>
  );
};

export default App;
