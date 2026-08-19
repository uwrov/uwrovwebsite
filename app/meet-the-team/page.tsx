import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the students leading UWROV. Our chiefs and subteam leads work across mechanical, electrical, software, floats, and community.",
};

type Member = {
  name: string;
  role: string;
  grade: string;
  major: string;
  bio: string;
  image?: string;
  linkedin?: string;
};

const chiefs: Member[] = [
  {
    name: "Ellen Leier",
    role: "Chief Executive Officer",
    grade: "4",
    major: "Industrial Engineering",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/FILL_IN",
  },
  {
    name: "Marcus Kwek",
    role: "Chief Technical Officer",
    grade: "3",
    major: "Mechanical Engineering; Mechatronics",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/marcus-kwek-89609533b/",
  },
  {
    name: "Krishna Maanasa Ramadugu",
    role: "Chief Administrative Officer",
    grade: "2",
    major: "Computer Science",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/kmaanasar",
  },
];

const leads: Member[] = [
  {
    name: "Suzu Yoshikawa",
    role: "Mechanical Lead",
    grade: "4",
    major: "Microbiology; Education",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/suzuyoshi",
  },
  {
    name: "Emmett Van Mason",
    role: "Mechanical Lead",
    grade: "2",
    major: "Mechanical Engineering",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/FILL_IN",
  },
  {
    name: "Quinn Pfeifer",
    role: "Software Lead",
    grade: "4",
    major: "Computer Science",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/FILL_IN",
  },
  {
    name: "Arnav Jain",
    role: "Software Lead",
    grade: "2",
    major: "Mathematics",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/FILL_IN",
  },
  {
    name: "Aadithya Menon",
    role: "Electrical Lead",
    grade: "2",
    major: "Electrical and Computer Engineering",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/FILL_IN",
  },
  {
    name: "Abirami Subramanian",
    role: "Float Lead",
    grade: "3",
    major: "Informatics",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/FILL_IN",
  },
  {
    name: "Jerry Chan",
    role: "Community Lead",
    grade: "3",
    major: "Material Science and Engineering",
    bio: "BIO",
    linkedin: "https://www.linkedin.com/in/FILL_IN",
  },
];

const members: string[] = [
  "Melody Drewfs",
  "Chase Carson",
  "Lucy Carlisle",
  "Rachel Ha",
  "Ayla Crowell",
  "Lawrence Tang",
  "Ian Choy",
  "Carissa Willems",
  "Aarav Shah",
  "Logan Blondin",
  "Luke Wells",
  "Zoia Zinoveva",
  "Anuj Jung Thapa",
  "Rohan Rairkar",
  "Victor Wong",
  "Henry Quan Lam",
  "Dorah Wang",
  "Wanhao Zheng",
  "Kelly Kwok",
  "Gabrielle Rosario",
  "Srithan Reddy Nalla",
  "Sannie Wan",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function LinkedInIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="group">
      <div className="aspect-square w-full overflow-hidden bg-[#0a0a0a] border border-white/10">
        {member.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-black text-[#4b2e83]">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#a78bca] mb-1">
          {member.role}
        </p>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-white font-bold text-lg leading-snug">{member.name}</h3>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a78bca] hover:text-white transition-colors flex-shrink-0"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
        <p className="text-gray-400 text-sm mb-2">
          {member.grade} &middot; {member.major}
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function MeetTheTeamPage() {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#4b2e83] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-6">
              Our People
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              Meet the Team
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              UWROV is run entirely by students. Our chiefs and subteam leads coordinate the
              engineering, operations, and community that make our work possible.
            </p>
          </div>
          <div className="overflow-hidden">
            <Image
              src="/team.JPG"
              alt="UWROV team photo"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chiefs */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Chiefs</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Our three chiefs — CEO, CTO, and CAO.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {chiefs.map((member, i) => (
              <div key={i} className="w-full sm:w-[calc(50%_-_1rem)] lg:w-[calc(25%_-_1.5rem)]">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leads */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto pt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Leads</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Leads guide members working on projects in their domain and oversee safety.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {leads.map((member, i) => (
              <div key={i} className="w-full sm:w-[calc(50%_-_1rem)] lg:w-[calc(25%_-_1.5rem)]">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Members</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            The students who design, build, and operate our ROVs and Floats every season.
          </p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
            {members.map((name, i) => (
              <p key={i} className="text-white text-base border-b border-white/10 pb-3">
                {name}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}