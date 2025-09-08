import { useState } from 'react';

function QA({q, a}:{q:string; a:string}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border bg-card rounded-xl mb-3 overflow-hidden shadow-sm">
      <button onClick={()=>setOpen(!open)} className="w-full text-left px-6 py-4 font-bold flex items-center justify-between text-card-foreground hover:bg-muted transition-colors">
        {q} <span className={`transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`px-6 overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-60 pb-4' : 'max-h-0'}`}>
        <p className="text-muted-foreground">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-secondary/5">
      <div className="max-w-3xl mx-auto px-10">
        <h2 className="reveal font-extrabold text-4xl md:text-5xl lg:text-6xl text-center leading-tight text-foreground mb-8" style={{fontFamily:'Montserrat'}}>FAQs</h2>
        <QA q="Do you deliver potable water?" a="Yes. We supply potable and non-potable water and can advise the best option for your job." />
        <QA q="How much can you deliver per load?" a="2,000 L trailers and 8,000 L / 13,000 L / 17,500 L trucks. Multiple loads can be scheduled for large fills." />
        <QA q="Do you handle tight access?" a="Yes. Our operators plan access and safety on every job, including tight sites." />
        <QA q="What areas do you service?" a="We service all of South Australia, with 24/7 emergency response available across the state." />
        <QA q="Are you fully licensed and insured?" a="Yes, we're fully licensed water carriers, AWA members, and carry comprehensive insurance. SWMS and risk assessments available on request." />
        <QA q="Is it spring water?" a="No, it's not spring water. We supply the same water that comes out of your taps." />
      </div>
    </section>
  );
}