
import { Routes, Route } from "react-router-dom";
import PostsPage from './pages/PostsPage'
import AboutPage from './pages/AboutPage'
import { Layout } from "./common/layout";

function App() {
  return <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
}

export default App
