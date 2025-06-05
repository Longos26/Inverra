import {
  CodeBracketIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      title: 'Software Development',
      description:
        'Custom-built web applications and websites tailored to your business goals, with clean, user-focused designs.',
      features: [
        'Custom Features & Portfolios',
        'Mobile-Friendly Design',
        'Fast Loading & SEO-Optimized',
        'Secure Development Practices',
      ],
      icon: CodeBracketIcon,
      color: 'bg-black',
    },
    {
      title: 'Quality Assurance & Testing',
      description:
        'Rigorous testing to ensure your website or app is reliable, secure, and optimized for all devices.',
      features: [
        'Cross-Device Testing',
        'Performance Optimization',
        'Security Audits',
        'User Experience Validation',
      ],
      icon: ShieldCheckIcon,
      color: 'bg-black',
    },
    {
      title: 'Deployment & Integration',
      description:
        'Seamless deployment and integration of web solutions, from booking systems to enterprise-grade platforms.',
      features: [
        'Smooth Deployment Process',
        'Third-Party Integrations',
        'Scalable Infrastructure',
        'Visually Impactful Layouts',
      ],
      icon: RocketLaunchIcon,
      color: 'bg-black',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2
            className="text-4xl font-black text-gray-900 leading-none tracking-tighter"
            style={{
              fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
              letterSpacing: '-0.03em',
              fontWeight: 500,
            }}
          >
            Our Services
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold tracking-wide"
            style={{
              fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
              letterSpacing: '0.01em',
              fontWeight: 300,
            }}
          >
            Fast, secure, and user-focused web solutions tailored to your business needs, with affordable pricing and visually impactful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-2xl font-black text-gray-900 mb-4 leading-none tracking-tighter"
                  style={{
                    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                    letterSpacing: '-0.02em',
                    fontWeight: 500,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-gray-600 mb-6 leading-relaxed font-semibold tracking-wide"
                  style={{
                    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                    letterSpacing: '0.01em',
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700 font-semibold tracking-wide"
                      style={{
                        fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
                        letterSpacing: '0.01em',
                        fontWeight: 400,
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;