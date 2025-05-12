import { Link } from 'react-router-dom';

function Header() {
    const navLinks = [
        { to: '/text-diff', label: 'Text Diff' },
        { to: '/word-counter', label: 'Word Counter' },
    ];

    return (
        <header className="w-full bg-[#0e7490] text-white p-4 shadow-md">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">🛠️ TinyTools 🛠️</Link>
                <nav>
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="font-bold hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;