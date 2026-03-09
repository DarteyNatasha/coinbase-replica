import { Link } from "react-router-dom";

const footerSections = [
    {
        title: "Company",
        links: [
            { label: "About", to: "/about" },
            { label: "Careers", to: "/careers" },
            { label: "Blog", to: "/blog" },
            { label: "Press", to: "/press" },
            { label: "Security", to: "/security" },
            { label: "Investors", href: "https://investor.coinbase.com/" },
            { label: "Legal & privacy", to: "/legal" },
        ],
    },
    {
        title: "Individuals",
        links: [
            { label: "Buy & sell", to: "/" },
            { label: "Coinbase One", to: "/coinbase-one" },
            { label: "Advanced Trade", to: "/advanced" },
            { label: "Earn", to: "/earn" },
            { label: "Credit Card", to: "/credit-card" },
            { label: "Debit Card", to: "/debit-card" },
        ],
    },
    {
        title: "Businesses",
        links: [
            { label: "Business", to: "/businesses" },
            { label: "Asset Listings", to: "/asset-listings" },
            { label: "Payments", to: "/payments" },
            { label: "Token Manager", to: "/token-manager" },
        ],
    },
    {
        title: "Developers",
        links: [
            { label: "Developer Platform", to: "/developer-platform" },
            { label: "Base", href: "https://base.org/" },
            { label: "OnchainKit", href: "https://www.base.org/build/onchainkit" },
            { label: "AgentKit", to: "/developer-platform/products/agentkit" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Help center", href: "https://help.coinbase.com/" },
            { label: "Contact us", href: "https://help.coinbase.com/contact-us/" },
            { label: "Status", href: "https://status.coinbase.com/" },
        ],
    },
];

const socialLinks = [
    { label: "X", href: "https://x.com/coinbase", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/coinbase", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
];

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-10">
                    <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none">
                        <circle cx="512" cy="512" r="512" fill="#0052FF" />
                        <path d="M512.147 692C412.697 692 332.147 611.45 332.147 512C332.147 412.55 412.697 332 512.147 332C601.247 332 675.547 396.95 690.047 481H854.047C838.347 311.1 694.497 180 512.147 180C328.897 180 180.147 328.75 180.147 512C180.147 695.25 328.897 844 512.147 844C694.497 844 838.347 712.9 854.047 543H690.047C675.547 627.05 601.247 692 512.147 692Z" fill="white" />
                    </svg>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-bold text-gray-900 mb-3">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        {link.href ? (
                                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">{link.label}</a>
                                        ) : (
                                            <Link to={link.to} className="text-xs text-blue-600 hover:underline">{link.label}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 mt-10">
                    {socialLinks.map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition" aria-label={s.label}>{s.icon}</a>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                        <span>© 2026 Coinbase</span>
                        <span>•</span>
                        <Link to="/legal/privacy" className="hover:underline">Privacy</Link>
                        <span>•</span>
                        <Link to="/legal/user_agreement" className="hover:underline">Terms</Link>
                    </div>
                    <span>United States • English</span>
                </div>
            </div>
        </footer>
    );
}
