import { Shield, Lightbulb, Cpu, Sparkles, GraduationCap, User } from 'lucide-react';
import { teamMembers } from '../data/items';

const roleIcons = {
  'Frontend': '🎨',
  'UI Design / Frontend': '🖌️',
  'Backend / Database': '⚙️',
  'Testing / Docs': '📋',
  'Backend / PHP': '🔧',
  'Database / MySQL': '🗄️'
};

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-krmu-navy to-[#0d2847] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">About This Portal</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A web application by B.Tech CSE students of K.R. Mangalam University designed to solve a real
            everyday campus problem — lost & found item management — using modern web technology.
          </p>
        </div>
      </div>

      {/* Why We Built This */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-krmu-red font-semibold text-sm tracking-[0.2em] uppercase mb-3">Why We Built This</p>
          <h2 className="text-2xl md:text-3xl font-bold text-krmu-navy">
            Replacing unreliable notice boards and word-of-mouth with a centralised, searchable digital platform.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: 'Problem Statement',
              desc: 'Students and staff frequently misplace belongings across classrooms, labs, the library, and hostels, with no structured system to report or track lost items on campus.'
            },
            {
              icon: Lightbulb,
              title: 'Our Solution',
              desc: 'A web platform where users can post lost/found items, search by keyword, category, or location, and connect directly — all in one centralised, free, accessible system.'
            },
            {
              icon: Cpu,
              title: 'Tech Stack',
              desc: 'Built with React & Tailwind CSS for the frontend; backend planned with PHP & MySQL via XAMPP for the production build.'
            },
            {
              icon: Sparkles,
              title: 'Key Features',
              desc: 'User authentication, item posting with categories & locations, keyword & filter search, claim verification, email-based contact, and mobile-friendly responsive design.'
            }
          ].map((card, i) => (
            <div
              key={i}
              className="group bg-krmu-light border border-krmu-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-krmu-red/10 flex items-center justify-center mb-4 group-hover:bg-krmu-red/20 transition-colors">
                <card.icon size={24} className="text-krmu-red" />
              </div>
              <h3 className="font-bold text-krmu-navy mb-2">{card.title}</h3>
              <p className="text-sm text-krmu-text-light leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-krmu-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-krmu-red font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Code Nemesis
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-krmu-navy mb-2">
              Meet the Team
            </h2>
            <p className="text-krmu-text-light">
              B.Tech CSE-D, Section 26E1152 · School of Engineering & Technology, KRMU
            </p>
          </div>

          {/* Supervisor */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-xl border border-krmu-border p-6 flex items-center gap-4 shadow-sm max-w-md w-full">
              <div className="w-14 h-14 rounded-full bg-krmu-navy flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-krmu-red tracking-wider uppercase">Project Supervisor</p>
                <p className="font-bold text-krmu-navy text-lg">Mr. Anurag Singh</p>
                <p className="text-xs text-krmu-text-light">
                  Department of Computer Science & Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-krmu-border p-5 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-krmu-red/10 flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-krmu-red" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-krmu-navy text-sm truncate">{member.name}</p>
                  <p className="text-xs text-krmu-text-light">{member.roll}</p>
                  <p className="text-xs font-medium text-krmu-red mt-0.5 flex items-center gap-1">
                    <span>{roleIcons[member.role]}</span>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
