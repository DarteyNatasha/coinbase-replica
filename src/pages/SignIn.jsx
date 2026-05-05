import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle } from 'react-icons/fa6';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message || 'Invalid email or password');
    }
    
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#070b13] text-white">
      <div className="px-5 pt-4">
        <svg width={36} height={36} viewBox="0 0 58 58" aria-label="Coinbase logo">
          <circle cx="29" cy="29" r="25" fill="#ffffff" />
          <circle cx="29" cy="29" r="13" fill="#05070d" />
          <rect x="29" y="24" width="15" height="10" fill="#05070d" />
        </svg>
      </div>
      <div className="mx-auto flex w-full max-w-[520px] flex-1 flex-col justify-center px-6 py-12">
        <h1 className="mb-8 text-5xl font-semibold tracking-tight">Sign in to Coinbase</h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/50 p-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
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
              placeholder="Your password"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full rounded-full bg-[#34518a] py-4 text-[20px] font-semibold text-[#0a0f1d] transition hover:bg-[#4063a4] disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Continue'}
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
            <span className="mx-auto">Sign in with Google</span>
          </button>
          <button type="button" className="flex w-full items-center gap-3 rounded-full bg-[#2a303b] px-5 py-4 text-[16px] font-semibold text-white hover:bg-[#353c49]">
            <FaApple className="h-5 w-5" />
            <span className="mx-auto">Sign in with Apple</span>
          </button>
        </div>

        <div className="mt-10 text-center text-[18px] font-semibold">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-[#3f7dff] hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;