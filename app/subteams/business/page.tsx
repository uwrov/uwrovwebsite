import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Business Subteam",
  description: "UWROV's Business subteam organizes outreach, connects with sponsors, and produces documentation and marketing materials for competition.",
};

export default function BusinessPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
              Subteam
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              Business
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              The Business subteam organizes outreach, connects with sponsors, and composes
              competition-critical materials including marketing displays and
              documentation.
            </p>
          </div>
          <div>
            <div className="overflow-hidden">
              <Image
                src="/business/2026-marketing-display.PNG"
                alt="UWROV 2026 marketing display"
                width={600}
                height={450}
                className="w-full object-cover"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm text-center mt-2">
              2026 MATE ROV Marketing Display
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Cost & Accounting</h3>
              <p className="text-gray-400 leading-relaxed">
                We manage the team's budget and track all expenses throughout the season,
                maintaining detailed cost accounting records to ensure responsible use of
                funds across materials, manufacturing, and travel.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Marketing Display</h3>
              <p className="text-gray-400 leading-relaxed">
                We design and produce the marketing display presented at competition,
                showcasing our ROV and team to judges and other teams.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Sponsorship</h3>
              <p className="text-gray-400 leading-relaxed">
                We reach out to and manage relationships with sponsors who help fund
                the team's materials, travel, and competition fees.
              </p>
            </div>
            <div className="border-l-4 border-[#4b2e83] pl-5">
              <h3 className="text-white font-bold text-lg mb-2">Outreach</h3>
              <p className="text-gray-400 leading-relaxed">
                We organize outreach events including workshops that introduce
                K-12 students to underwater robotics and ocean technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">Highlighted Activities</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="overflow-hidden mb-5">
                <Image
                  src="/business/biz-tides-poster.PNG"
                  alt="UWROV Business subteam TIDES 2026 poster"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-3">
                Professional Development
              </div>
              <h3 className="text-xl font-bold text-white mb-3">TIDES 2026</h3>
              <p className="text-gray-400 leading-relaxed mb-3">
                At TIDES 2026, UWROV members Suzu Yoshikawa, Krishna Maanasa Ramadugu, Ellen
                Leier, and Rowan Newell presented <em>&ldquo;Student ROV Teams: Bridging the
                Gap Between Students and the Blue Economy.&rdquo;</em>
              </p>
              <p className="text-gray-400 leading-relaxed">
                The poster shared survey results from 22 members showing statistically
                significant growth in both technical and professional skills gained through
                UWROV, along with what members want from industry going forward.
              </p>
            </div>

            <div>
              <div className="overflow-hidden mb-5">
                <Image
                  src="/business/liasus-fuscus-tour.jpg"
                  alt="UWROV giving a shop tour and presentation to Liasus Fuscus, the Tesla STEM ROV team"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-3">
                Mentorship
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Liasus Fuscus Mentorship</h3>
              <p className="text-gray-400 leading-relaxed">
                UWROV hosted Liasus Fuscus, the Tesla STEM High School ROV team, for a shop
                tour and presentation, sharing our design process and mentoring teams in the Ranger class.
              </p>
            </div>

            <div>
              <div className="overflow-hidden mb-5">
                <Image
                  src="/business/regionals-volunteering.PNG"
                  alt="UWROV members volunteering at the MATE PNW Regionals competition"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-3">
                Volunteering
              </div>
              <h3 className="text-xl font-bold text-white mb-3">MATE PNW Regionals</h3>
              <p className="text-gray-400 leading-relaxed">
                UWROV members volunteered at the MATE PNW Regionals competition, supporting
                the next wave of student ROV teams as they competed to advance to Worlds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}