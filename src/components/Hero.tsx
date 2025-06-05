const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-none tracking-tighter uppercase" style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: '-0.03em',
                fontWeight: 500
              }}>
                Build Your Digital
                <span className="block text-black-600">Presence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-semibold tracking-wide" style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: '0.01em',
                fontWeight: 300
              }}>
                Freelance company specializing in creating software and systems for students, companies, and organizations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              
                <a href="#contact" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors tracking-wide uppercase flex items-center justify-center text-center" style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: '0.05em',
                fontWeight: 700
                }}>
                Start Your Project
                </a>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors tracking-wide uppercase" style={{
                fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                letterSpacing: '0.05em',
                fontWeight: 600
                }}>
                View Portfolio
                </button>
            </div>
            
            
          </div>
          
          <div className="relative">
            <div className="rounded-2xl p-2 flex items-center justify-center min-h-[350px]">
              <img
                src="../public/images/1.jpeg"
                alt="Hero"
                className="rounded-xl object-cover w-full h-full max-h-[400px] shadow-lg"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;