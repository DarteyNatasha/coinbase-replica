import { Link } from 'react-router-dom';

const CryptoRow = ({ coin }) => {
    const isPositive = coin.change24h >= 0;

    const formatPrice = (price) => {
        return price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const formatMarketCap = (marketCap) => {
        if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
        if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
        return `$${marketCap.toLocaleString()}`;
    };

    return (
        <tr className="group border-b border-gray-100 transition-colors hover:bg-gray-50">
            <td className="py-4">
                <Link to={`/assets/${coin._id}`} className="flex items-center gap-4">
                    <img src={coin.image} alt={coin.name} className="h-8 w-8 rounded-full" />
                    <div>
                        <div className="font-bold capitalize">{coin.name}</div>
                        <div className="text-sm text-gray-500 uppercase">{coin.symbol}</div>
                    </div>
                </Link>
            </td>
            <td className="py-4 text-right font-semibold">
                ${formatPrice(coin.price)}
            </td>
            <td className={`py-4 text-right font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                {isPositive ? '+' : ''}{coin.change24h}%
            </td>
            <td className="hidden py-4 text-right text-gray-500 md:table-cell">{formatMarketCap(coin.marketCap)}</td>
            <td className="py-4 text-right">
                <Link
                    to="/signup"
                    className="whitespace-nowrap rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white opacity-100 transition-opacity hover:bg-blue-700 md:opacity-0 md:group-hover:opacity-100"
                >
                    Buy
                </Link>
            </td>
        </tr>
    );
};

export default CryptoRow;