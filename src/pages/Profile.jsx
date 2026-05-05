import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { FiUser, FiMail, FiDollarSign, FiCalendar, FiShield, FiLogOut } from 'react-icons/fi';

const Profile = () => {
  const { user, logout, fetchProfile } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/signin');
      return;
    }
    loadProfile();
  }, [user]);

  const loadProfile = async () => {
    setLoading(true);
    try {
      const data = await api.getProfile();
      if (data.success) {
        setProfileData(data.user);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      if (error.message === 'Authentication required') {
        logout();
        navigate('/signin');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const displayUser = profileData || user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
            <div className="px-8 py-6 relative">
              <div className="absolute -top-16 left-8">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {displayUser?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{displayUser?.name}</h1>
                  <p className="text-gray-600 mt-1">{displayUser?.email}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Member since {new Date(displayUser?.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  <FiLogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FiUser className="text-blue-600" />
                Account Information
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-gray-600">Full Name</span>
                  <span className="text-gray-800">{displayUser?.name}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-gray-600 flex items-center gap-2">
                    <FiMail className="h-4 w-4" />
                    Email
                  </span>
                  <span className="text-gray-800">{displayUser?.email}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-gray-600 flex items-center gap-2">
                    <FiShield className="h-4 w-4" />
                    Account Type
                  </span>
                  <span className="text-gray-800 capitalize">{displayUser?.role || 'User'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-gray-600 flex items-center gap-2">
                    <FiCalendar className="h-4 w-4" />
                    Joined
                  </span>
                  <span className="text-gray-800">
                    {new Date(displayUser?.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FiDollarSign className="text-green-600" />
                Portfolio Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-gray-600">Account Balance</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${displayUser?.balance?.toLocaleString() || '0'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold text-gray-600">Portfolio Value</span>
                  <span className="text-gray-800">Loading...</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-600">Total Assets</span>
                  <span className="text-gray-800">{displayUser?.portfolio?.length || 0} Assets</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Add Funds
                </button>
              </div>
            </div>
          </div>

          {/* Portfolio Holdings (if any) */}
          {displayUser?.portfolio && displayUser.portfolio.length > 0 && (
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Your Holdings</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Asset</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Amount</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Purchase Price</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Current Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayUser.portfolio.map((holding, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3 text-gray-800">
                          {holding.cryptocurrency?.name || 'Unknown'}
                        </td>
                        <td className="px-4 py-3 text-right">{holding.amount}</td>
                        <td className="px-4 py-3 text-right">${holding.purchasePrice}</td>
                        <td className="px-4 py-3 text-right">--</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Pro Tip</h3>
            <p className="text-blue-700 text-sm">
              Keep your account secure by using a strong password and enabling two-factor authentication.
              Never share your login credentials with anyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;