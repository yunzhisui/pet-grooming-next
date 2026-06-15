'use client';
import { useState, useEffect } from 'react';
import { PawPrint, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#services', label: '服务项目' },
    { href: '#about', label: '关于我们' },
    { href: '#environment', label: '店内环境' },
    { href: '#testimonials', label: '顾客好评' },
    { href: '#contact', label: '联系预约' },
  ];

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <a href="#" className="nav-logo">
          <PawPrint size={32} />
          宠沐轩
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="菜单">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <ul className={'nav-links' + (open ? ' open' : '')}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.href === '#contact' ? <span className="nav-cta">{l.label}</span> : l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
