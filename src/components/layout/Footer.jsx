import { useEffect, useMemo, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaXTwitter } from 'react-icons/fa6';

const groupedFooter = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Affiliates', 'Blog', 'Press', 'Investors', 'Legal & privacy', 'Cookie policy', 'Cookie preferences', 'Digital Asset Disclosures'],
  },
  {
    title: 'Learn',
    links: ['Explore', 'Coinbase Bytes newsletter', 'Crypto basics', 'Tips & tutorials', 'Market updates', 'What is Bitcoin?', 'What is crypto?', 'What is a blockchain?', 'How to set up a crypto wallet', 'How to send crypto'],
  },
  {
    title: 'Individuals',
    links: ['Buy & sell', 'Earn free crypto', 'Wallet', 'Card', 'Derivatives', 'Coinbase One', 'Coinbase Plus'],
  },
  {
    title: 'Businesses',
    links: ['Asset Listings', 'Commerce', 'Prime', 'Onchain Payment Protocol', 'Base for Business'],
  },
  {
    title: 'Institutions',
    links: ['Prime', 'Staking', 'Exchange', 'International Exchange'],
  },
  {
    title: 'Developers',
    links: ['Developer Platform', 'Base', 'Staking', 'Onramp', 'Wallets', 'Wallet SDK', 'Coinbase App APIs', 'Exchange APIs', 'Paymaster', 'Node'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Contact us', 'Create account', 'ID verification', 'Account information', 'Payment methods', 'Account access', 'Supported crypto', 'Status'],
  },
  {
    title: 'Asset prices',
    links: ['Bitcoin price', 'Ethereum price', 'Solana price', 'XRP price'],
  },
  {
    title: 'Stock prices',
    links: ['NVIDIA price', 'Apple price', 'Amazon price', 'Meta price'],
  },
];

const columns = [
  [groupedFooter[0], groupedFooter[1]],
  [groupedFooter[2], groupedFooter[3], groupedFooter[4]],
  [groupedFooter[5]],
  [groupedFooter[6], groupedFooter[7], groupedFooter[8]],
];

const Footer = () => {
  const [selectedLocale, setSelectedLocale] = useState('English|Global');

  useEffect(() => {
    const syncLocale = () => {
      setSelectedLocale(localStorage.getItem('cb-locale') || 'English|Global');
    };

    syncLocale();
    window.addEventListener('storage', syncLocale);
    window.addEventListener('cb-locale-change', syncLocale);

    return () => {
      window.removeEventListener('storage', syncLocale);
      window.removeEventListener('cb-locale-change', syncLocale);
    };
  }, []);

  const [currentLanguage, currentRegion] = useMemo(() => selectedLocale.split('|'), [selectedLocale]);

  return (
    <footer className="border-t border-[#d8dde6] bg-[#eef2f6] text-[#101828]">
      <div className="mx-auto max-w-[1180px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col, index) => (
            <div key={`col-${index}`} className="space-y-7">
              {col.map((section) => (
                <div key={section.title}>
                  <h4 className="text-[13px] font-semibold text-[#0a0b0d]">{section.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-[12px] text-[#5f6675] transition-colors hover:text-[#0052ff]">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[#d8dde6] pt-5">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[12px] text-[#6c7484]">
            <div className="flex flex-wrap items-center gap-5">
              <span>© 2026 Coinbase</span>
              <a href="#" className="hover:text-[#0052ff]">Privacy</a>
              <a href="#" className="hover:text-[#0052ff]">Terms & Conditions</a>
            </div>
            <div className="flex items-center gap-4 text-[14px] text-[#5f6675]">
              <a href="#" className="hover:text-[#0052ff]" aria-label="Twitter"><FaXTwitter /></a>
              <a href="#" className="hover:text-[#0052ff]" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#0052ff]" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-[#0052ff]" aria-label="Reddit"><FaRedditAlien /></a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-[12px] text-[#6c7484]">
            <p>Cookie preferences</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-[#0052ff]">{currentRegion}</a>
              <a href="#" className="hover:text-[#0052ff]">{currentLanguage}</a>
            </div>
          </div>

          <p className="mt-4 max-w-4xl text-[11px] leading-relaxed text-[#7a8190]">
            We use cookies to make your interactions with our website more meaningful. They help us better understand
            how our website is used, so we can tailor content for you. For more information about the cookies we use,
            read our Cookie Policy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
