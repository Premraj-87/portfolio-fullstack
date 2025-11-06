import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import API from "../api/axiosConfig";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-gray-600 dark:text-gray-400 transition-colors">Loading...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-red-600 dark:text-red-400 mb-4 transition-colors">{error || "Blog not found"}</div>
        <Link to="/blogs" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      {/* Blog Header */}
      <article className="space-y-6">
        {/* Featured Image */}
        {blog.image && (
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-colors">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 transition-colors">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{blog.author || "Prem Raj Anand"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}</span>
          </div>
          {blog.isFeatured && (
            <span className="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-xs font-medium transition-colors">
              Featured
            </span>
          )}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={16} className="text-gray-600 dark:text-gray-400 transition-colors" />
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 transition-colors"></div>

        {/* Blog Content */}
        <div
          className="blog-content prose prose-gray dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed transition-colors"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <style jsx>{`
          .blog-content h1, .blog-content h2, .blog-content h3 {
            color: var(--text-primary);
            font-weight: bold;
            margin-top: 1.5em;
            margin-bottom: 0.75em;
          }
          .blog-content p {
            margin-bottom: 1em;
            line-height: 1.8;
          }
          .blog-content ul, .blog-content ol {
            margin: 1em 0;
            padding-left: 2em;
          }
          .blog-content li {
            margin-bottom: 0.5em;
          }
          .blog-content a {
            color: #16a34a;
            text-decoration: underline;
          }
          .dark .blog-content a {
            color: #4ade80;
          }
          .blog-content a:hover {
            color: #15803d;
          }
          .dark .blog-content a:hover {
            color: #86efac;
          }
          .blog-content code {
            background: #f3f4f6;
            padding: 0.2em 0.4em;
            border-radius: 0.25em;
            font-size: 0.9em;
          }
          .dark .blog-content code {
            background: #1f2937;
          }
          .blog-content pre {
            background: #f3f4f6;
            padding: 1em;
            border-radius: 0.5em;
            overflow-x: auto;
            margin: 1em 0;
          }
          .dark .blog-content pre {
            background: #1f2937;
          }
          .blog-content blockquote {
            border-left: 4px solid #16a34a;
            padding-left: 1em;
            margin: 1em 0;
            font-style: italic;
            color: #6b7280;
          }
          .dark .blog-content blockquote {
            border-left-color: #4ade80;
            color: #9ca3af;
          }
        `}</style>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12 transition-colors"></div>

        {/* Back to Blogs */}
        <div className="text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
          >
            View All Blogs
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
