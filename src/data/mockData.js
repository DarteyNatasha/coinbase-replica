import bitcoinIcon from '../assets/bitcoin.png';
import ethereumIcon from '../assets/ethereum.png';
import tetherIcon from '../assets/tether.png';
import solanaIcon from '../assets/solana.png';
import rippleIcon from '../assets/ripple.png';

export const cryptoData = [
    {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 68325.41,
        change: 2.84,
        marketCap: '$1.34T',
        volume: '$29.8B',
        circulatingSupply: '19.64M BTC',
        color: 'bg-orange-500',
        image: bitcoinIcon,
    },
    {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        price: 3712.2,
        change: 1.26,
        marketCap: '$446.2B',
        volume: '$16.1B',
        circulatingSupply: '120.2M ETH',
        color: 'bg-indigo-500',
        image: ethereumIcon,
    },
    {
        id: 'solana',
        name: 'Solana',
        symbol: 'SOL',
        price: 161.73,
        change: 4.12,
        marketCap: '$75.6B',
        volume: '$4.7B',
        circulatingSupply: '467.5M SOL',
        color: 'bg-violet-500',
        image: solanaIcon,
    },
    {
        id: 'xrp',
        name: 'XRP',
        symbol: 'XRP',
        price: 0.63,
        change: -1.53,
        marketCap: '$35.1B',
        volume: '$2.2B',
        circulatingSupply: '55.8B XRP',
        color: 'bg-slate-800',
        image: rippleIcon,
    },
    {
        id: 'tether',
        name: 'Tether',
        symbol: 'USDT',
        price: 1,
        change: 0.01,
        marketCap: '$108.4B',
        volume: '$45.3B',
        circulatingSupply: '108.3B USDT',
        color: 'bg-emerald-500',
        image: tetherIcon,
    },
    {
        id: 'cardano',
        name: 'Cardano',
        symbol: 'ADA',
        price: 0.72,
        change: -0.88,
        marketCap: '$25.4B',
        volume: '$721M',
        circulatingSupply: '35.2B ADA',
        color: 'bg-blue-600',
    },
    {
        id: 'avalanche',
        name: 'Avalanche',
        symbol: 'AVAX',
        price: 37.34,
        change: 3.45,
        marketCap: '$14.2B',
        volume: '$644M',
        circulatingSupply: '379.2M AVAX',
        color: 'bg-red-500',
    },
    {
        id: 'dogecoin',
        name: 'Dogecoin',
        symbol: 'DOGE',
        price: 0.19,
        change: -2.05,
        marketCap: '$27.5B',
        volume: '$1.1B',
        circulatingSupply: '144.1B DOGE',
        color: 'bg-yellow-500',
    },
];

export const learnData = [
    {
        id: 1,
        title: 'USDC: The digital dollar for the global crypto economy',
        category: 'Stablecoins',
        description:
            'Why dollar-backed stablecoins are a key building block for open finance.',
    },
    {
        id: 2,
        title: 'Can crypto really replace your bank account?',
        category: 'Crypto basics',
        description: 'A practical look at payments, savings, and onchain wallets.',
    },
    {
        id: 3,
        title: 'When is the best time to invest in crypto?',
        category: 'Investing 101',
        description:
            'What volatility means for beginners and how to build a long-term plan.',
    },
];
