import { Phone } from 'lucide-react';

// Social media icons as simple inline SVGs since lucide-react doesn't include brand icons
const SocialIcon = ({ children, href }) => (
  <a href={href} target="_blank" rel="noreferrer"
    className="hover:text-krmu-gold transition-colors w-4 h-4 flex items-center justify-center">
    {children}
  </a>
);

export default function TopBar() {
  return (
    <div className="bg-krmu-navy text-white text-xs py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="https://www.krmangalam.edu.in" target="_blank" rel="noreferrer"
            className="hover:text-krmu-gold transition-colors flex items-center gap-1">
            🏛️ K.R. Mangalam University
          </a>
          <a href="https://lms.krmangalam.edu.in" target="_blank" rel="noreferrer"
            className="hover:text-krmu-gold transition-colors">LMS</a>
          <a href="https://krmu.icloudems.com" target="_blank" rel="noreferrer"
            className="hover:text-krmu-gold transition-colors">ERP</a>
          <a href="https://www.krmangalam.edu.in/contact-us" target="_blank" rel="noreferrer"
            className="hover:text-krmu-gold transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <SocialIcon href="https://facebook.com">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
              </svg>
            </SocialIcon>
          </div>
          <a href="tel:8192888444" className="flex items-center gap-1 hover:text-krmu-gold transition-colors">
            <Phone size={12} />
            8192888444
          </a>
        </div>
      </div>
    </div>
  );
}
