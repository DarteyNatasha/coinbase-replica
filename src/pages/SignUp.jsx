import { useEffect, useState } from 'react';
import { FiCheck, FiCode, FiUser, FiUsers } from 'react-icons/fi';
import { FaApple, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const WhiteCoinbaseMark = ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 58 58" aria-label="Coinbase logo">
        <circle cx="29" cy="29" r="25" fill="#ffffff" />
        <circle cx="29" cy="29" r="13" fill="#05070d" />
        <rect x="29" y="24" width="15" height="10" fill="#05070d" />
    </svg>
);

const SignUp = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [selectedType, setSelectedType] = useState('personal');
    const [showEmailStep, setShowEmailStep] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleContinue = (event) => {
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

    const accountTypes = [
        {
            key: 'personal',
            label: 'Personal',
            description: 'Trade crypto as an individual.',
            icon: FiUser,
        },
        {
            key: 'business',
            label: 'Business',
            description: 'Manage teams and portfolios, accept crypto payments, access APIs, and more',
            icon: FiUsers,
        },
        {
            key: 'developer',
            label: 'Developer',
            description: 'Build onchain using developer tooling.',
            icon: FiCode,
        },
    ];

    return (
        <div className="min-h-screen bg-[#070b13] text-white">
            <div className="px-5 pt-4">
                <WhiteCoinbaseMark size={36} />
            </div>

            {!showEmailStep ? (
                <div className="mx-auto mt-20 w-full max-w-[520px] px-6">
                    <h1 className="text-5xl font-semibold leading-tight tracking-tight">What kind of account are you creating?</h1>

                    <div className="mt-8 space-y-4">
                        {accountTypes.map((type) => {
                            const Icon = type.icon;
                            const isSelected = selectedType === type.key;

                            return (
                                <button
                                    key={type.key}
                                    type="button"
                                    onClick={() => {
                                        setSelectedType(type.key);
                                        setShowEmailStep(true);
                                    }}
                                    className={`w-full rounded-xl border p-5 text-left transition-colors ${
                                        isSelected
                                            ? 'border-[#2f3f5f] bg-[#111722]'
                                            : 'border-[#1f2937] bg-[#090e18] hover:border-[#31405d]'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#1e2634] text-[#77a4ff]">
                                            <Icon className="h-7 w-7" />
                                            {isSelected ? (
                                                <span className="absolute -bottom-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#263244] bg-[#0c111b] text-white">
                                                    <FiCheck className="h-4 w-4" />
                                                </span>
                                            ) : null}
                                        </div>
                                        <div>
                                            <p className="text-[20px] font-semibold text-white">{type.label}</p>
                                            <p className="mt-1 text-[14px] text-[#98a5bc]">{type.description}</p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="mx-auto mt-16 w-full max-w-[470px] px-6">
                    <h1 className="text-5xl font-semibold tracking-tight">Create your account</h1>
                    <p className="mt-4 max-w-md text-[18px] text-[#8f9ab0]">Access all that Coinbase has to offer with a single account.</p>

                    <form className="mt-8 space-y-4" onSubmit={handleContinue} noValidate>
                        <div>
                            <label className="mb-2 block text-[16px] font-semibold text-[#dbe3f7]">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full rounded-xl border border-[#3a4252] bg-transparent px-5 py-4 text-[20px] text-white placeholder:text-[#7c8596] focus:border-[#5c8cff] focus:outline-none"
                                placeholder="Your email address"
                            />
                            {submitted && !isEmailValid ? <p className="mt-2 text-sm text-red-400">Please enter a valid email address.</p> : null}
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

                    <p className="mt-8 text-center text-[14px] text-[#8fa1bf]">
                        By creating an account you certify that you are over the age of 18 and agree to our{' '}
                        <a href="#" className="text-[#9db3d6] underline decoration-[#9db3d6]/70 underline-offset-2 hover:text-white">
                            Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-[#9db3d6] underline decoration-[#9db3d6]/70 underline-offset-2 hover:text-white">
                            Cookie Policy
                        </a>
                        .
                    </p>
                </div>
            )}
        </div>
    );
};

export default SignUp;
