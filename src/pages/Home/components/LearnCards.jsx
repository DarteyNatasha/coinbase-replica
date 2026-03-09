import { Link } from "react-router-dom";

export default function LearnCards() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Explore more crypto */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/7IRLnEVVAZdnfhzq2Q1V61/5e13a5d282289bfc4ae6bb79632a4884/earn_and_learn.webp?fm=webp&w=1180&h=512&q=75"
            alt="Explore more crypto"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Explore more crypto</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Browse real-time prices, charts, and daily movers for thousands of
              cryptocurrencies, all in one place.
            </p>
            <Link
              to="/explore"
              className="inline-block mt-4 text-blue-600 text-sm font-semibold hover:underline"
            >
              Explore more crypto →
            </Link>
          </div>
        </div>

        {/* Learn the basics */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/1i5oeGUlUsp4XBuybcg4ra/f8dd0d698eaa34c982b0323a2b85e754/image.png?fm=webp&w=1310&h=665&q=75"
            alt="Learn the basics"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Learn the basics</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Explore beginner guides, practical tutorials, and market updates
              on Bitcoin, Ethereum and more.
            </p>
            <Link
              to="/learn"
              className="inline-block mt-4 text-blue-600 text-sm font-semibold hover:underline"
            >
              Learn the basics →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
