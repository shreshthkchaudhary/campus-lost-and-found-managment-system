import { 
  ShieldCheck, 
  Lightbulb, 
  Cpu, 
  Sparkles, 
  GraduationCap, 
  User, 
  Code2, 
  Palette, 
  Database, 
  FileCheck2,
  ExternalLink 
} from 'lucide-react';
import { teamMembers } from '../data/items';

const getRoleIcon = (role) => {
  if (role.includes('UI') || role.includes('Design')) return Palette;
  if (role.includes('Database') || role.includes('MySQL')) return Database;
  if (role.includes('Testing') || role.includes('QA') || role.includes('Docs')) return FileCheck2;
  return Code2;
};

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Hero */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center max-w-4xl mx-auto mb-12">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200/50">
            Academic Project Overview
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            About the KRMU Lost & Found Portal
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Engineered by B.Tech CSE students at K.R. Mangalam University to replace manual, fragmented 
            notice boards with a unified, verified digital item recovery ecosystem.
          </p>
        </div>

        {/* 4 Foundation Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {[
            {
              icon: ShieldCheck,
              title: 'Problem Statement',
              desc: 'High footfall across campus blocks, labs, and hostels leads to frequent misplaced items without a unified central record.'
            },
            {
              icon: Lightbulb,
              title: 'Digital Solution',
              desc: 'A responsive web application enabling prompt reporting, filtering by verified campus zones, and safe institutional handovers.'
            },
            {
              icon: Cpu,
              title: 'Core Architecture',
              desc: 'Fast React 19 frontend styled with Tailwind CSS, backed by a structured REST API and MySQL schema for persistent records.'
            },
            {
              icon: Sparkles,
              title: 'Campus Features',
              desc: 'Multi-criteria directory search, role-based admin oversight, real-time status tracking, and student email verification.'
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <card.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Leadership & Supervisor */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Faculty Mentorship
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Project Supervisor
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 flex flex-col sm:flex-row items-center gap-5 max-w-md w-full shadow-sm text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-rose-600 tracking-wider uppercase">
                  Project Mentor
                </span>
                <p className="font-bold text-slate-900 text-lg">Mr. Anurag Singh</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Department of Computer Science & Engineering
                </p>
                <p className="text-[11px] text-slate-400">
                  School of Engineering & Technology, KRMU
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Development Team */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/50">
              Team Code Nemesis
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-2">
              Engineering Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              B.Tech CSE-D, Section 26E1152 · School of Engineering & Technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => {
              const RoleIcon = getRoleIcon(member.role);
              return (
                <div
                  key={i}
                  className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-slate-300 p-4 flex items-center gap-3.5 transition-all hover:shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <User size={18} className="text-slate-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm truncate">{member.name}</p>
                    <p className="text-[11px] text-slate-400 font-mono">Roll: {member.roll}</p>
                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 mt-0.5">
                      <RoleIcon size={12} />
                      <span>{member.role}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
