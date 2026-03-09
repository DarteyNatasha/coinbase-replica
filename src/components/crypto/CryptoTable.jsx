import CryptoRow from './CryptoRow';
import { cryptoData } from '../../data/mockData';

const CryptoTable = ({ limit, data }) => {
    const displayData = data || (limit ? cryptoData.slice(0, limit) : cryptoData);

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="border-b border-gray-200 text-sm text-gray-500">
                        <th className="py-4 font-normal">Name</th>
                        <th className="py-4 text-right font-normal">Price</th>
                        <th className="py-4 text-right font-normal">Change</th>
                        <th className="hidden py-4 text-right font-normal md:table-cell">Market cap</th>
                        <th className="min-w-[100px] py-4 text-right font-normal">Trade</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData.map((coin) => (
                        <CryptoRow key={coin.id} coin={coin} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
