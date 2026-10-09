import type { Metadata } from "next";
import Image from "next/image";
import ScrollImage from "./scrollimage";  
import DesignRationale from "./designrationale";

export const metadata: Metadata = {
  title: "Floats",
  description: "Learn about UWROV's autonomous float systems designed and built for the MATE ROV Competition.",
};

export default function FloatsPage() {

type GalleryPhoto = { src?: string; caption: string };

const galleryPhotos: GalleryPhoto[] = [
  { src: "/float/float-1.png", caption: "Float development/deployment" },
  { src: "/float/float-2.png", caption: "Float development/deployment" },
  { src: "/float/float-3.png", caption: "Float development/deployment" },
  { src: "/float/float-4.png", caption: "Float development/deployment" },
  { src: "/float/float-5.jpg", caption: "Float development/deployment" },
  { src: "/float/float-6.png", caption: "Float development/deployment" },
];

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-28 pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
            Our Floats
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-2">
            Floats
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            UWROV's autonomous float systems designed and built for the MATE ROV Competition.
          </p>
        </div>
      </section>

      <section className="pb-5 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">NanoFloat 2.0</h2>
          <p className="text-gray-400 mb-2 max-w-2xl">
              NanoFloat 2.0 is our latest autonomous float system. 
          </p>
          <ScrollImage />
        </div>
      </section>

      <DesignRationale />

      <section className="py-8 px-4 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Highlighted activities
            </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">

          <div>
            <div className="overflow-hidden mb-5">
              <Image
                src="/float/nanofloat_ieeeoceans.jpeg"
                alt="UWROV members presenting at the IEEE OCEANS Monterey 2026 Conference."
                width={200}
                height={100}
                className="w-full object-cover"
              />
            </div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-3">
              Professional Development
            </div>
            <h3 className="text-xl font-bold text-white mb-3">IEEE OCEANS Monterey 2026</h3>
            <p className="text-gray-400 leading-relaxed">
              At the IEEE OCEANS Monterey 2026 conference, UWROV members Abirami Subramanian and Krishna Maanasa Ramadugu presented the newest iteration of <em>"Development of nanOS: Profiling Float Firmware System"</em>.
            </p>
            <p className="text-gray-400 leading-relaxed py-4">
              The poster detailed <em>NanoFloat 2.0</em>'s electrical structure and demonstrated the architecture of it's custom firmware, nanOS. 
              It also included real data collected from <em>NanoFloat 2.0</em>'s deployments and potential research applications for the float's data collection capabilities
              in marine carbon dioxide removal verification.
            </p>
          </div>

          <div>
            <div className="overflow-hidden mb-5">
              <Image
                src="/float/mate_floats_worksop_pres.jpg"
                alt="UWROV members presenting at the MATE Floats! Summer Workshop at the University of Washington."
                width={200}
                height={100}
                className="w-full object-cover"
              />
            </div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-3">
              Volunteering
            </div>
            <h3 className="text-xl font-bold text-white mb-3">MATE Floats! Summer Workshop Presentation</h3>
            <p className="text-gray-400 leading-relaxed">
               UWROV members Suzu Yoshikawa, Krishna Maanasa Ramadugu, and Luke Wells presented about NanoFloat 2.0 at the MATE Floats! Summer Workshop at the University of Washington.
            </p>
          </div>

          <div>
            <div className="overflow-hidden mb-5">
              <Image
                src="/float/nanofloat-tides.jpg"
                alt="UWROV members presenting at the TIDES 2026 Ocean Conference."
                width={200}
                height={100}
                className="w-full object-cover"
              />
            </div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-3">
              Professional Development
            </div>
            <h3 className="text-xl font-bold text-white mb-3">TIDES Conference 2026</h3>
            <p className="text-gray-400 leading-relaxed">
              At the TIDES Conference 2026, UWROV members Abirami Subramanian and Krishna Maanasa Ramadugu presented <em>"Development of nanOS: Profiling Float Firmware System"</em>.
            </p>
            <p className="text-gray-400 leading-relaxed py-4">
              The poster provided context on  <em>NanoFloat 2.0</em>'s electrical structure and highlighted the architecture of it's custom firmware, nanOS. 
              It was accompanied by a live demo of nanOS's radio and WIFI data transmission capabilties using the Blue Robotics Bar-30 sensor. 
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-8 px-4 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Past Floats
            </h2>
        </div>
      </section> */}

      <section className="py-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Photo Gallery</h2>
                <p className="text-gray-400 mb-10 max-w-2xl">
                  Moments from the Float's development and deployment.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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