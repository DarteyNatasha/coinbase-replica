import { Link } from 'react-router-dom';
import { FiTrendingUp, FiLock, FiBarChart2, FiBox, FiGlobe, FiShield } from 'react-icons/fi';

const Institutions = () => {
  const services = [
    { icon: FiTrendingUp, title: 'Prime Services', desc: 'Professional prime brokerage services', feature: 'Institutional-grade trading' },
    { icon: FiLock, title: 'Custody', desc: 'Securely store all your digital assets', feature: 'Bank-grade security' },
    { icon: FiBarChart2, title: 'Staking', desc: 'Explore staking across our products', feature: 'Earn rewards' },
    { icon: FiBox, title: 'Onchain Wallet', desc: 'Institutional-grade wallet to get onchain', feature: 'Seamless integration' },
    { icon: FiGlobe, title: 'Global Markets', desc: 'Access international cryptocurrency markets', feature: '24/7 trading' },
    { icon: FiShield, title: 'Regulatory Compliance', desc: 'Fully compliant trading environment', feature: 'Peace of mind' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">For Institutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade crypto solutions for financial institutions, hedge funds, and corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-3">{service.desc}</p>
                <p className="text-sm text-purple-400 font-semibold">{service.feature}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Institutional Solutions</h2>
          <p className="mb-6">Get in touch with our institutional sales team</p>
          <Link to="/signup" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Institutions;