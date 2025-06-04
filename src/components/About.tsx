
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">About Inverra</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a forward-thinking software company dedicated to creating 
                exceptional web experiences for students, organizations, and businesses.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Founded with the vision of democratizing professional web presence, 
                Inverra combines cutting-edge technology with user-centric design to 
                deliver websites that not only look stunning but perform exceptionally.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our team of experienced developers and designers understands the unique 
                challenges faced by each of our target markets and creates tailored 
                solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm">
                    To empower individuals and organizations with professional web presence 
                    that drives growth and success.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">
                    To be the leading provider of accessible, high-quality web solutions 
                    for the digital age.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Values</h4>
                  <p className="text-gray-600 text-sm">
                    Innovation, quality, customer focus, and continuous improvement 
                    guide everything we do.
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
