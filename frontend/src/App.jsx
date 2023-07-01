import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostsForm from "./pages/PostsForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/new" element={<PostsForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
