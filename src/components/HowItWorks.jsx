import { UserPlus, Megaphone, Search, Handshake } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Create an Account',
    desc: 'Register with your university email and student/staff ID to access all portal features securely.'
  },
  {
    num: '02',
    icon: Megaphone,
    title: 'Post Your Item',
    desc: 'Fill in details like item name, category, location, date, and a clear description with identifying features.'
  },
  {
    num: '03',
    icon: Search,
    title: 'Search & Browse',
    desc: 'Use our powerful filters — by category, location, or keyword — to find your belongings quickly.'
  },
  {
    num: '04',
    icon: Handshake,
    title: 'Connect & Collect',
    desc: 'Contact the poster via email, arrange a safe campus pickup, and mark the item as resolved.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-krmu-red font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-krmu-navy mb-4">
            Simple Steps to Recover Your Items
          </h2>
          <p className="text-krmu-text-light max-w-xl mx-auto">
            Our streamlined process ensures your belongings are returned quickly and securely.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white border border-krmu-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-krmu-red rounded-t-xl transition-all duration-300"></div>
              
              {/* Step number */}
              <div className="w-10 h-10 rounded-lg bg-krmu-navy text-white flex items-center justify-center text-sm font-bold mb-5">
                {step.num}
              </div>

              {/* Icon */}
              <div className="mb-4">
                <step.icon size={28} className="text-krmu-red group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-lg font-bold text-krmu-navy mb-2">{step.title}</h3>
              <p className="text-sm text-krmu-text-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
