import { Calendar, MapPin, Briefcase } from "lucide-react";

const Work = () => {
  const experiences = [
    {
      company: "BitFusion Technologies",
      logo: "BT",
      position: "UX/UI Designer",
      duration: "Dec 2024 - Aug 2025",
      location: "Remote",
      type: "Freelance",
      description: "Creates intuitive and aesthetically pleasing user interfaces for digital products. Focuses on visual design, interactivity, and brand consistency to enhance user experience and engagement.",
      responsibilities: [
        "Designed intuitive UI for [App Type] startup application, addressing key user experience challenges.",
        "Enhanced app usability and engagement through iterative UI design and feedback implementation",
        "Created visually appealing and consistent UI that aligned with brand identity and attracted users"
      ],
      technologies: ["Figma", "Framer",]
    },
    {
      company: "Camringo Pictures",
      logo: "CP",
      position: "Frontend Developer",
      duration: "July 2024 - Nov 2024",
      location: "Remote",
      type: "freelance",
      description: "As a freelance web developer for Camringo Pictures, I designed and built their dynamic, responsive React website, incorporating engaging animations.",
      responsibilities: [
        "Built out a slick, responsive React front-end for a videography company – made sure it looked great on any device",
        "Spiced things up with cool animations and interactive bits, making the website feel lively and professional.",
        "Lent my freelance web development skills to help a videography company get a stunning, modern online portfolio up and running."
      ],
      technologies: ["React","firebase","framer-motion"]
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
              <li>• React.js</li>
              <li>• Tailwind CSS</li>
              <li>• Redux & Context API</li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-600 dark:text-amber-400 font-semibold mb-3 transition-colors">Backend</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm transition-colors">
              <li>• Node.js & Express</li>
              <li>• MongoDB </li>
              <li>• RESTful APIs</li>
              <li>• Authentication & JWT</li>
            </ul>
          </div>
          <div>
            <h3 className="text-amber-600 dark:text-amber-400 font-semibold mb-3 transition-colors">Tools & Others</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm transition-colors">
              <li>• Git & GitHub</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;