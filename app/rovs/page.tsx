import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROVs",
  description: "Explore the history of UWROV's underwater robots, from early designs to our latest competition ROV.",
};

export default function ROVsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Our Robots
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            ROVs
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Over a decade of underwater robots, each one building on the last.
          </p>
        </div>
      </section>
    </div>
  );
}