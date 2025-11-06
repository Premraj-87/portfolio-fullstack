import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Dashboard from './pages/DashBoard';
import BlogDetail from './pages/BlogDetail';
import ProjectDetail from './pages/ProjectDetail';


function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 px-6 md:px-16 lg:px-20 xl:px-32 transition-colors duration-300">
      <Navbar/>
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
      </Routes>
    </div>
  )
}
export default App;
