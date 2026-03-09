import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft as ArrowLeft } from 'react-icons/fi';
import { cryptoData } from '../data/mockData';

const AssetDetail = () => {
    const { id } = useParams();
    const coin = cryptoData.find((item) => item.id === id) || {
        id,
        name: id,
        symbol: String(id || '---').toUpperCase(),
        price: 0,
        change: 0,
        marketCap: '$0',
        volume: '$0',
        circulatingSupply: 'N/A',
        color: 'bg-blue-600',
    };

    const isPositive = coin.change >= 0;

    return (
        <div className="cb-reveal mx-auto max-w-7xl px-6 py-12" style={{ '--reveal-delay': '40ms' }}>
            <Link to="/explore" className="mb-6 inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to assets
            </Link>

            <div className="flex flex-col gap-12 lg:flex-row">
                <div className="lg:w-2/3">
                    <div className="mb-6 flex items-center gap-4">
                        {coin.image ? (
                            <img src={coin.image} alt={coin.name} className="h-12 w-12 rounded-full" />
                        ) : (
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${coin.color} text-xl font-bold text-white`}>
                                {coin.symbol[0]}
                            </div>
                        )}
                        <div>
                            <h1 className="text-4xl font-bold capitalize">{coin.name}</h1>
                            <p className="font-semibold text-gray-500">{coin.symbol}</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="mb-2 text-4xl font-bold text-gray-900">
                            ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p className={`font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                            {isPositive ? '+' : ''}
                            {coin.change}% (1d)
                        </p>
                    </div>

                    <div className="relative mb-12 h-64 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 md:h-96">
                        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0,80 Q25,40 50,70 T100,20 L100,100 L0,100 Z" fill={isPositive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'} />
                            <path d="M0,80 Q25,40 50,70 T100,20" fill="none" stroke={isPositive ? '#22c55e' : '#ef4444'} strokeWidth="2" />
                        </svg>
                    </div>

                    <div>
                        <h2 className="mb-6 text-2xl font-bold">Market stats</h2>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            <div>
                                <p className="mb-1 text-sm text-gray-500">Market cap</p>
                                <p className="text-lg font-semibold">{coin.marketCap}</p>
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-gray-500">Volume (24h)</p>
                                <p className="text-lg font-semibold">{coin.volume}</p>
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-gray-500">Circulating supply</p>
                                <p className="text-lg font-semibold">{coin.circulatingSupply}</p>
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-gray-500">Popularity</p>
                                <p className="text-lg font-semibold">#{cryptoData.findIndex((item) => item.id === coin.id) + 1 || '--'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3">
                      <div className="cb-hover-rise sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-6 text-xl font-bold">Buy {coin.symbol}</h3>
                        <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-300 p-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                            <div className="flex flex-1 flex-col">
                                <span className="mb-1 text-xs font-semibold text-gray-500">Buy</span>
                                <input type="text" placeholder="0" className="w-full text-2xl font-bold focus:outline-none" />
                            </div>
                            <div className="font-bold text-gray-700">USD</div>
                        </div>
                        <Link to="/signup" className="block w-full rounded-full bg-blue-600 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-blue-700">
                            Buy {coin.name}
                        </Link>
                        <p className="mt-4 text-center text-xs text-gray-400">Requires Coinbase account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetDetail;
