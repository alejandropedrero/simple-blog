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

  function renderMain() {
    if (posts.length === 0) {
      return (
        <div>
          <h3>No hay nada por aquí</h3>
          <p>
            Puedes crear el primer post desde el enlace 'Crear post' en la barra
            de navegación
          </p>
        </div>
      );
    }

    return posts.map((post) => <PostCard post={post} key={post.id} />);
  }

  return (
    <div className="container">
      <h1>Posts</h1>
      {renderMain()}
    </div>
  );
}

export default PostsPage;
