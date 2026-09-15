import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Past ROVs",
  description:
    "A look back at every ROV UWROV has built since 2011, from Casus to Conduit.",
};

type Rov = {
  name: string;
  years: string;
  blurb: string;
  result?: string;
  links?: { label: string; href: string }[];
  image?: string;
};

const currentRov: Rov = {
  name: "Conduit",
  years: "2025–2026",
  blurb:
    "In a radical redesign from UWROV's past ROVs, Conduit incorporates an array of refinements and new solutions based on lessons learned from Boxfish 2.0. The vehicle utilizes a rotating buoyancy arm system to passively maintain pitch, allowing for simpler controls. A gantry system inspired by a CoreXY 3D printer allows for precise control of the manipulator and greater flexibility in missions. The gantry system synergizes with the novel tool switching system, allowing the ROV to hot swap manipulators underwater without returning to the surface for improved mission efficiency.",
  result:
    "Top 10 overall placement at the 2026 MATE ROV World Championships, plus a company record in pool demos.",
  links: [
    {
      label: "Conduit CAD",
      href: "https://cad.onshape.com/documents/2431b47474912c7fcf9ae98a/v/e3a0675bc40d934690e92318/e/006fa2a35d00be74e44bb0da",
    },
    {
      label: "Conduit Technical Documentation",
      href: "#",
    },
  ],
  image: "/rov-cad.png",
};

const pastRovs: Rov[] = [
  {
    name: "Boxfish 2.0",
    years: "2024–2025",
    blurb:
      "Building upon the foundation of the previous year's ROV Boxfish, Boxfish 2.0 introduces a suite of innovations in both hardware and software. The vehicle features a redesigned manipulator system for greater dexterity, upgraded control software for smoother operation, and enhanced reliability across missions.",
    result:
      "Innovation Award and a Top 10 overall placement at the 2025 MATE ROV World Championships.",
    links: [
      { label: "Boxfish 2.0 CAD", href: "https://cad.onshape.com/documents/b552b8a10e5ba0f2e8b8d98f/w/d73461d7e6c29a09c69c034b/e/b2adaa076967a7831fcccb27" },
      { label: "Boxfish 2.0 Technical Documentation", href: "http://thejot.net/article-preview/?show_article_preview=1666" },
    ],
    image: "/rovs/boxfish-2-0.png",
  },
  {
    name: "Boxfish",
    years: "2023–2024",
    blurb:
      "Boxfish reiterates on the design of ROV Barreleye, featuring a more robust modular manipulator system, easily adjustable ballasting, updated software, and more. Boxfish is named after the tropical boxfish (Ostracion cubicus) because of its resemblance to the ROV in shape and coloration.",
    result:
      "8th place at the 2024 MATE ROV World Championships (Kingsport, Tennessee) and new company records for in-pool performance.",
    links: [
      { label: "Boxfish CAD", href: "https://cad.onshape.com/documents/708ef7b2d84cc3d41cbb8714/w/3c9d928e347628ae9a3dec7b/e/59368aacfd422aebf028aee6" },
    ],
    image: "/rovs/boxfish.png",
  },
  {
    name: "Barreleye",
    years: "2021–2023",
    blurb:
      "Barreleye is named after the real-life barreleye fish due to the ROV's iconic clear pressure hull that mimics the clear forehead of the real-life barreleye fish. Barreleye features custom made components, the first edition of the modular manipulator system, and a fully overhauled electrical system.",
    result:
      "2nd place at the 2022 MATE ROV World Championships (Long Beach, California) and 9th at the 2023 Championships (Longmont, Colorado). Its technical documentation was also published in the Journal of Ocean Technology.",
    links: [
      { label: "Barreleye CAD", href: "https://cad.onshape.com/documents/6d93bb1d9fe2a2bcdcd7b9d8/w/05a9ba3e7657f73bbb736484/e/ba71ed40db310306f0825db3" },
      { label: "Barreleye Technical Documentation", href: "https://www.thejot.net/article-preview/?show_article_preview=1476" },
      { label: "Barreleye Reveal Video", href: "https://www.youtube.com/watch?v=DPvauXS2nJE" },
    ],
    image: "/rovs/barreleye.png",
  },
  {
    name: "Nautilus",
    years: "2020–2021",
    blurb:
      "Nautilus is the product of major overhauls of control and surface systems, a redesigned GUI, and an aggressively cut down frame. Built mainly via online operations during the 2020-2021 season, Nautilus is the result of tireless work by UWROV members.",
    result: "6th place at the 2021 MATE World Championships in Johnson City, Tennessee.",
    links: [{ label: "Nautilus CAD Model", href: "https://cad.onshape.com/documents/b643bde957afced615cce3a5/w/f2b77404874607ee45551c96/e/9e6600d298eebd7ba3eda5df" }],
    image: "/rovs/nautilus.png",
  },
  {
    name: "Admare",
    years: "2014–2015",
    blurb:
      "Admare was designed for the 2015 MATE International ROV Competition in St. John's, Newfoundland, with a focus on Arctic operations like under ice exploration, pipeline inspection, and subsea maintenance. The vehicle builds on ROV Orcus with a reinforced HDPE frame, modular pressure housings, and a pneumatic manipulator capable of precise underwater movements. Featuring six Blue Robotics T100 thrusters and a digital Ethernet based control system, Admare offered improved efficiency and maneuverability at greater depths.",
    result:
      "Competed at the 2015 World Championships, where the vehicle's innovative pneumatic systems and design received recognition for technical excellence.",
    links: [{ label: "Admare Technical Documentation", href: "https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/TechReportArchives/2015/University_Washington_TechnicalReportfinal.pdf" }],
    image: "/rovs/admare.png",
  },
  {
    name: "Orcus",
    years: "2013–2014",
    blurb:
      "Orcus was built as a durable and adaptable ROV platform designed for both competition and research. Its design features include dual acrylic pressure housings, a holonomic propulsion system with six Seabotix thrusters, and a marine grade polycarbonate frame machined at the UW Composites Lab. The ROV integrates modular electronics, dual cameras, and an intuitive Python based GUI for precise control and feedback.",
    result:
      "Competed in the 2014 MATE International ROV Competition, where the vehicle's performance and engineering documentation earned recognition for innovation and reliability. Orcus later acted as a foundation for future ROV designs and student research in subsea sensing and technology development.",
    links: [{ label: "Orcus Technical Documentation", href: "https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/TechReportArchives/2014/UWROV_Tech_Report.pdf" }],
    image: "/rovs/orcus.png",
  },
  {
    name: "Casus",
    years: "2011–2012",
    blurb:
      "Casus was the University of Washington's first ROV to compete internationally at the 2012 MATE ROV World Championships in Orlando, Florida. Built in just five months, Casus featured a modular aluminum frame, an Arduino based control system, and a pneumatic manipulator designed for precision underwater tasks. The vehicle was equipped with three cameras, a custom oil extraction system, and a lift bag tool for mission specific operations.",
    result:
      "Laid the foundation for future UWROV designs, emphasizing adaptability, teamwork, and the pursuit of innovative marine technology solutions.",
    links: [{ label: "Casus Technical Documentation", href: "https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/TechReportArchives/2012/University%20of%20WA%20Tech_Report_2012_Casus_Final_Copy.pdf" }],
    image: "/rovs/casus.png",
  },
];

function RovImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-[4/3] overflow-hidden bg-black border border-dashed border-white/15 flex items-center justify-center">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={600}
          height={450}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-gray-600 text-xs uppercase tracking-wider px-4 text-center">
          {alt}
        </span>
      )}
    </div>
  );
}

export default function RovsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Since 2011
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Past ROVs
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Every year, UWROV designs and builds a new ROV from the ground up. Each vehicle
            builds on the lessons of the one before it.
          </p>
        </div>
      </section>

      {/* Current ROV — featured */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Current ROV
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RovImage src={currentRov.image ?? ""} alt={`${currentRov.name} ROV`} />
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-4xl font-black text-white">{currentRov.name}</h2>
                <span className="text-gray-500 text-lg">{currentRov.years}</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{currentRov.blurb}</p>
              {currentRov.result && (
                <p className="text-[#a78bca] font-semibold leading-relaxed mb-4">
                  {currentRov.result}
                </p>
              )}
              <div className="flex flex-wrap gap-3 mt-2">
                {currentRov.links?.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#4b2e83] hover:bg-[#3a2266] text-white font-semibold px-6 py-2.5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past ROVs — alternating rows */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">The Archive</h2>
          <p className="text-gray-400 mb-16 max-w-2xl">
            Fourteen years of design iteration, one ROV at a time.
          </p>

          <div className="flex flex-col gap-20">
            {pastRovs.map((rov, i) => (
              <div
                key={rov.name}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <RovImage src={rov.image ?? ""} alt={`${rov.name} ROV`} />
                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{rov.name}</h3>
                    <span className="text-gray-500">{rov.years}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{rov.blurb}</p>
                  {rov.result && (
                    <p className="text-[#a78bca] text-sm font-semibold leading-relaxed mb-4">
                      {rov.result}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {rov.links?.map((link) => (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a78bca] hover:text-white text-sm underline transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}