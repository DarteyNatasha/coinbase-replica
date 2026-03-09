import { Link, useNavigate } from 'react-router-dom';
import { cryptoData, learnData } from '../data/mockData';
import heroImage from '../assets/crypto/images/Hero__4_.avif';
import advancedImage from '../assets/crypto/images/Advanced.avif';
import zeroFeesImage from '../assets/crypto/images/zero_fees_us.avif';
import baseAppImage from '../assets/crypto/images/CB_LOLP__1_.avif';
import learnCardOne from '../assets/crypto/images/0_4mVyVaU6yLa--GR_.avif';
import learnCardTwo from '../assets/crypto/images/Replace_Bank.avif';
import learnCardThree from '../assets/crypto/images/Learn_Illustration_Ultimate_Guide_Bitcoin.avif';
import takeControlImage from '../assets/crypto/images/image.avif';

const homeLearnImages = [learnCardOne, learnCardTwo, learnCardThree];

const Home = () => {
  const navigate = useNavigate();

  const handleHeroSubmit = (event) => {
    event.preventDefault();
    navigate('/signup');
  };

  return (
    <div className="pb-24">
      <section className="cb-reveal mx-auto flex max-w-[1180px] flex-col items-center gap-14 px-6 py-16 lg:flex-row lg:py-24" style={{ '--reveal-delay': '40ms' }}>
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0a0b0d] md:text-6xl">
            The future of finance is here.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#2f3747] md:text-xl">
            We are the most trusted place for people and businesses to buy, sell, and use crypto.
          </p>
          <form onSubmit={handleHeroSubmit} className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              required
              placeholder="satoshi@nakamoto.com"
              className="w-full rounded-md border border-gray-300 px-5 py-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-[#0052ff] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#0045d8]"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={heroImage} alt="Coinbase app hero" className="mx-auto w-full max-w-xl" />
          <p className="mt-4 text-sm text-[#6b7280]">Stocks and prediction markets not available in your jurisdiction.</p>
        </div>
      </section>

      <section className="cb-reveal mx-auto grid max-w-[1180px] gap-10 px-6 py-10 lg:grid-cols-2 lg:py-20" style={{ '--reveal-delay': '80ms' }}>
        <div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#0a0b0d]">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>
          <p className="mt-4 text-lg text-[#58667e]">
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
          </p>
          <Link to="/explore" className="mt-6 inline-block rounded-full bg-[#0a0b0d] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-black">
            See more assets
          </Link>
        </div>

        <div className="cb-hover-rise rounded-3xl bg-[#111] p-6 text-white shadow-2xl">
          <div className="mb-5 flex items-center justify-between border-b border-gray-800 pb-4 text-sm text-gray-400">
            <div className="flex items-center gap-4 text-xs uppercase tracking-wider">
              <span className="font-semibold text-white">Tradable</span>
              <span>Top gainers</span>
              <span>New on Coinbase</span>
            </div>
            <Link to="/explore" className="text-blue-400 hover:text-blue-300">View all</Link>
          </div>
          <div className="space-y-1">
            {cryptoData
              .slice()
              .sort((a, b) => b.change - a.change)
              .slice(0, 5)
              .map((coin) => (
                <Link
                  key={coin.id}
                  to={`/assets/${coin.id}`}
                  className="flex items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    {coin.image ? (
                      <img src={coin.image} alt={coin.name} className="h-8 w-8 rounded-full" />
                    ) : (
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${coin.color} text-xs font-bold`}>
                        {coin.symbol[0]}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">{coin.name}</p>
                      <p className="text-xs text-gray-400">{coin.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${coin.price.toLocaleString()}</p>
                    <p className={`text-sm font-semibold ${coin.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {coin.change >= 0 ? '+' : ''}
                      {coin.change}%
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="cb-reveal mx-auto grid max-w-[1180px] items-center gap-12 px-6 py-16 lg:grid-cols-2" style={{ '--reveal-delay': '120ms' }}>
        <img src={advancedImage} alt="Advanced trading tools" className="cb-hover-rise w-full rounded-3xl border border-gray-100 shadow-lg" />
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-[#0a0b0d]">Powerful tools, designed for the advanced trader.</h2>
          <p className="mt-4 text-lg text-[#58667e]">
            Real-time charts, deeper liquidity, and pro-level order tools, all backed by Coinbase security.
          </p>
          <Link to="/signup" className="mt-6 inline-block rounded-full bg-[#0a0b0d] px-6 py-3 text-sm font-bold text-white hover:bg-black">
            Start trading
          </Link>
        </div>
      </section>

      <section className="cb-reveal mx-auto grid max-w-[1180px] items-center gap-12 border-t border-gray-100 px-6 py-16 lg:grid-cols-2" style={{ '--reveal-delay': '150ms' }}>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Coinbase One</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0b0d]">Zero trading fees, more rewards.</h2>
          <p className="mt-4 text-lg text-[#58667e]">
            Get more out of crypto with one membership: zero trading fees, boosted rewards, and priority support.
          </p>
          <Link to="/signup" className="mt-6 inline-block rounded-full bg-[#0a0b0d] px-6 py-3 text-sm font-bold text-white hover:bg-black">
            Claim free trial
          </Link>
        </div>
        <img src={zeroFeesImage} alt="Coinbase One membership" className="cb-hover-rise mx-auto w-full max-w-md" />
      </section>

      <section className="cb-reveal mx-auto grid max-w-[1180px] items-center gap-12 px-6 py-16 lg:grid-cols-2" style={{ '--reveal-delay': '180ms' }}>
        <img src={baseAppImage} alt="Base app" className="cb-hover-rise mx-auto w-full max-w-sm rounded-[36px] border border-gray-100 shadow-lg" />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Base App</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0a0b0d]">Countless ways to earn crypto with the Base App.</h2>
          <p className="mt-4 text-lg text-[#58667e]">
            Discover, trade, and chat in one onchain app built for creators and everyday users.
          </p>
          <Link to="/learn" className="mt-6 inline-block rounded-full bg-[#0a0b0d] px-6 py-3 text-sm font-bold text-white hover:bg-black">
            Learn more
          </Link>
        </div>
      </section>

      <section className="cb-reveal border-t border-gray-100 bg-gray-50 py-20" style={{ '--reveal-delay': '220ms' }}>
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md text-4xl font-bold tracking-tight text-[#0a0b0d]">
              New to crypto? Learn some crypto basics
            </h2>
            <Link to="/learn" className="rounded-full bg-[#0a0b0d] px-6 py-3 text-sm font-bold text-white hover:bg-black">
              Read more
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {learnData.map((article, index) => (
              <Link
                to="/learn"
                key={article.id}
                className="group cb-hover-rise overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg"
              >
                <img
                  src={homeLearnImages[index]}
                  alt={article.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{article.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#0a0b0d]">{article.title}</h3>
                  <p className="mt-3 text-sm text-[#58667e]">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-reveal bg-[#f5f7fa] py-20" style={{ '--reveal-delay': '260ms' }}>
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-6xl font-bold leading-[1.02] tracking-tight text-[#0a0b0d] sm:text-7xl">Take control of your money</h2>
            <p className="mt-4 max-w-xl text-lg text-[#5b616e]">Start your portfolio today and discover crypto.</p>
            <form onSubmit={handleHeroSubmit} className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="satoshi@nakamoto.com"
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#0052ff] focus:outline-none focus:ring-1 focus:ring-[#0052ff]"
              />
              <button type="submit" className="rounded-full bg-[#0052ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0046d5]">
                Sign up
              </button>
            </form>
          </div>
          <img src={takeControlImage} alt="Crypto circular visual" className="mx-auto w-full max-w-md" />
        </div>

        <div className="mx-auto mt-16 max-w-[1180px] px-6 text-center text-[11px] text-[#7a8190]">
          <p>Coinbase Bermuda is licensed to conduct digital asset business by the Bermuda Monetary Authority.</p>
          <p className="mx-auto mt-2 max-w-4xl">
            Products and features may not be available in all regions. Information is for informational purposes only,
            and is not intended to provide accounting, legal, or tax advice, or investment recommendations. Trading
            cryptocurrency comes with risk.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
