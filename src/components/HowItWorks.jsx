import { UserCheck, FileEdit, SearchCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: FileEdit,
    title: 'Report Your Item',
    desc: 'Specify key details including location (Cafeteria, Library, Block A), date, item category, and unique identifying features.'
  },
  {
    num: '02',
    icon: SearchCheck,
    title: 'Instant Campus Search',
    desc: 'Our real-time search engine immediately cross-references keywords, categories, and verified campus zones.'
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Safe Campus Contact',
    desc: 'Connect directly with verified students or department officials via institutional university email.'
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Verified Handover',
    desc: 'Meet securely at authorized campus security counters or the DSW office to reclaim your property safely.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200/50">
            Streamlined Protocol
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
            How Campus Recovery Works
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Designed to ensure lost assets are reported accurately and returned safely to rightful owners across all departments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-rose-600">
                    <step.icon size={20} />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60">
                <span className="text-[11px] font-semibold text-slate-400">Step {i + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
