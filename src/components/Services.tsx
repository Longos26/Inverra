
const Services = () => {
  const services = [
    {
      title: "Student Portfolios",
      description: "Professional websites for students to showcase their projects, skills, and academic achievements.",
      features: ["Portfolio Showcase", "Blog Integration", "Contact Forms", "Responsive Design"],
      icon: "🎓",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Organization Websites",
      description: "Comprehensive web solutions for non-profits, clubs, and community organizations.",
      features: ["Event Management", "Member Portal", "Donation System", "Content Management"],
      icon: "🏢",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Business Solutions",
      description: "Enterprise-grade websites and web applications for companies of all sizes.",
      features: ["E-commerce", "CRM Integration", "Analytics", "Custom Development"],
      icon: "💼",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-display font-black text-gray-900 tracking-tight">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            We specialize in creating tailored web solutions for three key markets, 
            each with unique needs and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 mb-6 font-medium">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-3 rounded-lg font-bold transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
