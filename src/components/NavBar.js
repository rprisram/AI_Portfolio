"use client";

import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.container} container`}>
                <div className={styles.logo}>
                    <span className="gradient-text font-outfit">PR</span>
                </div>
                <ul className={styles.navLinks}>
                    <li><a href="#hero">Brief</a></li>
                    <li><a href="#skills">Arsenal</a></li>
                    <li><a href="#genai">GenAI Solutions</a></li>
                    <li><a href="#ml">Foundational AI/ML</a></li>
                    <li><a href="#certs">Certs</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </div>
        </nav>
    );
}
