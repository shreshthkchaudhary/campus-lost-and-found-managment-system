import { Phone, ExternalLink, ShieldCheck } from 'lucide-react';

const SocialIcon = ({ children, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="text-slate-400 hover:text-white transition-colors flex items-center justify-center p-1 rounded hover:bg-slate-800"
  >
    {children}
  </a>
);

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 text-slate-300 font-medium">
            <ShieldCheck size={14} className="text-rose-500" />
            Official KRMU Campus Lost & Found Registry
          </span>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-4 text-slate-400 font-normal">
            <a
              href="https://www.krmangalam.edu.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Main Campus <ExternalLink size={11} className="text-slate-500" />
            </a>
            <a href="https://lms.krmangalam.edu.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LMS
            </a>
            <a href="https://krmu.icloudems.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              ERP Portal
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <SocialIcon href="https://facebook.com" label="Facebook">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </SocialIcon>
          </div>
          <span className="text-slate-700">|</span>
          <a
            href="tel:8192888444"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800"
          >
            <Phone size={12} className="text-rose-500" />
            <span className="font-semibold text-white">Campus Security:</span> 8192888444
          </a>
        </div>
      </div>
    </div>
  );
}
