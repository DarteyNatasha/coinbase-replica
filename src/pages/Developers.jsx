import { Link } from 'react-router-dom';
import { FiCode, FiCreditCard, FiBarChart2, FiBox, FiDollarSign, FiShield, FiBookOpen, FiUsers } from 'react-icons/fi';

const Developers = () => {
  const tools = [
    { icon: FiCode, title: 'Developer Platform', desc: 'Complete crypto infrastructure for developers', docs: 'View API docs' },
    { icon: FiCreditCard, title: 'Payments API', desc: 'Fast and global stablecoin payments', docs: 'Integrate payments' },
    { icon: FiBarChart2, title: 'Trading API', desc: 'Launch crypto trading for your users', docs: 'Start trading' },
    { icon: FiBox, title: 'Wallet SDK', desc: 'Deploy customizable crypto wallets', docs: 'Build wallets' },
    { icon: FiDollarSign, title: 'Stablecoins', desc: 'Access USDC and custom stablecoins', docs: 'Learn more' },
    { icon: FiUsers, title: 'Node Infrastructure', desc: 'Blockchain node access', docs: 'Get started' },
  ];

  const resources = [
    { icon: FiBookOpen, title: 'Documentation', desc: 'Comprehensive API guides', link: 'Read docs' },
    { icon: FiCode, title: 'SDKs', desc: 'Python, JavaScript, Go, and more', link: 'Download SDKs' },
    { icon: FiShield, title: 'Security', desc: 'Best practices for secure development', link: 'Security guide' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">For Developers</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build the future of finance with Coinbase's developer platform and APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-300 mb-3">{tool.desc}</p>
                <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  {tool.docs} →
                </Link>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold text-white text-center mt-12 mb-6">Developer Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                <Icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-3">{resource.desc}</p>
                <Link to="/signup" className="text-cyan-400 hover:text-cyan-300">
                  {resource.link} →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Start Building Today</h2>
          <p className="mb-6">Join thousands of developers building on Coinbase</p>
          <Link to="/signup" className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get API Keys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Developers;