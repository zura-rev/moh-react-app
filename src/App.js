import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { Layout } from "./common/layout";
import PostsPage from './pages/PostsPage'
import AboutPage from './pages/AboutPage'
import CreatePostPage from "./pages/CreatePostPage";
import { getPosts } from './api'

function App() {

  const [posts, setPosts] = useState([])


  async function fetchData() {
    const posts = await getPosts()
    setPosts(posts)
  }

  useEffect(() => {
    fetchData()
    //return () => { }
  }, [])

  const createPost = (post) => {
    if (post) {
      console.log('post', post)
    }
    //setPosts(post)
  }

  return <div className="app">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsPage posts={posts} />} />
        <Route path="createPost" element={<CreatePostPage handlePost={createPost} />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </div>
}

export default App
