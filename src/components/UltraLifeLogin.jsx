import React, { useState } from 'react';
import { Calendar, User, Lock, LogOut } from 'lucide-react';

export default function UltraLifeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loggedInMember, setLoggedInMember] = useState(null);

  // Sample member data from Airtable (for demonstration)
  // In production, this would be fetched from your Airtable database
  const sampleMembers = [
    { name: 'Aaron Royston', email: 'aaron.royston@ultralife.com', password: 'AaronR2024!' },
    { name: 'Aleem Tejani', email: 'aleem.tejani@ultralife.com', password: 'AleemT$2024' },
    { name: 'Carlos Malatesta', email: 'carlos.malatesta@ultralife.com', password: 'CarlosM#2024' },
    { name: 'Sarah Douglass', email: 'sarah.douglass@ultralife.com', password: 'SarahD2024!' },
    { name: 'Talor Zamir', email: 'talor.zamir@ultralife.com', password: 'TalorZ2024!' }
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      // Find member with matching email
      const member = sampleMembers.find(m => m.email.toLowerCase() === email.toLowerCase());

      if (member && member.password === password) {
        setLoggedInMember({
          name: member.name,
          email: member.email
        });
        setError('');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setLoggedInMember(null);
    setEmail('');
    setPassword('');
    setError('');
  };

  if (loggedInMember) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-600 text-lg">
              You're successfully logged in
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-100">
              <User className="w-5 h-5 text-emerald-600 mr-3" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Name</p>
                <p className="text-gray-900 font-semibold">{loggedInMember.name}</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-100">
              <Lock className="w-5 h-5 text-teal-600 mr-3" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <p className="text-gray-900 font-semibold">{loggedInMember.email}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 animate-pulse">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            UltraLife
          </h1>
          <p className="text-gray-600">
            Member Login Portal
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="your.email@ultralife.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 mb-3">
            Secure login powered by Airtable
          </p>
          <details className="text-left">
            <summary className="text-xs text-purple-600 font-semibold cursor-pointer hover:text-purple-700">
              View Sample Credentials for Testing
            </summary>
            <div className="mt-3 p-4 bg-purple-50 rounded-lg text-xs space-y-2">
              <p className="font-semibold text-purple-900 mb-2">Test with these accounts:</p>
              <div className="space-y-1 text-gray-700">
                <p><strong>Email:</strong> aaron.royston@ultralife.com</p>
                <p><strong>Password:</strong> AaronR2024!</p>
                <hr className="my-2 border-purple-200"/>
                <p><strong>Email:</strong> sarah.douglass@ultralife.com</p>
                <p><strong>Password:</strong> SarahD2024!</p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
