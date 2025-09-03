import React from "react";

export default function WaterQuality() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-10 text-center">
        <h2
          className="font-extrabold mb-6 text-3xl"
          style={{ fontFamily: "Montserrat" }}
        >
          Water Quality Assurance
        </h2>
        <p className="text-slate-700">
          More Civil delivers drinking water under the Safe Drinking Water Act. We source from approved supplies, test every
          load, and clean and disinfect our tanks daily so your water always meets SA Health standards.
        </p>
        <div
          className="mt-8 inline-block border-2 border-red-700 text-red-700 uppercase text-xs font-bold tracking-wider px-3 py-1 rotate-[-5deg]"
        >
          Government of South Australia – SA Health
        </div>
      </div>
    </section>
  );
}
