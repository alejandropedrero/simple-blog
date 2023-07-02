import React, { useEffect, useState } from "react";
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

  const handlePostDelete = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="container">
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <div>
          <h3>No hay nada por aquí</h3>
          <p>
            Puedes crear el primer post desde el enlace{" "}
            <span className="fw-bold text-black-50">'Crear post'</span> en la
            barra de navegación
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <PostCard post={post} key={post.id} onDelete={handlePostDelete} />
        ))
      )}
    </div>
  );
}

export default PostsPage;
