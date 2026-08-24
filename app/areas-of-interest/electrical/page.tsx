import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Electrical Area of Interest",
  description: "UWROV's Electrical area of interest designs and supports electronic systems including custom PCBs, sensors, and power systems using ECAD tools.",
};

type GalleryPhoto = { src?: string; caption: string };

const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/electrical1.jpg", caption: "Electrical team at work" },
  { src: "/gallery/electrical2.jpg", caption: "Electrical team at work" },
  { src: "/gallery/electrical3.jpg", caption: "Electrical team at work" },
  { src: "/gallery/electrical4.jpg", caption: "Electrical team at work" },
];

const sections = [
  {
    label: "Hardware Integration",
    description:
      "Using the fabrication shop, UWROV integrates sensors for depth, orientation, temperature, and other measurements critical to ROV operation and mission tasks. Soldering stations are utilized to design safe electrical connections and competition-compliant systems.",
    image: "/electrical/hull-cad.jpg",
    imageAlt: "Hull CAD model",
    imageLeft: false,
  },
  {
    label: "Circuit Design",
    description:
      "UWROV uses ECAD software, mainly KiCad and occasionally Altium, to design custom PCBs that handle power distribution, signal routing, and component selection for the ROV’s electronics.",
    image: "/electrical/esc-cad.jpg",
    imageAlt: "ESC CAD model",
    imageLeft: false,
  },
  {
    label: "Research and Development",
    description:
      "UWROV members research new ways to exceed previous electrical constraints. Current development includes a 48V thruster system that gives the ROV its maneuverability underwater.",
    image: "/electrical/thruster-cad.jpg",
    imageAlt: "Thruster CAD model",
    imageLeft: true,
  },
  {
    label: "Power Systems",
    description:
      "Power architecture managed by UWROV keeps all onboard systems running reliably during dives. Energy transmission is tested, measured, and controlled using equipment like oscilloscopes, multimeters, and cable testers.",
    image: "/electrical/cameras.jpg",
    imageAlt: "Cameras and sensors",
    imageLeft: true,
  },
];

export default function ElectricalPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Area of Interest
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Electrical
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            The Electrical area of interest designs and supports electronic systems including
            custom PCBs, sensors, and power systems using ECAD tools.
          </p>
        </div>
      </section>

      {/* What We Do — alternating layout */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">What We Do</h2>
          <div className="space-y-16">
            {sections.map((s, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  s.imageLeft ? "" : ""
                }`}
              >
                {s.imageLeft ? (
                  <>
                    <div className="aspect-video overflow-hidden bg-black border border-dashed border-white/15 flex items-center justify-center">
                      {s.image ? (
                        <Image
                          src={s.image}
                          alt={s.imageAlt}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-600 text-xs uppercase tracking-wider text-center px-4">
                          {s.imageAlt}
                        </span>
                      )}
                    </div>
                    <div className="border-l-4 border-[#4b2e83] pl-5">
                      <h3 className="text-white font-bold text-xl mb-3">{s.label}</h3>
                      <p className="text-gray-400 leading-relaxed">{s.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border-l-4 border-[#4b2e83] pl-5">
                      <h3 className="text-white font-bold text-xl mb-3">{s.label}</h3>
                      <p className="text-gray-400 leading-relaxed">{s.description}</p>
                    </div>
                    <div className="aspect-video overflow-hidden bg-black border border-dashed border-white/15 flex items-center justify-center">
                      {s.image ? (
                        <Image
                          src={s.image}
                          alt={s.imageAlt}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-600 text-xs uppercase tracking-wider text-center px-4">
                          {s.imageAlt}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Photo Gallery</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Moments from the Electrical team's design and build process.
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