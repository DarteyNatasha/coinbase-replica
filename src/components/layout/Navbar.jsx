import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FiArrowRight,
  FiBarChart2,
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiChevronUp,
  FiCode,
  FiCreditCard,
  FiDatabase,
  FiDollarSign,
  FiFileText,
  FiGlobe,
  FiInfo,
  FiLayers,
  FiLink,
  FiLock,
  FiMenu,
  FiMessageSquare,
  FiSearch,
  FiShield,
  FiTerminal,
  FiTrendingUp,
  FiUserPlus,
  FiX,
} from 'react-icons/fi';
import logoUrl from '../../assets/coinbaseLogoNavigation-4.svg';
import promoIndividuals from '../../assets/crypto/images/menu_individuals.svg';
import promoBusinesses from '../../assets/crypto/images/menu_businesses.svg';
import promoInstitutions from '../../assets/crypto/images/menu_institutions.svg';
import promoDevelopers from '../../assets/crypto/images/menu_developers.svg';
import promoCompany from '../../assets/crypto/images/menu_company.svg';

const navItems = [
  { label: 'Cryptocurrencies', to: '/explore' },
  { label: 'Individuals', to: '/signup', menuKey: 'individuals' },
  { label: 'Businesses', to: '/signup', menuKey: 'businesses' },
  { label: 'Institutions', to: '/signup', menuKey: 'institutions' },
  { label: 'Developers', to: '/signup', menuKey: 'developers' },
  { label: 'Company', to: '/signup', menuKey: 'company' },
];

