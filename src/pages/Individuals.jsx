import { Link } from 'react-router-dom';
import { FiDollarSign, FiBox, FiLayers, FiBriefcase, FiLink, FiBookOpen, FiBarChart2, FiTrendingUp, FiShield, FiCreditCard } from 'react-icons/fi';

const Individuals = () => {
  const features = [
    { icon: FiDollarSign, title: 'Buy and sell', desc: 'Buy, sell, and use crypto easily', color: 'bg-blue-500' },
    { icon: FiBox, title: 'Base App', desc: 'Post, earn, trade, and chat, all in one place', color: 'bg-purple-500' },
    { icon: FiLayers, title: 'Coinbase One', desc: 'Get zero trading fees and more', color: 'bg-green-500' },
    { icon: FiBriefcase, title: 'Private Client', desc: 'For trusts, family offices, UHNWIs', color: 'bg-yellow-500' },
    { icon: FiLink, title: 'Onchain', desc: 'Dive into the world of onchain apps', color: 'bg-indigo-500' },
    { icon: FiBookOpen, title: 'Learn', desc: 'Crypto tips and guides', color: 'bg-red-500' },
    { icon: FiBarChart2, title: 'Advanced', desc: 'Professional-grade trading tools', color: 'bg-pink-500' },
    { icon: FiTrendingUp, title: 'Earn', desc: 'Stake your crypto and earn rewards', color: 'bg-teal-500' },
    { icon: FiShield, title: 'Coinbase Wealth', desc: 'Institutional-grade services for UHNW', color: 'bg-orange-500' },
    { icon: FiCreditCard, title: 'Credit Card', desc: 'Earn up to 4% bitcoin back', color: 'bg-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">For Individuals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to buy, sell, and manage your cryptocurrency portfolio in one secure platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/signup" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Individuals;