import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import ApplicationsPage from './pages/ApplicationsPage'
import ApplicationPage from './pages/ApplicationPage'
import CreateApplicationPage from './pages/CreateApplicationPage'
import AboutPage from './pages/AboutPage'

function App() {

  const [data, setData] = useState([])

  async function fetchData() {
    //const posts = await getApplications()
    //setData(posts)
  }

  useEffect(() => {
    fetchData()
    //return () => { }
  }, [])

  const createPost = (data) => {
    if (data) {
      console.log('data', data)
    }
    //setPosts(post)
  }

  return <div className="app">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ApplicationsPage data={data} />} />
        <Route path="applicationPage/:id" element={<ApplicationPage />} />
        <Route path="createApplicationPage" element={<CreateApplicationPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </div>
}

export default App