const megaMenus = {
  individuals: {
    columns: [
      [
        { title: 'Buy and sell', desc: 'Buy, sell, and use crypto', icon: FiDollarSign },
        { title: 'Base App', desc: 'Post, earn, trade, and chat, all in one place', icon: FiBox },
        { title: 'Coinbase One', desc: 'Get zero trading fees and more', icon: FiLayers },
        { title: 'Private Client', desc: 'For trusts, family offices, UHNWIs', icon: FiBriefcase },
        { title: 'Onchain', desc: 'Dive into the world of onchain apps', icon: FiLink },
        { title: 'Learn', desc: 'Crypto tips and guides', icon: FiBookOpen },
      ],
      [
        { title: 'Advanced', desc: 'Professional-grade trading tools', icon: FiBarChart2 },
        { title: 'Earn', desc: 'Stake your crypto and earn rewards', icon: FiTrendingUp },
        { title: 'Coinbase Wealth', desc: 'Institutional-grade services for UHNW', icon: FiShield },
        { title: 'Credit Card', desc: 'Earn up to 4% bitcoin back', icon: FiCreditCard },
        { title: 'Debit Card', desc: 'Spend crypto, get crypto back', icon: FiCreditCard },
      ],
    ],
    promo: {
      title: 'System Update 2025',
      text: 'The next chapter of Coinbase. Live on X 12/17.',
      cta: 'Learn more',
      image: promoIndividuals,
      imageAlt: 'Individuals menu visual',
    },
  },
  businesses: {
    columns: [
      [
        { title: 'Business', desc: 'Crypto trading and payments for startups and SMBs', icon: FiBriefcase },
        { title: 'Asset Listings', desc: 'List your asset on Coinbase', icon: FiDatabase },
      ],
      [
        { title: 'Payments', desc: 'The stablecoin payments stack for commerce platforms', icon: FiCreditCard },
        { title: 'Token Manager', desc: 'The platform for token distributions, vesting, and lockups', icon: FiLayers },
      ],
    ],
    promo: {
      title: 'Commerce Payments Protocol',
      text: 'A new standard for onchain payments.',
      cta: 'Go to Payments',
      image: promoBusinesses,
      imageAlt: 'Businesses menu visual',
    },
  },
  institutions: {
    columns: [
      [
        { heading: 'Prime', withArrow: true },
        { title: 'Trading and Financing', desc: 'Professional prime brokerage services', icon: FiTrendingUp },
        { title: 'Custody', desc: 'Securely store all your digital assets', icon: FiLock },
        { title: 'Staking', desc: 'Explore staking across our products', icon: FiBarChart2 },
        { title: 'Onchain Wallet', desc: 'Institutional-grade wallet to get onchain', icon: FiBox },
      ],
      [
        { heading: 'Markets' },
        { title: 'Exchange', desc: 'Spot markets for high-frequency trading', icon: FiBarChart2 },
        { title: 'International Exchange', desc: 'Access perpetual futures markets', icon: FiGlobe },
        { title: 'Derivatives Exchange', desc: 'Trade an accessible futures market', icon: FiTrendingUp },
        { title: 'Verified Pools', desc: 'Transparent, verified liquidity pools', icon: FiLayers },
      ],
    ],
    promo: {
      title: 'Our clients',
      text: 'Trusted by institutions and government.',
      cta: 'Learn more',
      image: promoInstitutions,
      imageAlt: 'Institutions menu visual',
    },
  },
  developers: {
    columns: [
      [
        { heading: 'Coinbase Developer Platform', withArrow: true },
        { title: 'Payments', desc: 'Fast and global stablecoin payments with a single integration', icon: FiCreditCard },
        { title: 'Trading', desc: 'Launch crypto trading and custody for your users', icon: FiBarChart2 },
        { title: 'Wallets', desc: 'Deploy customizable and scalable wallets for your business', icon: FiBox },
        { title: 'Stablecoins', desc: 'Access USDC and Coinbase Custom Stablecoins', icon: FiDollarSign },
      ],
      [
        { heading: 'Solutions for any company' },
        { title: 'Banks & Brokerages', desc: 'Secure, regulated offerings for retail, private banking, & institutional clients', icon: FiShield },
        { title: 'Payment Firms', desc: 'Near-instant, low-cost, global payment rails for modern providers', icon: FiCreditCard },
        { title: 'Startups', desc: "Launch your business with the world's leader in crypto", icon: FiBriefcase },
      ],
    ],
    promo: {
      title: 'World class crypto infrastructure. Discover Coinbase\'s complete crypto-as-a-service platform.',
      text: '',
      cta: 'Learn more',
      image: promoDevelopers,
      imageAlt: 'Developers menu visual',
    },
  },
  company: {
    columns: [
      [
        { title: 'About', desc: 'Powering the crypto economy', icon: FiInfo },
        { title: 'Affiliates', desc: 'Help introduce the world to crypto', icon: FiUserPlus },
        { title: 'Blog', desc: 'Read the latest from Coinbase', icon: FiFileText },
      ],
      [
        { title: 'Careers', desc: 'Work with us', icon: FiBriefcase },
        { title: 'Support', desc: 'Find answers to your questions', icon: FiMessageSquare },
        { title: 'Security', desc: 'The most trusted & secure', icon: FiShield },
      ],
    ],
    promo: {
      title: "Learn all about Coinbase: We're building the open financial system.",
      text: 'Crypto moves money forward',
      cta: 'Create your account',
      image: promoCompany,
      imageAlt: 'Company menu visual',
    },
  },
};

