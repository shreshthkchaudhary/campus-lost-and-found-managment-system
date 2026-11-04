import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowRight, Search } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-krmu-navy text-white">
      {/* Red separator line (like KRMU website) */}
      <div className="h-1 bg-krmu-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img 
                src="/images/krmu-seal.webp" 
                alt="KRMU Seal" 
                className="w-10 h-10 rounded-full bg-white object-contain p-0.5"
              />
              <div>
                <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">K.R. Mangalam University</p>
                <p className="font-bold text-white">Lost & Found Portal</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              A student-developed platform to streamline lost and found item management at K.R. Mangalam University, Gurugram. Built by Team Code Nemesis as a B.Tech Minor Project.
            </p>
            <div className="flex items-start gap-2 text-sm text-krmu-gold">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <span>K.R. Mangalam University, Gurugram — 122001, Haryana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <div className="krmu-separator"></div>
            <ul className="space-y-3 mt-5">
              {[
                { to: '/', label: 'Home' },
                { to: '/browse', label: 'Browse Items' },
                { to: '/report-lost', label: 'Report Lost' },
                { to: '/report-found', label: 'Report Found' },
                { to: '/about', label: 'About Project' }
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight size={14} className="text-krmu-red group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* University Links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">University</h3>
            <div className="krmu-separator"></div>
            <ul className="space-y-3 mt-5">
              {[
                { href: 'https://www.krmangalam.edu.in', label: 'KRMU Website' },
                { href: 'https://lms.krmangalam.edu.in', label: 'LMS Portal' },
                { href: 'https://krmu.icloudems.com', label: 'ERP Portal' },
                { href: 'https://www.krmangalam.edu.in/student-welfare', label: 'DSW Office' },
                { href: 'https://www.krmangalam.edu.in/contact-us', label: 'Contact Us' }
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight size={14} className="text-krmu-red group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Contact</h3>
            <div className="krmu-separator"></div>
            <div className="space-y-4 mt-5">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-krmu-red flex-shrink-0 mt-0.5" />
                <a href="mailto:welcome@krmangalam.edu.in" className="text-gray-400 hover:text-white text-sm transition-colors">
                  welcome@krmangalam.edu.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-krmu-red flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:01148884888" className="hover:text-white transition-colors">01148884888</a>,{' '}
                  <a href="tel:8192888444" className="hover:text-white transition-colors">8192888444</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-krmu-red flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  Sohna Road, Gurugram, Haryana 122103
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>
              © 2026 Campus Lost & Found —{' '}
              <span className="text-krmu-gold font-medium">Code Nemesis</span>{' '}
              · B.Tech CSE-D · KRMU
            </p>
            <p>
              Supervised by{' '}
              <span className="text-krmu-gold font-medium">Mr. Anurag Singh</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
