import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosConfig";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (err) {
        setError("Failed to fetch projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-700 dark:text-gray-400 transition-colors">Loading projects...</div>
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
          A collection of my work and side projects
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 animate-pulse">
          <div className="text-xl text-gray-600 dark:text-gray-500 transition-colors">Loading projects...</div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-20 animate-fadeIn">
          <div className="text-xl text-red-600 dark:text-red-500 transition-colors">{error}</div>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-20 animate-fadeIn">
          <p className="text-xl text-gray-600 dark:text-gray-500 transition-colors">No projects to display yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-green-500 dark:hover:border-green-500 transition-all group bg-white dark:bg-gray-900 hover-lift animate-scaleIn stagger-${Math.min(index + 1, 6)}`}
            >
              <Link to={`/projects/${project._id}`}>
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 transition-colors"></div>
                )}
              </Link>
              
              <div className="p-5 space-y-3">
                <Link to={`/projects/${project._id}`}>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 transition-colors">
                  {project.description}
                </p>
                
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded transition-all hover:border-amber-500 dark:hover:border-amber-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex gap-4 text-sm pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all flex items-center gap-1 hover-scale"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  <Link
                    to={`/projects/${project._id}`}
                    className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-xs ml-auto"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;