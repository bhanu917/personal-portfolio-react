import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" }
];

export default function Navbar() {
    const [ismobilemenuopen, setmobilemenuopen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    useEffect(
        () => {
            const handlescroll = () => {
                setScrolled(window.scrollY > 50)
            }
            window.addEventListener("scroll", handlescroll)
            return () => window.removeEventListener("scroll", handlescroll);
        }, []
    )
    return (
        <header className={`fixed top-0 left-0 right-0 bg-transparent  transation-all duration-300 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary t-hov">
                    Bhanu<span className="t-hov"></span>
                </a>


                {/* Links */}
                <div className="hidden md:flex  items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-md  rounded-full  tcf"
                            >
                                {link.label}
                            </a>
                        ))}</div>

                </div>
                <div className="hidden md:block">
                    <Button size="sm">contact Me</Button>
                </div>

                <button className="md:hidden p-2 text-foreground" onClick={() => setmobilemenuopen((prev) => !prev)}>
                    {ismobilemenuopen ? <X size={24} /> : < Menu size={24} />}
                </button>
            </nav>
            {ismobilemenuopen &&
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.label}
                            </a>
                        ))}
                        <Button size="sm">contact Me</Button>

                    </div>
                </div>
            }
        </header>
    );
}
