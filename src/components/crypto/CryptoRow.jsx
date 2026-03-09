import { Link } from 'react-router-dom';

const CryptoRow = ({ coin }) => {
    const isPositive = coin.change >= 0;

    return (
        <tr className="group border-b border-gray-100 transition-colors hover:bg-gray-50">
            <td className="py-4">
                <Link to={`/assets/${coin.id}`} className="flex items-center gap-4">
                    {coin.image ? (
                        <img src={coin.image} alt={coin.name} className="h-8 w-8 rounded-full" />
                    ) : (
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${coin.color || 'bg-blue-600'} text-xs font-bold text-white`}
                        >
                            {coin.symbol[0]}
                        </div>
                    )}
                    <div>
                        <div className="font-bold">{coin.name}</div>
                        <div className="text-sm text-gray-500">{coin.symbol}</div>
                    </div>
                </Link>
            </td>
            <td className="py-4 text-right font-semibold">
                ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
            <td className={`py-4 text-right font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                {isPositive ? '+' : ''}
                {coin.change}%
            </td>
            <td className="hidden py-4 text-right text-gray-500 md:table-cell">{coin.marketCap}</td>
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