const languageItems = [
  { language: 'English', region: 'Global' },
  { language: 'Espanol', region: 'United States' },
  { language: 'English', region: 'United States' },
  { language: 'Deutsch', region: 'Germany' },
  { language: 'Francais', region: 'France' },
  { language: 'Italiano', region: 'Italy' },
  { language: 'Portugues', region: 'Brazil' },
  { language: 'Nederlands', region: 'Netherlands' },
  { language: 'English', region: 'United Kingdom' },
  { language: 'Polski', region: 'Poland' },
  { language: 'Dansk', region: 'Denmark' },
  { language: 'Svenska', region: 'Sweden' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [languageSearch, setLanguageSearch] = useState('');
  const [selectedLocale, setSelectedLocale] = useState(() => localStorage.getItem('cb-locale') || 'English|Global');

  const navLinkClass = ({ isActive }) =>
    `cb-nav-hover rounded-full px-4 text-[12px] font-semibold transition-colors ${isActive ? 'cb-nav-hover-active bg-[#f1f3f5] text-[#0052ff]' : 'text-[#0a0b0d] hover:bg-[#f1f3f5] hover:text-[#0052ff]'}`;

  const currentMenu = useMemo(() => (activeMenu ? megaMenus[activeMenu] : null), [activeMenu]);

  const currentMenuColumns = useMemo(() => {
    if (currentMenu?.columns?.length) {
      return currentMenu.columns;
    }

    if (!currentMenu?.items?.length) {
      return [];
    }

    const midpoint = Math.ceil(currentMenu.items.length / 2);
    return [currentMenu.items.slice(0, midpoint), currentMenu.items.slice(midpoint)];
  }, [currentMenu]);

  const filteredLanguageItems = useMemo(() => {
    const query = languageSearch.trim().toLowerCase();
    if (!query) {
      return languageItems;
    }

    return languageItems.filter((item) => `${item.language} ${item.region}`.toLowerCase().includes(query));
  }, [languageSearch]);

  const [selectedLanguage, selectedRegion] = useMemo(() => selectedLocale.split('|'), [selectedLocale]);

  const handleSelectLocale = (locale) => {
    setSelectedLocale(locale);
    localStorage.setItem('cb-locale', locale);
    window.dispatchEvent(new Event('cb-locale-change'));
    setShowLanguageMenu(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white" onMouseLeave={() => setActiveMenu(null)}>
      <nav className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="Coinbase" className="h-7 w-7" />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <div key={item.label} onMouseEnter={() => setActiveMenu(item.menuKey || null)}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => {
                    const base = navLinkClass({ isActive });
                    const isMenuActive = activeMenu && item.menuKey && activeMenu === item.menuKey;
                    return `${base} ${isMenuActive ? 'bg-[#f1f3f5] text-[#0a0b0d]' : ''}`;
                  }}
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button className="rounded-full bg-gray-100 p-2 text-[#111827] transition-colors hover:bg-gray-200" aria-label="Search">
            <FiSearch className="h-4 w-4" />
          </button>
          <span className="hidden text-[11px] font-semibold text-[#6b7280] lg:inline">{selectedRegion} / {selectedLanguage}</span>

          <div className="relative" onMouseEnter={() => setShowLanguageMenu(true)} onMouseLeave={() => setShowLanguageMenu(false)}>
            <button className="rounded-full bg-gray-100 p-2 text-[#111827] transition-colors hover:bg-gray-200" aria-label="Choose region and language">
              <FiGlobe className="h-4 w-4" />
            </button>

            {showLanguageMenu ? (
              <div className="absolute right-0 top-full z-50 mt-2 w-[304px] rounded-2xl border border-[#d2d7e0] bg-[#f3f4f6] p-4 shadow-[0_16px_30px_rgba(15,23,42,0.18)]">
                <h3 className="text-[24px] font-semibold leading-tight text-[#0f172a]">Language and region</h3>

                <div className="mt-4 flex items-center gap-2 rounded-full bg-[#e2e5ea] px-4 py-3 text-[#6b7280]">
                  <FiSearch className="h-4 w-4" />
                  <input
                    type="text"
                    value={languageSearch}
                    onChange={(event) => setLanguageSearch(event.target.value)}
                    className="w-full bg-transparent text-[15px] text-[#3f4652] outline-none placeholder:text-[#7a818d]"
                    placeholder="Search"
                  />
                </div>

                <div className="relative mt-4">
                  <FiChevronUp className="pointer-events-none absolute right-1 top-1 h-5 w-5 text-[#8b9098]" />
                  <div className="cb-language-scroll max-h-[240px] overflow-y-auto pr-2">
                    {filteredLanguageItems.map((item) => {
                      const key = `${item.language}|${item.region}`;
                      const isSelected = key === selectedLocale;

                      return (
                        <button
                          key={key}
                          className={`mb-1 flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left ${isSelected ? 'bg-[#e7e8ea]' : 'hover:bg-[#e7e8ea]'}`}
                          type="button"
                          onClick={() => handleSelectLocale(key)}
                        >
                          <span>
                            <p className="text-[16px] font-semibold leading-none text-[#0f172a]">{item.language}</p>
                            <p className="mt-1 text-[14px] leading-none text-[#626977]">{item.region}</p>
                          </span>
                          {isSelected ? <FiCheck className="h-5 w-5 text-[#16a34a]" /> : null}
                        </button>
                      );
                    })}
                  </div>
                  <FiChevronDown className="pointer-events-none absolute bottom-1 right-1 h-5 w-5 text-[#8b9098]" />
                </div>
              </div>
            ) : null}
          </div>

          <NavLink to="/signin" className="cb-link-underline px-2 text-[12px] font-semibold text-[#0a0b0d] hover:text-[#0052ff]">
            Sign in
          </NavLink>
          <NavLink to="/signup" className="rounded-full bg-[#0052ff] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#0046d5]">
            Sign up
          </NavLink>
        </div>

        <button className="p-2 md:hidden" aria-label="Toggle menu" onClick={() => setIsOpen((previous) => !previous)}>
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {currentMenu ? (
        <div className="hidden border-t border-[#d9dde3] bg-[#f5f6f8] py-12 md:block">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_1fr_390px] gap-10 px-6">
            {currentMenuColumns.map((column, columnIndex) => (
              <div key={`column-${columnIndex}`} className="space-y-5">
                {column.map((item) => {
                  if (item.heading) {
                    return (
                      <div key={item.heading} className="flex items-center gap-2 px-1 py-1">
                        <p className="text-[16px] font-semibold text-[#0a0b0d]">{item.heading}</p>
                        {item.withArrow ? <FiArrowRight className="h-4 w-4 text-[#0a0b0d]" /> : null}
                      </div>
                    );
                  }

                  const Icon = item.icon;
                  return (
                    <Link key={item.title} to="/signup" className="group flex items-start gap-4 rounded-xl px-1 py-1">
                      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7eaef] text-[#111827]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <p className="text-[14px] font-semibold leading-tight text-[#0a0b0d] group-hover:underline">{item.title}</p>
                        <p className="mt-0.5 text-[12px] text-[#556070]">{item.desc}</p>
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}

            <div className="pl-4 pt-1">
              <img
                src={currentMenu.promo.image}
                alt={currentMenu.promo.imageAlt}
                className="mb-5 h-[118px] w-[156px] rounded-[34px] object-cover"
              />
              <h4 className="max-w-md text-[22px] font-medium leading-tight tracking-tight text-[#0a0b0d]">{currentMenu.promo.title}</h4>
              {currentMenu.promo.text ? <p className="mt-2 text-[14px] leading-tight text-[#4f5c70]">{currentMenu.promo.text}</p> : null}
              <Link to="/signup" className="mt-3 inline-flex items-center gap-1 text-[18px] font-semibold leading-none text-[#0a0b0d] underline underline-offset-2 hover:text-[#0052ff]">
                {currentMenu.promo.cta}
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {isOpen ? (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className="text-sm font-semibold text-[#0a0b0d]" onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/signin" className="text-sm font-semibold text-[#0a0b0d]" onClick={() => setIsOpen(false)}>
              Sign in
            </NavLink>
            <NavLink to="/signup" className="w-fit rounded-full bg-[#0052ff] px-4 py-2 text-sm font-semibold text-white" onClick={() => setIsOpen(false)}>
              Sign up
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
