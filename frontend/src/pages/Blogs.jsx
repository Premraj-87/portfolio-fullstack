import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosConfig";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get("/blogs");
        setBlogs(res.data);
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-700 dark:text-gray-400 transition-colors">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-red-600 dark:text-red-400 transition-colors">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12 animate-fadeInDown">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Blog Posts</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 animate-pulse">
          <div className="text-xl text-gray-600 dark:text-gray-500 transition-colors">Loading blogs...</div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-20 animate-fadeIn">
          <div className="text-xl text-red-600 dark:text-red-500 transition-colors">{error}</div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-20 animate-fadeIn">
          <p className="text-xl text-gray-600 dark:text-gray-500 transition-colors">No blogs published yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link 
              key={blog._id} 
              to={`/blogs/${blog._id}`}
              className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-amber-500 dark:hover:border-amber-500 transition-all group block bg-white dark:bg-gray-900 hover-lift animate-scaleIn stagger-${Math.min(index + 1, 6)}`}
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {blog.title}
                </h2>
                <div
                  className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed transition-colors"
                  dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + "..." }}
                />
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-800 transition-colors">
                  <span>{blog.author || "Prem Raj Anand"}</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;