import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import PostsForm from "./pages/PostsForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/new" element={<PostsForm />} />
        <Route path="/edit/:id" element={<PostsForm />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
