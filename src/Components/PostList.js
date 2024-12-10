import React, { useState, useEffect } from "react";
import { fetchPosts } from "../Service/api.js";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>All Posts</h1>
      {posts.length === 0 ? (
        <p className="empty-state">No posts found.</p>
      ) : (
        posts.map((post) => (
          <div className="post-card" key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Type: {post.type}</p>
            {post.imageUrls.map((url, idx) => (
              <img key={idx} src={url} alt="Post content" />
            ))}
            {post.videoUrls.map((url, idx) => (
              <video key={idx} src={url} controls />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
