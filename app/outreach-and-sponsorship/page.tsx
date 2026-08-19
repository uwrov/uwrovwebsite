import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Support UWROV — the University of Washington's underwater robotics team. See our sponsorship tiers and current partners.",
};

const currentSponsors = [
  { name: "Sponsor Name", logo: "/sponsors/placeholder-1.png" },
  { name: "Sponsor Name", logo: "/sponsors/placeholder-2.png" },
  { name: "Sponsor Name", logo: "/sponsors/placeholder-3.png" },
  { name: "Sponsor Name", logo: "/sponsors/placeholder-4.png" },
  { name: "Sponsor Name", logo: "/sponsors/placeholder-5.png" },
  { name: "Sponsor Name", logo: "/sponsors/placeholder-6.png" },
];

export default function SponsorsPage() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Partner With Us
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Become a <span className="text-[#4b2e83]">Sponsor</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            UWROV relies on the generosity of sponsors to design, build, and compete with
            underwater robots at the MATE World Championship. Your support gives students
            hands-on experience in ocean technology and interdisciplinary engineering.
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Our Current Sponsors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {currentSponsors.map((sponsor, i) => (
              <div
                key={sponsor.name + i}
                className="flex items-center justify-center h-24 bg-white/5 border border-gray-800 p-4"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={140}
                  height={70}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4b2e83] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Interested in Sponsoring UWROV?
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Reach out to discuss sponsorship opportunities, or support us directly through
            Together UW.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:uwrov@uw.edu"
              className="bg-black text-white font-bold px-8 py-3 hover:bg-gray-900 transition-colors"
            >
              Contact Us About Sponsoring
            </a>
            <a
              href="https://together.uw.edu/campaign/uwrov2"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-8 py-3 hover:bg-white/10 transition-colors"
            >
              Donate via Together UW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}