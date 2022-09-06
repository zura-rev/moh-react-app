
import { Routes, Route } from "react-router-dom";
import { Header } from './common/header'
import PostsPage from './pages/PostsPage'
import AboutPage from './pages/AboutPage'
import { Chat } from './components/chat'

function App() {
  return (<>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/">
          <Route index element={<PostsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  </>
  )
}

export default App
