import { useState } from "react";
import { Link } from "react-router-dom";

const cryptoAssets = [
  {
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
    price: "$68,002.60",
    change: -1.47,
    mktCap: "$1.4T",
    volume: "$28.1B",
    sparkline:
      "M0,15 L5,16 L10,14 L15,17 L20,13 L25,16 L30,12 L35,15 L40,11 L45,14 L50,10",
    link: "/price/bitcoin",
    tradable: true,
  },
  {
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
    price: "$1,985.21",
    change: -0.56,
    mktCap: "$239.5B",
    volume: "$12.8B",
    sparkline:
      "M0,12 L5,14 L10,11 L15,15 L20,13 L25,16 L30,14 L35,18 L40,16 L45,19 L50,17",
    link: "/price/ethereum",
    tradable: true,
  },
  {
    rank: 3,
    name: "Tether",
    symbol: "USDT",
    icon: "https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png",
    price: "$1.00",
    change: 0.0,
    mktCap: "$184.0B",
    volume: "$55.7B",
    sparkline:
      "M0,15 L5,15 L10,15 L15,15 L20,15 L25,15 L30,15 L35,15 L40,15 L45,15 L50,15",
    link: "/price/tether",
    tradable: true,
  },
  {
    rank: 4,
    name: "BNB",
    symbol: "BNB",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png",
    price: "$627.58",
    change: -0.31,
    mktCap: "$85.5B",
    volume: "$1.1B",
    sparkline:
      "M0,14 L5,13 L10,15 L15,12 L20,14 L25,11 L30,13 L35,10 L40,12 L45,9 L50,11",
    link: "/price/bnb",
    tradable: true,
  },
  {
    rank: 5,
    name: "XRP",
    symbol: "XRP",
    icon: "https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png",
    price: "$1.36",
    change: -0.38,
    mktCap: "$83.3B",
    volume: "$1.5B",
    sparkline:
      "M0,16 L5,14 L10,17 L15,13 L20,15 L25,12 L30,14 L35,11 L40,13 L45,10 L50,12",
    link: "/price/xrp",
    tradable: true,
  },
  {
    rank: 6,
    name: "USDC",
    symbol: "USDC",
    subtitle: "Earns 3.50% APY",
    icon: "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
    price: "$1.00",
    change: 0.0,
    mktCap: "$77.3B",
    volume: "$6.3B",
    sparkline:
      "M0,15 L5,15 L10,15 L15,15 L20,15 L25,15 L30,15 L35,15 L40,15 L45,15 L50,15",
    link: "/price/usdc",
    tradable: true,
  },
  {
    rank: 7,
    name: "Solana",
    symbol: "SOL",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/b658adaf7913c1513c8d120bcb41934a5a4bf09b6adbcb436085e2fbf6eb128c.png",
    price: "$84.10",
    change: -1.47,
    mktCap: "$48.0B",
    volume: "$2.3B",
    sparkline:
      "M0,10 L5,12 L10,9 L15,14 L20,11 L25,16 L30,13 L35,18 L40,15 L45,20 L50,17",
    link: "/price/solana",
    tradable: true,
  },
  {
    rank: 8,
    name: "TRON",
    symbol: "TRX",
    icon: "https://dynamic-assets.coinbase.com/49567ec5f7c7a1ccb3ce247297c443b3dd32072ee5b91902abc0f6789654e14fd3b9ed8851580b93b4daf7da13324bc61e143a2d391d9e6d8b98f8d69923e4b4/asset_icons/3c5b36c70a05bad40eee4f711aeefbb1809169a17db047bf91f1ef45828349e5.png",
    price: "$0.28",
    change: -0.22,
    mktCap: "$27.0B",
    volume: "$340.6M",
    sparkline:
      "M0,14 L5,13 L10,15 L15,12 L20,14 L25,11 L30,13 L35,10 L40,12 L45,9 L50,11",
    link: "/price/tron",
    tradable: false,
  },
  {
    rank: 9,
    name: "Dogecoin",
    symbol: "DOGE",
    icon: "https://dynamic-assets.coinbase.com/3803f30367bb3972e192cd3fdd2230cd37e6d468eab12575a859229b20f12ff9c994d2c86ccd7bf9bc258e9bd5e46c5254283182f70caf4bd02cc4f8e3890d82/asset_icons/1597d628dd19b7885433a2ac2d7de6ad196c519aeab4bfe679706aacbf1df78a.png",
    price: "$0.0900",
    change: -0.95,
    mktCap: "$13.8B",
    volume: "$706.2M",
    sparkline:
      "M0,16 L5,14 L10,17 L15,13 L20,16 L25,12 L30,15 L35,11 L40,14 L45,10 L50,13",
    link: "/price/dogecoin",
    tradable: true,
  },
  {
    rank: 10,
    name: "Cardano",
    symbol: "ADA",
    icon: "https://dynamic-assets.coinbase.com/da39dfe3632bf7a9c26b5aff94fe72bc1a70850bc488e0c4d68ab3cf87ddac277cd1561427b94acb4b3e37479a1f73f1c37ed311c11a742d6edf512672aea7bb/asset_icons/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png",
    price: "$0.26",
    change: -1.37,
    mktCap: "$9.2B",
    volume: "$401.2M",
    sparkline:
      "M0,12 L5,14 L10,11 L15,15 L20,12 L25,16 L30,13 L35,17 L40,14 L45,18 L50,15",
    link: "/price/cardano",
    tradable: true,
  },
];

