import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter } from 'lucide-react';

const navLinks = [
  { name: 'About', to: '/about' },
  { name: 'Experience', to: '/experience' },
  { name: 'Skills', to: '/skills' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 bg-portfolio-navy text-white overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-portfolio-purple/10 blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center gap-6">
          <Link to="/" className="font-serif-display italic text-3xl text-white">Portfolio</Link>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-white/60 hover:text-white transition-colors text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { Icon: Linkedin, href: 'https://www.linkedin.com/' },
              { Icon: Github, href: 'https://github.com/' },
              { Icon: Twitter, href: 'https://twitter.com/' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon size={16} className="text-white" />
              </a>
            ))}
          </div>

          <div className="w-24 h-px bg-white/20"></div>

          <p className="text-white/50 text-xs tracking-wide">© {currentYear} Your Name. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
