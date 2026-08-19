import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4b2e83] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="UWROV Logo"
              width={140}
              height={50}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-purple-200 text-sm leading-relaxed">
              University of Washington&apos;s interdisciplinary underwater robotics RSO,
              competing at the MATE ROV World Championship since 2011.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Meet the Team", "/meet-the-team"],
                ["The Competition", "/competition"],
                ["ROVs", "/rovs"],
                ["Floats", "/floats"],
                ["Outreach & Sponsorship", "/outreach-and-sponsorship"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-purple-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Subteams</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Mechanical", "/subteams/mechanical"],
                ["Electrical", "/subteams/electrical"],
                ["Software", "/subteams/software"],
                ["Business", "/subteams/business"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-purple-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["GitHub", "https://github.com/uwrov"],
                ["Newsletter", "https://uwrov.substack.com"],
                ["Donate / TogetherUW", "https://together.uw.edu/campaign/uwrov2"],
                ["MATE Competition", "https://materovcompetition.org/"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-600 mt-10 pt-6 text-center text-purple-300 text-xs">
          © {new Date().getFullYear()} UWROV – University of Washington Remotely Operated Vehicles Team
        </div>
      </div>
    </footer>
  );
}