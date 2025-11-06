import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ExternalLink, FileDown, MapPin, Calendar, ArrowRight, Send } from "lucide-react";
import API from "../api/axiosConfig";
import premLogo from "../assets/prem-logo.png";
import premPro from "../assets/prem-pro.jpg";

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const navigate = useNavigate();
  
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await API.post("/contact", contactForm);
      
      setSubmitStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
      setContactForm({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const fetchFeaturedContent = async () => {
      try {
        const [projectsRes, blogsRes] = await Promise.all([
          API.get("/projects"),
          API.get("/blogs")
        ]);
        
        const projects = projectsRes.data.filter(p => p.isFeatured).slice(0, 4);
        setFeaturedProjects(projects.length > 0 ? projects : projectsRes.data.slice(0, 4));
        
        const blogs = blogsRes.data.filter(b => b.isFeatured).slice(0, 2);
        setFeaturedBlogs(blogs.length > 0 ? blogs : blogsRes.data.slice(0, 2));
      } catch (err) {
        console.error("Error fetching featured content:", err);
      }
    };
    fetchFeaturedContent();
  }, []);

  const experiences = [
    {
      company: "Tech Innovations Ltd",
      logo: "TI",
      position: "Senior Full Stack Developer",
      duration: "Jan 2024 - Present",
      location: "Remote",
      description: "Leading development of scalable web applications using MERN stack. Implemented microservices architecture, reducing API response time by 40%. Mentoring junior developers and conducting code reviews."
    },
    {
      company: "Digital Solutions Inc",
      logo: "DS",
      position: "Full Stack Developer",
      duration: "Jun 2022 - Dec 2023",
      location: "San Francisco, CA",
      description: "Built and maintained 15+ client projects using React, Node.js, and MongoDB. Developed RESTful APIs and integrated third-party services. Improved application performance through optimization techniques."
    },
    {
      company: "StartUp Lab",
      logo: "SL",
      position: "Frontend Developer",
      duration: "Jan 2021 - May 2022",
      location: "New York, NY",
      description: "Created responsive and interactive user interfaces with React and TypeScript. Collaborated with UX designers to implement pixel-perfect designs. Reduced bundle size by 30% through code splitting."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-24">
      
      {/* Hero Section */}
      <section className="flex items-start gap-6 animate-fadeInUp">
        <img 
          src={premLogo}
          alt="Prem Raj Anand" 
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700 transition-all hover-scale"
        />
        <div className="flex-1 space-y-4">
          <div className="animate-fadeInLeft stagger-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">Prem Raj Anand</h1>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Frontend Developer</p>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors animate-fadeInLeft stagger-2">
            I build interactive web applications using <span className="text-amber-600 dark:text-amber-400 font-semibold">React</span>, <span className="text-amber-600 dark:text-amber-400 font-semibold">Bun</span>, and <span className="text-amber-600 dark:text-amber-400 font-semibold">Express</span>. 
            Focused on creating fast, accessible, and delightful user experiences.
          </p>

          <div className="flex gap-3 flex-wrap animate-fadeInLeft stagger-3">
            <a 
              href="/resume.pdf" 
              download="Prem_Raj_Anand_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 dark:bg-amber-500 text-white rounded-md hover:bg-amber-700 dark:hover:bg-amber-600 transition-all text-sm font-medium hover-lift"
            >
              <FileDown size={16} />
              Resume
            </a>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-sm font-medium hover-lift"
            >
              <Mail size={16} />
              Get in touch
            </button>
          </div>

          <div className="flex gap-4 pt-2 animate-fadeInLeft stagger-4">
            <a href="https://github.com/Premraj-87" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover-scale">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/premrajanand87/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover-scale">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/premraj" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover-scale">
              <Twitter size={20} />
            </a>
            <a href="mailto:premrajanand87@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover-scale">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex gap-4 group hover-lift animate-fadeInLeft stagger-${index + 1}`}>
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold shrink-0 transition-all border border-gray-200 dark:border-gray-700 group-hover:border-amber-500 dark:group-hover:border-amber-500">
                {exp.logo}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-400 text-sm transition-colors">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 text-right">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-all text-sm font-medium group"
        >
          View all work experience
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* Projects Section */}
      <section className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project, index) => (
              <div 
                key={project._id} 
                onClick={() => navigate(`/projects/${project._id}`)}
                className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-amber-500 dark:hover:border-amber-500 transition-all group block cursor-pointer bg-white dark:bg-gray-900 hover-lift animate-scaleIn stagger-${index + 1}`}
              >
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 transition-colors"></div>
                )}
                
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700 transition-all hover:border-amber-500 dark:hover:border-amber-500">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all flex items-center gap-1 hover-scale">
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all flex items-center gap-1 hover-scale">
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900 transition-colors animate-pulse">
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 skeleton transition-colors"></div>
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">Project {i}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">A brief description of the project goes here.</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700 transition-colors">React</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700 transition-colors">Node.js</span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-sm font-medium"
        >
          Show all projects
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* About Me */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">About Me</h2>
        
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900 transition-colors">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Profile Image */}
            <div className="shrink-0">
              <img 
                src={premPro}
                alt="Prem Raj Anand" 
                className="w-32 h-32 rounded-lg object-cover border-2 border-gray-300 dark:border-gray-700 transition-colors"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Hi, I am <span className="text-gray-900 dark:text-white font-semibold">Prem Raj Anand</span>. I like to make <span className="text-amber-600 dark:text-amber-400 font-semibold">MERN</span> web apps and interactive web applications. 
                I'm passionate about learning new technologies and working on exciting projects that push my skills further.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                Whether it's building full-stack applications, creating seamless user experiences, or exploring the latest frameworks, 
                I'm always eager to take on new challenges and grow as a developer.
              </p>

              {/* Skills */}
              <div className="space-y-3">
                <h3 className="text-gray-900 dark:text-white font-semibold text-sm transition-colors">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-4">
                  {/* MongoDB */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-all">
                      <svg className="w-8 h-8 text-amber-600 dark:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.604-3.254 4.291-11.375zM12 20.6c-.316-.396-.61-.795-.874-1.223-.507-.82-.967-1.68-1.373-2.578-.445-.98-.827-1.997-1.14-3.041-.313-1.044-.556-2.11-.728-3.195-.172-1.085-.273-2.187-.302-3.295-.03-1.108.012-2.222.127-3.333.115-1.111.302-2.218.562-3.316.26-1.098.593-2.185 1-3.26.407-1.075.888-2.137 1.442-3.183.554-1.046 1.181-2.076 1.88-3.087.7-1.011 1.471-2.003 2.313-2.973.842-.97 1.755-1.918 2.738-2.842.983-.924 2.036-1.823 3.157-2.696 1.121-.873 2.31-1.72 3.565-2.54 1.255-.82 2.576-1.612 3.96-2.375 1.384-.763 2.83-1.497 4.337-2.2 1.507-.703 3.074-1.376 4.7-2.017 1.626-.641 3.31-1.25 5.052-1.826 1.742-.576 3.54-1.12 5.394-1.63 1.854-.51 3.762-.988 5.724-1.432 1.962-.444 3.977-.856 6.044-1.235 2.067-.379 4.185-.725 6.354-1.038 2.169-.313 4.388-.593 6.656-.84 2.268-.247 4.585-.461 6.95-.643 2.365-.182 4.778-.332 7.239-.45 2.461-.118 4.97-.204 7.526-.258 2.556-.054 5.159-.076 7.808-.066 2.649.01 5.344.052 8.083.127 2.739.075 5.522.183 8.347.325 2.825.142 5.692.318 8.599.528 2.907.21 5.854.454 8.84.732z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">MongoDB</span>
                  </div>

                  {/* Express */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-all">
                      <svg className="w-8 h-8 text-amber-600 dark:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Express</span>
                  </div>

                  {/* React */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-all">
                      <svg className="w-8 h-8 text-amber-600 dark:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">React</span>
                  </div>

                  {/* Node.js */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-all">
                      <svg className="w-8 h-8 text-amber-600 dark:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Node.js</span>
                  </div>

                  {/* JavaScript */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all">
                      <svg className="w-8 h-8 text-gray-600 dark:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">JavaScript</span>
                  </div>

                  {/* Git */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all">
                      <svg className="w-8 h-8 text-gray-600 dark:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Git</span>
                  </div>

                  {/* Tailwind */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all">
                      <svg className="w-8 h-8 text-gray-600 dark:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">Tailwind</span>
                  </div>

                  {/* TypeScript */}
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all">
                      <svg className="w-8 h-8 text-gray-600 dark:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors">TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://github.com/Premraj-87" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-md transition-all text-sm font-medium"
                >
                  <Github size={18} />
                  View GitHub Profile
                </a>
                <a 
                  href="https://github.com/Premraj-87?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  See My Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Featured Blogs</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {featuredBlogs.length > 0 ? (
            featuredBlogs.map((blog) => (
              <Link key={blog._id} to={`/blogs/${blog._id}`} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-300 dark:hover:border-gray-700 transition-all group block bg-white dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {blog.title}
                </h3>
                <div 
                  className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 transition-colors"
                  dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 120) + "..." }}
                />
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{blog.author || "Prem Raj Anand"}</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </Link>
            ))
          ) : (
            <>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-900 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors">Blog Post Title</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 transition-colors">A brief excerpt from the blog post...</p>
                <span className="text-xs text-gray-500">Nov 6, 2025</span>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-900 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors">Another Blog Post</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 transition-colors">Another interesting topic discussed here...</p>
                <span className="text-xs text-gray-500">Nov 5, 2025</span>
              </div>
            </>
          )}
        </div>

        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-sm font-medium"
        >
          View all blogs
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* Let's Connect */}
      <section id="contact" className="p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
            Have a project in mind? Drop me a message.
          </p>
        </div>

        <form onSubmit={handleContactSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={contactForm.name}
              onChange={handleContactChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleContactChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 transition-all"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={contactForm.message}
              onChange={handleContactChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full px-4 py-3 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 transition-all resize-none"
            />
          </div>

          {submitStatus && (
            <div className={`p-3 rounded-md text-sm text-center ${
              submitStatus.type === 'success' 
                ? 'bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400' 
                : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-amber-600 dark:bg-amber-500 text-white rounded-md hover:bg-amber-700 dark:hover:bg-amber-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </section>

      {/* Iron Man Quote - Minimal */}
      <div className="text-center py-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <p className="text-sm italic text-gray-500 dark:text-gray-500">
          "Sometimes you gotta run before you can walk."
          <span className="block mt-1 text-xs text-amber-600 dark:text-amber-400">— Tony Stark</span>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <p>© 2025 Prem Raj Anand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
