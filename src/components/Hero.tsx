
const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-black text-gray-900 leading-none tracking-tight">
                Build Your Digital
                <span className="block text-blue-600">Presence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Professional websites for students, organizations, and companies. 
                We create modern, responsive, and powerful web solutions that drive results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-display font-black text-gray-900">500+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-black text-gray-900">98%</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-black text-gray-900">24/7</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="h-8 bg-white/30 rounded"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-white/20 rounded"></div>
                    <div className="h-16 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
