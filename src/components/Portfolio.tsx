
const Portfolio = () => {
  const projects = [
    {
      title: "University Student Portal",
      category: "Student",
      description: "A comprehensive portfolio website for computer science students with project showcase and blog.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Portfolio"]
    },
    {
      title: "Non-Profit Organization",
      category: "Organization",
      description: "Community-driven website with event management and volunteer coordination system.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "CMS", "Events"]
    },
    {
      title: "Tech Startup Platform",
      category: "Business",
      description: "Modern SaaS platform with user dashboard, analytics, and payment integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "API", "SaaS"]
    },
    {
      title: "Art Student Showcase",
      category: "Student",
      description: "Visual portfolio website for art students with gallery and exhibition features.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Gallery", "Portfolio", "Art"]
    },
    {
      title: "Local Business Directory",
      category: "Organization",
      description: "Community business directory with reviews, ratings, and local event listings.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Directory", "Reviews", "Local"]
    },
    {
      title: "E-commerce Platform",
      category: "Business",
      description: "Full-featured online store with inventory management and customer portal.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["E-commerce", "React", "Stripe"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-meduim text-gray-900">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects across different industries and client types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-black hover:bg-grey-600 hover:text-white text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black hover:bg-grey-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
