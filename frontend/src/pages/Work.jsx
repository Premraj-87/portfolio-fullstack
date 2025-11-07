import { Calendar, MapPin, Briefcase } from "lucide-react";

const Work = () => {
  const experiences = [
    {
      company: "SerengStar",
      logo: "SG",
      position: "Frontend Developer",
      duration: " - Present",
      location: "On-Site",
      type: "Full-time",
      description: "Leading development of scalable web applications using MERN stack. Implemented microservices architecture, reducing API response time by 40%. Mentoring junior developers and conducting code reviews.",
      responsibilities: [
        "Architected and developed microservices-based applications",
        "Led a team of 5 developers in agile environment",
        "Improved application performance through optimization techniques",
        "Implemented CI/CD pipelines using GitHub Actions"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS", "TypeScript"]
    },
    {
      company: "Digital Solutions Inc",
      logo: "DS",
      position: "Full Stack Developer",
      duration: "Jun 2022 - Dec 2023",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Built and maintained 15+ client projects using React, Node.js, and MongoDB. Developed RESTful APIs and integrated third-party services. Improved application performance through optimization techniques.",
      responsibilities: [
        "Developed and maintained full-stack web applications",
        "Created RESTful APIs and integrated payment gateways",
        "Collaborated with clients to gather requirements",
        "Performed code reviews and ensured code quality"
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Redis", "Stripe API"]
    },
    
   
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12 animate-fadeInDown">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Work Experience</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
          My professional journey in software development
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className={`flex gap-6 animate-fadeInUp stagger-${Math.min(index + 1, 6)}`}>
              {/* Company Logo */}
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold shrink-0 relative z-10 transition-all hover-scale border-2 border-transparent hover:border-amber-500 dark:hover:border-amber-500">
                {exp.logo}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 hover-lift">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">
                      {exp.position}
                    </h2>
                    <p className="text-amber-600 dark:text-amber-400 font-medium transition-colors">{exp.company}</p>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-500 space-y-1 transition-colors">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide transition-colors">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2 transition-colors">
                        <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide transition-colors">
                    Technologies Used
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-12 transition-colors">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-amber-600 dark:text-amber-400 font-semibold mb-3 transition-colors">Frontend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm transition-colors">
              <li>• React.js & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Redux & Context API</li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-600 dark:text-amber-400 font-semibold mb-3 transition-colors">Backend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm transition-colors">
              <li>• Node.js & Express</li>
              <li>• MongoDB & PostgreSQL</li>
              <li>• RESTful APIs</li>
              <li>• Authentication & JWT</li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-600 dark:text-amber-400 font-semibold mb-3 transition-colors">Tools & Others</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm transition-colors">
              <li>• Git & GitHub</li>
              <li>• Docker & AWS</li>
              <li>• CI/CD Pipelines</li>
              <li>• Agile/Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;