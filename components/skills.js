import { skillsData, skillsImage } from "@/utils/data/skills";

function SectionTitle({ children }) {
  return (
    <div className="section-heading">
      <div className="flex items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]" />
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          {children}
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]" />
      </div>
    </div>
  );
}

export default function Skills() {
  const marquee = [...skillsImage, ...skillsImage];

  return (
    <section id="skills" className="relative page-section">
      <SectionTitle>Skills</SectionTitle>

      {/* Marquee */}
      <div className="w-full overflow-hidden py-4 mb-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee">
          {marquee.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] px-5 py-3 text-sm text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Grouped skill cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((group) => (
          <div key={group.category} className="glass-card p-6">
            <h3 className="text-lg font-semibold text-[#16f2b3] mb-4">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-[#11152c] border border-[#1b2c68a0] px-3 py-1 text-xs text-gray-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
