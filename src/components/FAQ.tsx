import { useState } from 'react';

function QA({q, a}:{q:string; a:string}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal border border-slate-200 bg-white rounded-xl mb-3 overflow-hidden shadow-sm">
      <button
        onClick={()=>setOpen(!open)}
        className="w-full text-left px-6 py-4 font-bold flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        {q}
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-90' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className={`px-6 overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-60 pb-4' : 'max-h-0'}`}>
        <p className="text-slate-700">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal font-extrabold text-3xl mb-8 text-center" style={{fontFamily:'Montserrat'}}>FAQs</h2>
        <QA q="Do you deliver potable water?" a="Yes. We supply potable and non-potable water and can advise the best option for your job." />
        <QA q="How much can you deliver per load?" a="2,000 L trailers and 8,000 L / 13,000 L / 17,500 L trucks. Multiple loads can be scheduled for large fills." />
        <QA q="Do you handle tight access?" a="Yes. Our operators plan access and safety on every job, including tight sites." />
        <QA q="What areas do you service?" a="We service all of South Australia, with 24/7 emergency response available across the state." />
        <QA q="Are you fully licensed and insured?" a="Yes, we're fully licensed water carriers, AWA members, and carry comprehensive insurance. SWMS and risk assessments available on request." />
      </div>
    </section>
  );
}