const filterOptions = [
  "All assets",
  "Tradable",
  "DeFi",
  "Memes",
  "Layer 1",
  "Layer 2",
];
const timeFrames = ["1H", "1D", "1W", "1M", "1Y"];
const currencies = ["USD", "EUR", "GBP", "GHS"];
const rowOptions = [10, 25, 50, 100];

export default function CryptoTable() {
  const [selectedFilter, setSelectedFilter] = useState("All assets");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("1D");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedRows, setSelectedRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("mktCap");
  const [sortDir, setSortDir] = useState("desc");
  const [expanded, setExpanded] = useState(false);

  const totalAssets = 18591;
  const totalPages = 1860;

  return (
    <section className="mb-10 pt-10">
      {/* Section header */}
      <div className="flex items-baseline gap-3 mb-3">
        <h2 className="text-[22px] font-bold tracking-[-0.02em]">
          Crypto market prices
        </h2>
        <span className="text-[13px] text-gray-400 font-normal">
          {totalAssets.toLocaleString()} assets
        </span>
      </div>

      {/* Description */}
      <p className="text-[14px] leading-relaxed text-gray-600 mb-1">
        The overall crypto market is growing this week. As of today, the total
        crypto market capitalization is 2.26 trillion, representing a 4.67%
        increase from last week.
        {expanded && (
          <span>
            {" "}
            The 24-hour crypto market trading volume has also seen a 0.30%
            decrease over the past day. The top performing cryptocurrencies by
            price are Alchemix, Perpetual Protocol and Pirate Nation Token.
          </span>
        )}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[14px] font-medium text-blue-600 hover:underline mb-7"
      >
        {expanded ? "Read less" : "Read more"}
      </button>

      {/* Filters */}
      <div className="flex flex-wrap gap-2.5 mb-7">
        {/* Asset filter */}
        <div className="relative">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="appearance-none pl-8 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {filterOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
          </svg>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Time frame */}
        <div className="relative">
          <select
            value={selectedTimeFrame}
            onChange={(e) => setSelectedTimeFrame(e.target.value)}
            className="appearance-none px-4 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {timeFrames.map((tf) => (
              <option key={tf} value={tf}>
                {tf}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Currency */}
        <div className="relative">
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="appearance-none px-4 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Rows per page */}
        <div className="relative">
          <select
            value={selectedRows}
            onChange={(e) => setSelectedRows(Number(e.target.value))}
            className="appearance-none px-4 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {rowOptions.map((r) => (
              <option key={r} value={r}>
                {r} rows
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500">
              <th className="py-3 pr-2 w-10"></th>
              <th className="py-3 px-3 font-medium text-[13px]">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Asset
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden md:table-cell">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Market price
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden lg:table-cell">
                Chart
              </th>
              <th className="py-3 px-3 font-medium text-[13px]">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Change
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden md:table-cell">
                <button className="flex items-center gap-1 hover:text-gray-900 text-blue-600">
                  Mkt cap
                  <SortIcon active />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden lg:table-cell">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Volume
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoAssets.map((asset) => (
              <tr
                key={asset.symbol}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                {/* Star / Favorite */}
                <td className="py-5 pr-2 pl-1">
                  <button className="text-gray-300 hover:text-yellow-400 transition">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                </td>

                {/* Asset name */}
                <td className="py-5 px-3">
                  <Link to={asset.link} className="flex items-center gap-3">
                    <img
                      src={asset.icon}
                      alt={asset.name}
                      className="w-8 h-8 rounded-full shrink-0"
                    />
                    <div>
                      <div className="font-medium text-[14px] text-gray-900">
                        {asset.name}
                      </div>
                      <div className="text-[12px] text-gray-400 mt-0.5">
                        {asset.symbol}
                      </div>
                      {asset.subtitle && (
                        <div className="text-xs text-blue-600">
                          {asset.subtitle}
                        </div>
                      )}
                    </div>
                  </Link>
                </td>

                {/* Price (hidden on mobile — shown via change column) */}
                <td className="py-5 px-3 font-medium text-[14px] hidden md:table-cell">
                  {asset.price}
                </td>

                {/* Sparkline chart */}
                <td className="py-5 px-3 hidden lg:table-cell">
                  <svg
                    viewBox="0 0 50 30"
                    className="w-20 h-8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={asset.sparkline}
                      fill="none"
                      stroke={
                        asset.change < 0
                          ? "#ef4444"
                          : asset.change > 0
                            ? "#22c55e"
                            : "#9ca3af"
                      }
                      strokeWidth="1.5"
                    />
                  </svg>
                </td>

                {/* Change */}
                <td className="py-5 px-3">
                  <div className="md:hidden text-[12px] text-gray-900 font-medium mb-0.5">
                    {asset.price}
                  </div>
                  <span
                    className={`text-[14px] font-medium flex items-center gap-0.5 ${
                      asset.change < 0
                        ? "text-red-500"
                        : asset.change > 0
                          ? "text-green-500"
                          : "text-gray-500"
                    }`}
                  >
                    {asset.change < 0 ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M5 2v6M5 8L2 5M5 8l3-3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : asset.change > 0 ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M5 8V2M5 2L2 5M5 2l3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                    {Math.abs(asset.change).toFixed(2)}%
                  </span>
                </td>

                {/* Market cap */}
                <td className="py-5 px-3 hidden md:table-cell text-[14px] text-gray-600">
                  {asset.mktCap}
                </td>

                {/* Volume */}
                <td className="py-5 px-3 hidden lg:table-cell text-[14px] text-gray-600">
                  {asset.volume}
                </td>

                {/* Trade button */}
                <td className="py-5 px-3 text-right">
                  {asset.tradable && (
                    <Link
                      to="/signup"
                      className="inline-flex px-5 py-2 text-[13px] font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                    >
                      Trade
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        <div className="flex items-center gap-1.5">
          <PaginationBtn active>1</PaginationBtn>
          <PaginationBtn>2</PaginationBtn>
          <PaginationBtn>3</PaginationBtn>
          <span className="text-[13px] text-gray-400 px-1">...</span>
          <PaginationBtn>{totalPages.toLocaleString()}</PaginationBtn>
          <button className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium text-gray-600 hover:text-blue-600 transition ml-1">
            <span>Next page</span>
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <span className="text-[12px] text-gray-400">
          1-10 of {totalAssets.toLocaleString()} assets
        </span>
      </div>
    </section>
  );
}

function SortIcon({ active }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={active ? "text-blue-600" : "text-gray-400"}
    >
      <path d="M6 2L9 5H3L6 2Z" fill="currentColor" opacity="0.5" />
      <path d="M6 10L3 7H9L6 10Z" fill="currentColor" />
    </svg>
  );
}

function PaginationBtn({ children, active }) {
  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-full text-[13px] font-medium transition ${
        active ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}
