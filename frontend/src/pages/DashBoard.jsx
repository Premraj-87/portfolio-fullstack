import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import API from "../api/axiosConfig";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  // Fetch Blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data);
      console.log("Blogs fetched:", res.data.length);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  // Fetch Projects
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
      console.log("Projects fetched:", res.data.length);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (activeTab === "blogs") {
      fetchBlogs();
    } else {
      fetchProjects();
    }
  }, [activeTab]);

  // Handle Delete
  const handleDelete = async (id, type) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      await API.delete(`/${type}s/${id}`);
      if (type === "blog") {
        fetchBlogs();
      } else {
        fetchProjects();
      }
      alert(`${type} deleted successfully!`);
    } catch (error) {
      alert(`Error deleting ${type}: ${error.response?.data?.message || error.message}`);
    }
  };

  // Handle Create/Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = activeTab === "blogs" ? "/blogs" : "/projects";

    try {
      if (editingItem) {
        // Update
        await API.put(`${endpoint}/${editingItem._id}`, formData);
        alert(`${activeTab === "blogs" ? "Blog" : "Project"} updated successfully!`);
      } else {
        // Create
        await API.post(endpoint, formData);
        alert(`${activeTab === "blogs" ? "Blog" : "Project"} created successfully!`);
      }
      setShowModal(false);
      setFormData({});
      setEditingItem(null);
      activeTab === "blogs" ? fetchBlogs() : fetchProjects();
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  // Open Modal for Create/Edit
  const openModal = (item = null) => {
    console.log("Opening modal for:", item ? "Edit" : "Create");
    console.log("Active tab:", activeTab);
    if (item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData({});
    }
    setShowModal(true);
    console.log("Modal opened, showModal:", true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
          Dashboard 
        </h1>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
              activeTab === "blogs"
                ? "bg-amber-600 dark:bg-amber-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Blogs ({blogs.length})
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
              activeTab === "projects"
                ? "bg-amber-600 dark:bg-amber-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Projects ({projects.length})
          </button>
        </div>

        {/* Add New Button */}
        <button
          onClick={() => openModal()}
          className="w-full sm:w-auto mb-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-amber-600 dark:bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-700 dark:hover:bg-amber-600 transition text-sm sm:text-base"
        >
          + Add New {activeTab === "blogs" ? "Blog" : "Project"}
        </button>

        {/* Content */}
        {loading ? (
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        ) : (
          <div className="grid gap-6">
            {activeTab === "blogs"
              ? blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {blog.title}
                        </h3>
                        <div 
                          className="text-gray-600 dark:text-gray-400 mb-3 prose dark:prose-invert max-w-none text-sm sm:text-base"
                          dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + "..." }}
                        />
                        <div className="flex gap-2 flex-wrap mb-2">
                          {blog.tags?.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => openModal(blog)}
                          className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id, "blog")}
                          className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded hover:bg-red-700 dark:hover:bg-red-600 transition text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : projects.map((project) => (
                  <div
                    key={project._id}
                    className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm sm:text-base">
                          {project.description}
                        </p>
                        <div className="flex gap-2 flex-wrap mb-3">
                          {project.techStack?.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 text-xs sm:text-sm flex-wrap">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              GitHub
                            </a>
                          )}
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-600 dark:text-amber-400 hover:underline"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => openModal(project)}
                          className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(project._id, "project")}
                          className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded hover:bg-red-700 dark:hover:bg-red-600 transition text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        )}

        {/* Modal for Create/Edit */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl max-w-2xl w-full my-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                {editingItem ? "Edit" : "Add New"} {activeTab === "blogs" ? "Blog" : "Project"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {activeTab === "blogs" ? (
                  <>
                    <input
                      type="text"
                      placeholder="Title"
                      value={formData.title || ""}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                      required
                    />
                    <div className="min-h-[200px]">
                      <ReactQuill
                        value={formData.content || ""}
                        onChange={(value) => setFormData({ ...formData, content: value })}
                        theme="snow"
                        className="rounded-lg overflow-hidden"
                        placeholder="Write your blog content here..."
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Author"
                      value={formData.author || ""}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      placeholder="Tags (comma separated)"
                      value={formData.tags?.join(", ") || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, tags: e.target.value.split(",").map((t) => t.trim()) })
                      }
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    />
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">Blog Image</label>
                      <div className="flex flex-col sm:flex-row gap-2 items-start">
                        <input
                          type="text"
                          placeholder="Image URL (or upload below)"
                          value={formData.image || ""}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                          className="flex-1 w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                        />
                        <CloudinaryUploadWidget 
                          onUploadSuccess={(url) => setFormData({ ...formData, image: url })}
                          buttonText="Upload"
                        />
                      </div>
                      {formData.image && (
                        <img src={formData.image} alt="Preview" className="mt-2 h-20 sm:h-24 rounded-lg object-cover border border-gray-300 dark:border-gray-600" />
                      )}
                    </div>
                    <label className="flex items-center gap-2 text-sm sm:text-base text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        checked={formData.isFeatured || false}
                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      Featured Blog
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Title"
                      value={formData.title || ""}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                      required
                    />
                    <textarea
                      placeholder="Description"
                      value={formData.description || ""}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white h-24 sm:h-32 text-sm sm:text-base"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Tech Stack (comma separated)"
                      value={formData.techStack?.join(", ") || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, techStack: e.target.value.split(",").map((t) => t.trim()) })
                      }
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      placeholder="GitHub URL"
                      value={formData.github || ""}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      placeholder="Live Link"
                      value={formData.liveLink || ""}
                      onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                      className="w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                    />
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">Project Thumbnail</label>
                      <div className="flex flex-col sm:flex-row gap-2 items-start">
                        <input
                          type="text"
                          placeholder="Thumbnail URL (or upload below)"
                          value={formData.thumbnail || ""}
                          onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                          className="flex-1 w-full p-2.5 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                        />
                        <CloudinaryUploadWidget 
                          onUploadSuccess={(url) => setFormData({ ...formData, thumbnail: url })}
                          buttonText="Upload"
                        />
                      </div>
                      {formData.thumbnail && (
                        <img src={formData.thumbnail} alt="Preview" className="mt-2 h-20 sm:h-24 rounded-lg object-cover border border-gray-300 dark:border-gray-600" />
                      )}
                    </div>
                    <label className="flex items-center gap-2 text-sm sm:text-base text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        checked={formData.isFeatured || false}
                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      Featured Project
                    </label>
                  </>
                )}

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition text-sm sm:text-base"
                  >
                    {editingItem ? "Update" : "Create"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setFormData({});
                      setEditingItem(null);
                    }}
                    className="flex-1 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
