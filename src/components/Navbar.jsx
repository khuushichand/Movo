import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#F8F6F2]/90 backdrop-blur-md border-b border-stone-200 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="font-serif text-3xl font-semibold tracking-tight text-stone-900 hover:opacity-80 transition"
                >
                    Plany
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <Link
                        to="/discover"
                        className="uppercase tracking-[0.22em] text-xs font-semibold text-stone-600 hover:text-stone-900 transition relative group"
                    >
                        Discover
                        <span className="absolute -bottom-2 left-0 h-[1px] w-full scale-x-0 bg-stone-900 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                    </Link>

                    <a
                        href="#collections"
                        className="uppercase tracking-[0.22em] text-xs font-semibold text-stone-600 hover:text-stone-900 transition relative group"
                    >
                        Collections
                        <span className="absolute -bottom-2 left-0 h-[1px] w-full scale-x-0 bg-stone-900 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                    </a>

                    <a
                        href="#about"
                        className="uppercase tracking-[0.22em] text-xs font-semibold text-stone-600 hover:text-stone-900 transition relative group"
                    >
                        About
                        <span className="absolute -bottom-2 left-0 h-[1px] w-full scale-x-0 bg-stone-900 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                    </a>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <button
                        aria-label="Search"
                        className="text-stone-500 hover:text-stone-900 transition"
                    >
                        <Search size={20} strokeWidth={1.75} />
                    </button>

                    <Link 
                        to="/discover"
                        className="hidden md:block rounded-full border border-stone-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:-translate-y-0.5 text-center"
                    >
                        Start Exploring
                    </Link>

                    {/* Mobile Menu */}
                    <button className="md:hidden flex flex-col gap-1">
                        <span className="w-5 h-0.5 bg-stone-900 rounded-full"></span>
                        <span className="w-5 h-0.5 bg-stone-900 rounded-full"></span>
                        <span className="w-5 h-0.5 bg-stone-900 rounded-full"></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}