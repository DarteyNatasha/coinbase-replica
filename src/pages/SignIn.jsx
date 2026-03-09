import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaApple, FaGoogle } from 'react-icons/fa6';
import { FiUserPlus } from 'react-icons/fi';

const WhiteCoinbaseMark = ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 58 58" aria-label="Coinbase logo">
        <circle cx="29" cy="29" r="25" fill="#ffffff" />
        <circle cx="29" cy="29" r="13" fill="#05070d" />
        <rect x="29" y="24" width="15" height="10" fill="#05070d" />
    </svg>
);

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const isEmailValid = /\S+@\S+\.\S+/.test(email);

    if (showSplash) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#05070d]">
                <WhiteCoinbaseMark size={58} />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-[#070b13] text-white">
            <div className="px-5 pt-4">
                <WhiteCoinbaseMark size={36} />
            </div>
            <div className="mx-auto flex w-full max-w-[520px] flex-1 flex-col justify-center px-6 py-12">
                <h1 className="mb-8 text-5xl font-semibold tracking-tight">Sign in to Coinbase</h1>

                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div>
                        <label className="mb-2 block text-[16px] font-semibold text-[#dbe3f7]">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full rounded-xl border border-[#3a4252] bg-transparent px-5 py-4 text-[20px] text-white placeholder:text-[#7c8596] focus:border-[#5c8cff] focus:outline-none"
                            placeholder="Your email address"
                        />
                        {submitted && !isEmailValid ? (
                            <p className="mt-2 text-sm text-red-400">Please enter a valid email address.</p>
                        ) : null}
                    </div>

                    <button type="submit" className="w-full rounded-full bg-[#34518a] py-4 text-[20px] font-semibold text-[#0a0f1d] transition hover:bg-[#4063a4]">
                        Continue
                    </button>
                </form>

                <div className="my-6 flex items-center gap-4 text-sm text-[#8b95ab]">
                    <span className="h-px flex-1 bg-[#273043]" />
                    <span>OR</span>
                    <span className="h-px flex-1 bg-[#273043]" />
                </div>

                <div className="space-y-3">
                    <button type="button" className="flex w-full items-center gap-3 rounded-full bg-[#2a303b] px-5 py-4 text-[16px] font-semibold text-white hover:bg-[#353c49]">
                        <FiUserPlus className="h-5 w-5" />
                        <span className="mx-auto">Sign in with Passkey</span>
                    </button>
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
                    <span>Don’t have an account? </span>
                    <Link to="/signup" className="text-[#3f7dff] hover:underline">
                        Sign up
                    </Link>
                </div>

                <p className="mt-6 text-center text-[14px] text-[#8fa1bf]">
                    Not your device? Use a private window. See our{' '}
                    <a href="#" className="text-[#9db3d6] underline decoration-[#9db3d6]/70 underline-offset-2 hover:text-white">
                        Privacy Policy
                    </a>{' '}
                    for more info.
                </p>
            </div>

            <div className="border-t border-[#1f2937] bg-[#111624] px-6 py-5">
                <div className="mx-auto flex w-full max-w-[980px] flex-col items-start justify-between gap-4 text-[#dbe3f7] md:flex-row md:items-center">
                    <p className="max-w-3xl text-sm text-[#dbe3f7]">
                        We use strictly necessary cookies to enable essential functions, such as security and authentication.
                        For more information, see our <a href="#" className="text-[#3f7dff] hover:underline">Cookie Policy</a>.
                    </p>
                    <button type="button" className="rounded-full bg-[#5a89ff] px-8 py-3 text-lg font-semibold text-[#0d1b3d] hover:bg-[#6f99ff]">
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
