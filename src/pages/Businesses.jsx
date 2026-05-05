import { Link } from 'react-router-dom';
import { FiBriefcase, FiDatabase, FiCreditCard, FiLayers, FiTrendingUp, FiShield } from 'react-icons/fi';

const Businesses = () => {
  const solutions = [
    { icon: FiBriefcase, title: 'Business Accounts', desc: 'Crypto trading and payments for startups and SMBs', benefit: 'Grow your business with crypto' },
    { icon: FiDatabase, title: 'Asset Listings', desc: 'List your asset on Coinbase', benefit: 'Reach millions of users' },
    { icon: FiCreditCard, title: 'Payments', desc: 'The stablecoin payments stack for commerce platforms', benefit: 'Fast, low-cost transactions' },
    { icon: FiLayers, title: 'Token Manager', desc: 'The platform for token distributions, vesting, and lockups', benefit: 'Easy token management' },
    { icon: FiTrendingUp, title: 'Trading Solutions', desc: 'Advanced trading tools for businesses', benefit: 'Maximize returns' },
    { icon: FiShield, title: 'Security', desc: 'Enterprise-grade security for your assets', benefit: 'Peace of mind' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">For Businesses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your business with crypto solutions designed for growth, security, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-3">{solution.desc}</p>
                <p className="text-sm text-green-600 font-semibold">{solution.benefit}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="mb-6">Join thousands of businesses already using Coinbase</p>
          <Link to="/signup" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Businesses;