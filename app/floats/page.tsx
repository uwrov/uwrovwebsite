import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floats",
  description: "Learn about UWROV's autonomous float systems designed and built for the MATE ROV Competition.",
};

export default function FloatsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Our Floats
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Floats
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Our autonomous float systems designed and built for the MATE ROV Competition.
          </p>
        </div>
      </section>
    </div>
  );
}