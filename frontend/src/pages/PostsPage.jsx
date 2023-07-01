import { ReactComponentElement, useEffect, useState } from "react";
import { getPostsRequest } from "../api/posts.api";
import PostCard from "../components/PostCard";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await getPostsRequest();
      setPosts(response.data);
    }
    loadPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostsPage;
