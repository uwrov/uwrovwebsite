import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UWROV – UW Underwater Robotics Team",
  description:
    "Build underwater robots at UW. UWROV is an interdisciplinary club that designs, builds, and competes with ROVs at the MATE World Championship.",
};

const teams = [
  {
    name: "Mechanical",
    href: "/subteams/mechanical",
    description: "Designs and manufactures the frame, pressure hull, manipulator, and other systems using CAD software and rapid prototyping.",
    image: "https://uwrov.org/wp-content/uploads/2024/10/cad-boxfish.png",
  },
  {
    name: "Electrical",
    href: "/subteams/electrical",
    description: "Designs and supports electronic systems including internal circuitry, sensors, and thrusters. Uses ECAD to design custom circuit boards.",
    image: "https://uwrov.org/wp-content/uploads/2024/11/rasppipcb.png",
  },
  {
    name: "Software",
    href: "/subteams/software",
    description: "Develops command & control software including pilot interfaces, autonomous systems, machine learning, and computer vision.",
    image: "https://uwrov.org/wp-content/uploads/2022/11/screen-shot-2022-11-03-at-5.02.17-pm.png",
  },
  {
    name: "Business",
    href: "/subteams/business",
    description: "Organizes outreach, connects with sponsors, and composes competition-critical materials including marketing displays and technical documentation.",
    image: "https://uwrov.org/wp-content/uploads/2025/11/uwrov-marketing-display-2025-1-1.png",
  },
];

const achievements = [
  { stat: "Top 10", label: "MATE World Championship", sub: "5 consecutive years" },
  { stat: "1st", label: "Engineering Presentation", sub: "2025 MATE Championship" },
  { stat: "1st", label: "Technical Documentation", sub: "Published in Journal of Ocean Technology" },
  { stat: "1st", label: "Machine Learning Challenge", sub: "2025 MATE Championship" },
];

const openSource = [
  { label: "Conduit CAD & Documentation", href: "https://cad.onshape.com/documents/2431b47474912c7fcf9ae98a/v/e3a0675bc40d934690e92318/e/006fa2a35d00be74e44bb0da" },
  { label: "T-200 Thruster Guards", href: "https://uwrov.org/2023/06/23/uwrov-t-200-thruster-module/" },
  { label: "GitHub", href: "https://github.com/uwrov" },
  { label: "Past ROVs", href: "/rovs" },
  { label: "Past Floats", href: "/floats" }
];

export default function HomePage() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#4b2e83] text-white text-sm font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
              University of Washington
            </div>
            <h1 className="text-4xl sm:text-4xl font-black text-white leading-tight mb-6">
              Learn, Design,{" "}
              <span className="text-[#4b2e83]">Build.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              The Underwater Remotely Operated Vehicles Team (UWROV) at the University of Washington
              is an interdisciplinary RSO where students make underwater robots. Our unique mix of
              passion in both oceanography and engineering results in amazing ROVs and a fun team culture.
            </p>
            <p className="text-white font-semibold text-2xl mb-4">Would you like to join us?</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe82YhpZVW22KgC2KjTKcbZlaZlW_83nLEyGWaAmY9JyK_N-g/viewform"
                target="_blank" rel="noopener noreferrer"
                className="bg-[#4b2e83] hover:bg-[#3a2266] text-white font-semibold text-lg px-8 py-4 transition-colors">
                Applications
              </a>
              <Link href="/contact"
                className="bg-[#4b2e83] hover:bg-[#3a2266] text-white font-semibold text-lg px-8 py-4 transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="mb-4">
              <p className="text-white font-semibold text-2xl mb-2">Support Us:</p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://together.uw.edu/campaign/uwrov2" target="_blank" rel="noopener noreferrer"
                  className="text-[#a78bca] hover:text-white text-lg transition-colors">Together UW</a>
                <a href="/sponsors"
                  className="text-[#a78bca] hover:text-white text-lg transition-colors">Sponsors</a>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-2xl mb-2">Open Source Content:</p>
              <div className="flex flex-col gap-1">
                {openSource.map((r) => (
                  <a key={r.href} href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[#a78bca] hover:text-white text-lg transition-colors">
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="overflow-hidden">
              <Image
                src="/rov-cad.png"
                alt="UWROV underwater robot CAD render"
                width={600}
                height={450}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="sr-only">Achievements</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-center">
            {achievements.map((a) => (
              <div key={a.stat + a.label} className="p-6">
                <div className="text-4xl font-black text-[#4b2e83] mb-2">{a.stat}</div>
                <div className="text-white font-semibold text-lg mb-1">{a.label}</div>
                <div className="text-gray-400 text-base">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Who We Are</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                UWROV was founded over 10 years ago by UW Oceanography students interested in ocean
                technology and has continued to expand its scope to other engineering and marine science
                disciplines ever since. Our team has competed in the MATE ROV Competition since 2011,
                as well as supporting regional events through volunteering and mentorship.
              </p>
              <p>
                We continued our streak of top 10 finishes, placing 9th overall at the 2026 MATE World
                Championships, performing very well with our engineering presentation and technical documentation, 
                earning 2nd and 3rd place, respectively.
              </p>
              <p>
                We strive to continue giving UW students hands-on experience in ocean technology,
                interdisciplinary engineering, and professional skills.
              </p>
            </div>
            <div>
              <Image
                src="/team.JPG"
                alt="UWROV 2025-26 team photo"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our Work</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Four specialized sub-teams collaborate to design, build, and operate world-class ROVs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => (
              <Link key={team.name} href={team.href} className="overflow-hidden group block">
                <div className="h-48 overflow-hidden bg-gray-900">
                  <Image
                    src={team.image}
                    alt={`${team.name} team`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#a78bca] transition-colors">{team.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{team.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4b2e83] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Build the Future of Ocean Tech?
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Join UWROV and gain hands-on experience in underwater robotics, interdisciplinary engineering, and professional skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe82YhpZVW22KgC2KjTKcbZlaZlW_83nLEyGWaAmY9JyK_N-g/viewform"
              target="_blank" rel="noopener noreferrer"
              className="bg-black text-white font-bold px-8 py-3 hover:bg-gray-900 transition-colors">
              Apply Now
            </a>
            <Link href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}