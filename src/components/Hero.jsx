import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const reveal = (delay = 0) =>
        `transition-all duration-700 ease-out ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`;

    return (
        <section className="relative h-screen min-h-[700px] overflow-hidden">
            {/* Background Image */}
            <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80"
                alt="Friends enjoying a weekend together"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ${visible ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-8 md:px-12 flex items-center">
                <div className="max-w-2xl">

                    {/* Eyebrow */}
                    <p
                        className={`${reveal()} uppercase tracking-[0.25em] text-sm text-white/75 mb-6`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        PLAN • EXPLORE • EXPERIENCE
                    </p>

                    {/* Heading */}
                    <h1
                        className={`${reveal()} font-serif text-white text-4xl md:text-6xl leading-[1.05] font-medium mb-8`}
                        style={{ transitionDelay: "350ms" }}
                    >
                        Where will this weekend
                        <br />
                        take you?
                    </h1>

                    {/* Description */}
                    <p
                        className={`${reveal()} text-white/85 text-lg md:text-xl leading-relaxed max-w-xl mb-10`}
                        style={{ transitionDelay: "500ms" }}
                    >
                        Great weekends rarely happen by accident. Discover places,
                        experiences, cafés and hidden gems your group will actually be
                        excited about.
                    </p>

                    {/* Buttons */}
                    <div
                        className={`${reveal()} flex flex-wrap gap-4`}
                        style={{ transitionDelay: "650ms" }}
                    >
                        <Link 
                            to="/discover"
                            className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium transition duration-300 hover:-translate-y-1 hover:shadow-2xl text-center inline-block"
                        >
                            Start Exploring
                        </Link>

                        <button className="border border-white/60 text-white px-8 py-4 rounded-full backdrop-blur-md transition duration-300 hover:bg-white/10">
                            See How It Works
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${visible ? "opacity-70" : "opacity-0"
                    }`}
                style={{ transitionDelay: "900ms" }}
            >
                <div className="flex flex-col items-center gap-3 text-white/70">
                    <span className="uppercase tracking-[0.3em] text-[10px]">
                        Discover More
                    </span>

                    <div className="w-px h-12 bg-white/40 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-5 bg-white animate-bounce rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}