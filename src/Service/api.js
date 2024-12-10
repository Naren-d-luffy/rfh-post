import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});

export const fetchPosts = async () => {
  const { data } = await api.get("/post", { params: { noPagination: true } });
  return data;
};

export const createPost = async (formData) => {
  const { data } = await api.post("/post", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};
