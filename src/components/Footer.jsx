import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: University & Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/krmu-seal.webp" 
                alt="KRMU Seal" 
                className="w-10 h-10 rounded-full bg-white object-contain p-0.5 shadow-sm"
              />
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">K.R. Mangalam University</p>
                <p className="font-bold text-white text-base">Lost & Found Portal</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              A verified campus recovery platform engineered by Team Code Nemesis (B.Tech CSE) under the mentorship of Mr. Anurag Singh.
            </p>
            <div className="flex items-start gap-2 text-xs text-slate-400">
              <MapPin size={15} className="text-rose-500 flex-shrink-0 mt-0.5" />
              <span>Sohna Road, Gurugram, Haryana — 122103</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { to: '/', label: 'Home Page' },
                { to: '/browse', label: 'Item Directory' },
                { to: '/report-lost', label: 'Report Lost Item' },
                { to: '/report-found', label: 'Report Found Item' },
                { to: '/about', label: 'About Project & Team' }
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: University Portals */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-slate-200">
              University Portals
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { href: 'https://www.krmangalam.edu.in', label: 'Official Website' },
                { href: 'https://lms.krmangalam.edu.in', label: 'LMS Learning Portal' },
                { href: 'https://krmu.icloudems.com', label: 'Student ERP Portal' },
                { href: 'https://www.krmangalam.edu.in/student-welfare', label: 'Dean Student Welfare' },
                { href: 'https://www.krmangalam.edu.in/contact-us', label: 'Campus Directory' }
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus Security Contacts */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-slate-200">
              Campus Helpline
            </h3>
            <div className="space-y-3 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-rose-500 mb-1">
                  Main Security Gate
                </p>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Phone size={13} className="text-slate-400" />
                  <a href="tel:8192888444" className="hover:text-rose-400 transition-colors">8192888444</a>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  General Enquiries
                </p>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail size={13} className="text-slate-400" />
                  <a href="mailto:welcome@krmangalam.edu.in" className="hover:text-white transition-colors truncate">
                    welcome@krmangalam.edu.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © 2026 KRMU Lost & Found Portal · Team Code Nemesis (CSE-D)
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Academic Minor Project · Guided by Mr. Anurag Singh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
