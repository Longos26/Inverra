const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-medium text-gray-900 tracking-tight">About Inverra</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Inverra is a dynamic freelance company specializing in custom software and systems 
                for students, businesses, and organizations, delivering digital experiences that 
                captivate, convert, and elevate your brand.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Founded with a passion for empowering our clients, Inverra crafts strategic web 
                solutions that blend elegance, clarity, and purpose. From sleek corporate websites 
                to intuitive platforms for educational institutions, our work drives engagement, 
                trust, and growth.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our skilled team of developers and designers tailors each project to meet the unique 
                needs of our clients, ensuring stunning visuals and seamless performance across all 
                devices.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600 text-sm">Years of Experience</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600 text-sm">System Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Our Mission</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To empower students, businesses, and organizations with innovative software and 
                    systems that drive success and create lasting impact.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Our Vision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To lead the industry in delivering accessible, high-quality digital solutions 
                    that transform how our clients connect and grow.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Our Values</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Innovation, excellence, client satisfaction, and adaptability define our approach 
                    to every project we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;