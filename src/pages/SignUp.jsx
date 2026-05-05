import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle } from 'react-icons/fa6';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setLoading(true);
    const result = await register(name, email, password);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message || 'Registration failed');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-white">
      <div className="px-5 pt-4">
        <svg width={36} height={36} viewBox="0 0 58 58" aria-label="Coinbase logo">
          <circle cx="29" cy="29" r="25" fill="#ffffff" />
          <circle cx="29" cy="29" r="13" fill="#05070d" />
          <rect x="29" y="24" width="15" height="10" fill="#05070d" />
        </svg>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[470px] px-6">
        <h1 className="text-5xl font-semibold tracking-tight">Create your account</h1>
        <p className="mt-4 max-w-md text-[18px] text-[#8f9ab0]">Access all that Coinbase has to offer with a single account.</p>

        {error && (
          <div className="mt-4 rounded-lg bg-red-500/10 border border-red-500/50 p-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="mb-2 block text-[16px] font-semibold text-[#dbe3f7]">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#3a4252] bg-transparent px-5 py-4 text-[20px] text-white placeholder:text-[#7c8596] focus:border-[#5c8cff] focus:outline-none"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-[16px] font-semibold text-[#dbe3f7]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#3a4252] bg-transparent px-5 py-4 text-[20px] text-white placeholder:text-[#7c8596] focus:border-[#5c8cff] focus:outline-none"
              placeholder="Your email address"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-[16px] font-semibold text-[#dbe3f7]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[#3a4252] bg-transparent px-5 py-4 text-[20px] text-white placeholder:text-[#7c8596] focus:border-[#5c8cff] focus:outline-none"
              placeholder="At least 6 characters"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full rounded-full bg-[#34518a] py-4 text-[20px] font-semibold text-[#0a0f1d] transition hover:bg-[#4063a4] disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Continue'}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4 text-sm text-[#8b95ab]">
          <span className="h-px flex-1 bg-[#273043]" />
          <span>OR</span>
          <span className="h-px flex-1 bg-[#273043]" />
        </div>

        <div className="space-y-3">
          <button type="button" className="flex w-full items-center gap-3 rounded-full bg-[#2a303b] px-5 py-4 text-[16px] font-semibold text-white hover:bg-[#353c49]">
            <FaGoogle className="h-5 w-5" />
            <span className="mx-auto">Sign up with Google</span>
          </button>
          <button type="button" className="flex w-full items-center gap-3 rounded-full bg-[#2a303b] px-5 py-4 text-[16px] font-semibold text-white hover:bg-[#353c49]">
            <FaApple className="h-5 w-5" />
            <span className="mx-auto">Sign up with Apple</span>
          </button>
        </div>

        <div className="mt-10 text-center text-[18px] font-semibold">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-[#3f7dff] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;