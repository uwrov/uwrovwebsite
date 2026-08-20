import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Support UWROV — the University of Washington's underwater robotics team. See our sponsorship tiers and current partners.",
};

const currentSponsors = [
  { name: "MATE ROV", logo: "/sponsors/mate-rov-logo.png", url: "https://materovcompetition.org/" },
  { name: "APL UW", logo: "/sponsors/apl-logo.png", url: "https://www.apl.washington.edu/" },
  { name: "School of Oceanography", logo: "/sponsors/oceanography-logo.png", url: "https://www.ocean.washington.edu/" },
  { name: "Spokbee", logo: "/sponsors/spokbee-logo.png", url: "https://www.spokbee.com/" },
  { name: "Student Technology Fund", logo: "/sponsors/stf-logo.png", url: "https://techfee.uw.edu/" }
];

export default function SponsorsPage() {
  return (
    <div className="bg-black text-white">

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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Our Current Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {currentSponsors.map((sponsor, i) => (
              <a
                key={sponsor.name + i}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center h-24 w-48 bg-white border border-gray-800 p-4 hover:border-[#4b2e83] transition-colors"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  sizes="192px"
                  className="object-contain p-4"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4b2e83] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Interested in Sponsoring UWROV?
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Reach out to discuss sponsorship packages, or support us directly through
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