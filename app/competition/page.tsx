import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Competition",
  description: "UWROV competes in the Explorer Class of the MATE ROV World Championship.",
};

const results = [
  { year: "2024", placement: "8th Overall", note: "4th – Marketing Display, 5th – Technical Documentation" },
  { year: "2025", placement: "Top 10 + Innovation Award", note: "1st – Engineering Presentation & Technical Documentation, 1st – NOAA AI Challenge" },
  { year: "2026", placement: "9th Overall", note: "2nd - Engineering Presentation, 3rd - Technical Documentation" },
];

type GalleryPhoto = { src?: string; caption: string };
const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/pic1.jpg", caption: "Surface station during run" },
  { src: "/gallery/pic2.jpg", caption: "Surface station during run" },
  { src: "/gallery/pic3.jpg", caption: "Surface station during run" },
  { src: "/gallery/pic4.jpg", caption: "Surface station during run" },
  { src: "/gallery/pic5.jpg", caption: "Surface station during run" },
  { src: "/gallery/pic6.jpg", caption: "Surface station during run" },
  { src: "/gallery/pic7.jpg", caption: "Surface station during run" },
  { src: "/gallery/pic8.jpg", caption: "Surface station during run" },
];

export default function CompetitionPage() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
              MATE ROV Competition
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              The Competition
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">
              The MATE ROV Competition tasks students with building their own underwater
              remotely operated vehicles and float systems, developing skills crucial to 
              solving real-world ocean problems. We compete in the Explorer Class, which is the collegiate class in the competition,
              where teams are expected to perform at a high level from vehicle engineering and demonstrations to technical and marketing
              documentation.
            </p>
            <a
              href="https://materovcompetition.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4b2e83] hover:bg-[#3a2266] text-white font-semibold px-6 py-2.5 transition-colors inline-block"
            >
              MATE ROV Website
            </a>
          </div>
          <div className="overflow-hidden">
            <Image
              src="/gallery/main-pic.jpg"
              alt="Suzu, Arnav, and Imants setting up surface station at MATE ROV 2026 World Championships"
              width={1024}
              height={512}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Our Results</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            We&apos;ve placed within the top 10 consistently over the last several years.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.year} className="border-l-4 border-[#4b2e83] pl-5 py-1">
                <div className="text-gray-500 text-sm font-semibold mb-1">{r.year}</div>
                <div className="text-white font-bold text-lg mb-2">{r.placement}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">2026 MATE ROV World Championship Gallery</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Moments from our most recent trip to the MATE World Championship in St. John's, Newfoundland and Labrador.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden bg-black border border-dashed border-white/15 flex items-center justify-center"
              >
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-gray-600 text-xs uppercase tracking-wider">
                    {photo.caption}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}