import { Link } from 'react-router-dom';
import { FiInfo, FiUsers, FiFileText, FiBriefcase, FiMessageSquare, FiShield, FiAward, FiGlobe } from 'react-icons/fi';

const Company = () => {
  const values = [
    { icon: FiShield, title: 'Security First', desc: 'Protecting customer assets is our top priority' },
    { icon: FiUsers, title: 'Customer Focus', desc: 'Building products that put users first' },
    { icon: FiGlobe, title: 'Global Impact', desc: 'Democratizing access to the global economy' },
    { icon: FiAward, title: 'Innovation', desc: 'Pushing the boundaries of financial technology' },
  ];

  const team = [
    { name: 'Brian Armstrong', role: 'Co-founder & CEO', bio: 'Leading Coinbase since 2012' },
    { name: 'Emilie Choi', role: 'President & COO', bio: 'Driving operational excellence' },
    { name: 'Alesia Haas', role: 'CFO', bio: 'Financial strategy and growth' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Coinbase</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to increase economic freedom in the world by building the future of finance.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-blue-600 rounded-xl p-8 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To create an open financial system for the world, where anyone can participate and benefit from the crypto economy.
          </p>
        </div>

        {/* Values */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Leadership */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div>Countries Supported</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">100M+</div>
            <div>Verified Users</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">$500B+</div>
            <div>Trading Volume</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-6">Help us build the future of finance</p>
          <Link to="/signup" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            View Careers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;