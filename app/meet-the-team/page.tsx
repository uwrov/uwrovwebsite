import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the students leading UWROV — our chiefs and subteam leads working across mechanical, electrical, software, floats, and community.",
};

type Member = {
  name: string;
  role: string;
  grade: string;
  major: string;
  bio: string;
  image?: string; // path in /public, e.g. "/team/jane-doe.jpg" — omit to use placeholder initials
};

// --- CHIEFS -----------------------------------------------------------
// Edit name / grade / major / bio for each. Add `image: "/team/xxx.jpg"`
// once headshots are ready (drop the file into /public/team/).
const chiefs: Member[] = [
  {
    name: "Full Name",
    role: "Chief Executive Officer",
    grade: "Senior",
    major: "Major",
    bio: "One or two sentences about this person — background, what they lead, what they're excited about.",
  },
  {
    name: "Full Name",
    role: "Chief Technical Officer",
    grade: "Senior",
    major: "Major",
    bio: "One or two sentences about this person — background, what they lead, what they're excited about.",
  },
  {
    name: "Full Name",
    role: "Chief Administrative Officer",
    grade: "Senior",
    major: "Major",
    bio: "One or two sentences about this person — background, what they lead, what they're excited about.",
  },
];

// --- LEADS --------------------------------------------------------------
// 2 mechanical, 2 software, 1 electrical, 1 float, 1 community.
const leads: Member[] = [
  {
    name: "Full Name",
    role: "Mechanical Lead",
    grade: "Junior",
    major: "Major",
    bio: "One or two sentences about this person's role on the mechanical subteam.",
  },
  {
    name: "Full Name",
    role: "Mechanical Lead",
    grade: "Junior",
    major: "Major",
    bio: "One or two sentences about this person's role on the mechanical subteam.",
  },
  {
    name: "Full Name",
    role: "Software Lead",
    grade: "Junior",
    major: "Major",
    bio: "One or two sentences about this person's role on the software subteam.",
  },
  {
    name: "Full Name",
    role: "Software Lead",
    grade: "Junior",
    major: "Major",
    bio: "One or two sentences about this person's role on the software subteam.",
  },
  {
    name: "Full Name",
    role: "Electrical Lead",
    grade: "Junior",
    major: "Major",
    bio: "One or two sentences about this person's role on the electrical subteam.",
  },
  {
    name: "Full Name",
    role: "Float Lead",
    grade: "Junior",
    major: "Major",
    bio: "One or two sentences about this person's role leading the floats project.",
  },
  {
    name: "Full Name",
    role: "Community Lead",
    grade: "Junior",
    major: "Major",
    bio: "One or two sentences about this person's role on outreach and community.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
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
        <h3 className="text-white font-bold text-lg leading-snug">{member.name}</h3>
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
              engineering, operations, and community that make our ROVs possible.
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
            Our three chiefs — CEO, CTO, and CAO — share leadership of the team.
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Subteam Leads</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Leads run day-to-day work on mechanical, software, electrical, floats, and community.
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
    </div>
  );
}