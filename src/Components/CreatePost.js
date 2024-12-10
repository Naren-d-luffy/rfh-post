import React, { useState } from "react";
import { createPost } from "../Service/api.js";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("Text");
  const [files, setFiles] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("type", type);
    formData.append("userId", "675174f9bd084fe0dbad208f"); // Replace with actual userId
    if (files) {
      Array.from(files).forEach((file) => formData.append("files", file));
    }

    try {
      const response = await createPost(formData);
      console.log("Post created successfully:", response);
      setTitle("");
      setContent("");
      setFiles(null);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <div className="container">
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div>
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <div>
          <label>Files:</label>
          <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
