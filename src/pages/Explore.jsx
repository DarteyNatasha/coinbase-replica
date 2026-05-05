import { useMemo, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CryptoTable from '../components/crypto/CryptoTable';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const Explore = () => {
    const [search, setSearch] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [cryptos, setCryptos] = useState([]);
    const [gainers, setGainers] = useState([]);
    const [newListings, setNewListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [addLoading, setAddLoading] = useState(false);
    const [addMessage, setAddMessage] = useState('');
    const [newCrypto, setNewCrypto] = useState({
        name: '',
        symbol: '',
        price: '',
        image: '',
        change24h: '',
        marketCap: '',
        volume24h: ''
    });
    
    const { user } = useAuth();
    // Anyone can add crypto if logged in
    const canAddCrypto = !!user;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [allData, gainersData, newData] = await Promise.all([
                api.getAllCryptocurrencies(1, 100),
                api.getTopGainers(20),
                api.getNewListings(20)
            ]);
            
            if (allData.success) setCryptos(allData.data);
            if (gainersData.success) setGainers(gainersData.data);
            if (newData.success) setNewListings(newData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddCrypto = async (e) => {
        e.preventDefault();
        setAddLoading(true);
        setAddMessage('');
        
        // Validate required fields
        if (!newCrypto.name || !newCrypto.symbol || !newCrypto.price || !newCrypto.image || !newCrypto.change24h) {
            setAddMessage({ type: 'error', text: 'Please fill in all required fields (*)' });
            setAddLoading(false);
            return;
        }

        try {
            const data = await api.addCryptocurrency({
                name: newCrypto.name,
                symbol: newCrypto.symbol,
                price: parseFloat(newCrypto.price),
                image: newCrypto.image,
                change24h: parseFloat(newCrypto.change24h),
                marketCap: newCrypto.marketCap ? parseFloat(newCrypto.marketCap) : 0,
                volume24h: newCrypto.volume24h ? parseFloat(newCrypto.volume24h) : 0
            });
            
            if (data.success) {
                setAddMessage({ type: 'success', text: '✓ Cryptocurrency added successfully!' });
                // Reset form
                setNewCrypto({
                    name: '',
                    symbol: '',
                    price: '',
                    image: '',
                    change24h: '',
                    marketCap: '',
                    volume24h: ''
                });
                // Refresh data
                await fetchData();
                // Close form after 2 seconds
                setTimeout(() => {
                    setShowAddForm(false);
                    setAddMessage('');
                }, 2000);
            }
        } catch (error) {
            console.error('Add crypto error:', error);
            setAddMessage({ type: 'error', text: error.message || 'Failed to add cryptocurrency' });
        } finally {
            setAddLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setNewCrypto({
            ...newCrypto,
            [e.target.name]: e.target.value
        });
    };

    const getDisplayData = () => {
        let base = [];
        
        if (selectedFilter === 'gainers') {
            base = [...gainers];
        } else if (selectedFilter === 'losers') {
            base = [...cryptos].filter(coin => coin.change24h < 0).sort((a, b) => a.change24h - b.change24h);
        } else {
            base = [...cryptos];
        }

        if (!search.trim()) {
            return base;
        }

        const query = search.toLowerCase();
        return base.filter(
            (coin) => coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query)
        );
    };

    const displayData = getDisplayData();

    if (loading && cryptos.length === 0) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="cb-reveal mx-auto max-w-[1180px] px-6 py-12" style={{ '--reveal-delay': '40ms' }}>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[#0a0b0d]">Explore crypto prices</h1>
                    <p className="mt-2 text-[#5b616e]">Track top cryptocurrencies by market cap and daily performance.</p>
                </div>
                {canAddCrypto && (
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        {showAddForm ? 'Cancel' : '+ Add New Crypto'}
                    </button>
                )}
            </div>

            {/* Add Cryptocurrency Form - Shows for ANY logged-in user */}
            {showAddForm && canAddCrypto && (
                <div className="mb-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Cryptocurrency</h2>
                    <form onSubmit={handleAddCrypto} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newCrypto.name}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Bitcoin"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Symbol *
                                </label>
                                <input
                                    type="text"
                                    name="symbol"
                                    value={newCrypto.symbol}
                                    onChange={handleInputChange}
                                    placeholder="e.g., BTC"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Price (USD) *
                                </label>
                                <input
                                    type="number"
                                    step="0.00000001"
                                    name="price"
                                    value={newCrypto.price}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 43250.75"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    24h Change (%) *
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    name="change24h"
                                    value={newCrypto.change24h}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 2.5 or -1.2"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Image URL *
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    value={newCrypto.image}
                                    onChange={handleInputChange}
                                    placeholder="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Market Cap (optional)
                                </label>
                                <input
                                    type="number"
                                    name="marketCap"
                                    value={newCrypto.marketCap}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 845000000000"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    24h Volume (optional)
                                </label>
                                <input
                                    type="number"
                                    name="volume24h"
                                    value={newCrypto.volume24h}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 28500000000"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        
                        {addMessage && (
                            <div className={`p-3 rounded-lg ${
                                addMessage.type === 'success' 
                                    ? 'bg-green-100 text-green-700 border border-green-300' 
                                    : 'bg-red-100 text-red-700 border border-red-300'
                            }`}>
                                {addMessage.text}
                            </div>
                        )}
                        
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                disabled={addLoading}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                            >
                                {addLoading ? 'Adding...' : 'Add Cryptocurrency'}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAddForm(false);
                                    setAddMessage('');
                                    setNewCrypto({
                                        name: '',
                                        symbol: '',
                                        price: '',
                                        image: '',
                                        change24h: '',
                                        marketCap: '',
                                        volume24h: ''
                                    });
                                }}
                                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Search and Filters */}
            <div className="mb-6 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <input
                    type="search"
                    placeholder="Search by asset name or symbol"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:border-[#0052ff] focus:outline-none focus:ring-1 focus:ring-[#0052ff] sm:max-w-sm"
                />
                <div className="flex flex-wrap gap-2">
                    {[
                        { value: 'all', label: 'All assets' },
                        { value: 'gainers', label: 'Top gainers' },
                        { value: 'losers', label: 'Top losers' }
                    ].map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setSelectedFilter(filter.value)}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                                selectedFilter === filter.value
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-[#4a5260] hover:bg-gray-200'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Crypto Table */}
            <div className="cb-hover-rise overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <CryptoTable data={displayData} />
            </div>

            {/* Show login prompt if not logged in */}
            {!user && (
                <div className="mt-8 text-center p-6 bg-blue-50 rounded-xl">
                    <p className="text-gray-700">
                        🔒 <Link to="/signin" className="text-blue-600 hover:underline font-semibold">Sign in</Link> to add new cryptocurrencies!
                    </p>
                </div>
            )}
        </div>
    );
};

export default Explore;