import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Competition",
  description: "UWROV competes in the Explorer Class of the MATE ROV World Championship — the most advanced student ROV competition in the world.",
};

export default function CompetitionPage() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            MATE ROV Competition
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
            The Competition
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            We compete in the Explorer Class of the MATE ROV Competition — the most advanced
            class in the world&apos;s premier student ROV competition.
          </p>
        </div>
      </section>

      {/* About MATE / Explorer Class */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 bg-[#0a0a0a] p-8">
            <h2 className="text-xl font-bold text-white mb-4">About MATE</h2>
            <Image
              src="https://uwrov.org/wp-content/uploads/2024/11/bluemate.png"
              alt="MATE ROV Competition logo"
              width={225}
              height={100}
              className="mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              The MATE ROV Competition tasks students with building their own underwater
              robots and developing skills crucial to solving real-world ocean problems.
            </p>
          </div>
          <div className="border border-white/10 bg-[#0a0a0a] p-8">
            <h2 className="text-xl font-bold text-white mb-4">Explorer Class</h2>
            <p className="text-gray-400 leading-relaxed">
              The Explorer Class is the most advanced class within the MATE competition.
              Competitors are expected to perform at a higher level and more professionally
              than teams in other classes.
            </p>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto overflow-hidden">
          <Image
            src="https://uwrov.org/wp-content/uploads/2024/11/mate-2023_day-2-330.jpg"
            alt="UWROV team at the 2023 MATE World Championship"
            width={1024}
            height={512}
            className="w-full object-cover max-h-80"
          />
        </div>
      </section>

      {/* Our History / Learn More */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto pt-20 grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 bg-black p-8">
            <h2 className="text-xl font-bold text-white mb-4">Our History</h2>
            <Image
              src="https://uwrov.org/wp-content/uploads/2024/11/20231210_155655.jpg"
              alt="UWROV team photo"
              width={400}
              height={250}
              className="w-full mb-4 object-cover"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              We have historically performed very well at the World MATE Competition,
              placing within the top 10 consistently for the last four years.
            </p>
            <Link
              href="/past-rovs"
              className="text-[#a78bca] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold"
            >
              Past ROVs →
            </Link>
          </div>
          <div className="border border-white/10 bg-black p-8">
            <h2 className="text-xl font-bold text-white mb-4">Learn More</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Visit the official MATE Competition website to learn more about rules, themes,
              and results.
            </p>
            <a
              href="https://materovcompetition.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4b2e83] hover:bg-[#3a2266] text-white font-semibold px-6 py-2.5 transition-colors inline-block"
            >
              MATE Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}