import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";

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

export default function Experience() {
  return (
    <section id="experience" className="relative page-section">
      <SectionTitle>Experiences</SectionTitle>

      <div className="section-body card-stack">
        {experiences.map((exp) => (
          <div key={exp.id} className="glass-card p-6">
            <div className="flex items-start gap-4">
              <BsPersonWorkspace className="mt-1 text-2xl text-[#16f2b3]" />
              <div>
                <p className="text-lg font-semibold text-white">{exp.title}</p>
                <p className="text-sm text-[#16f2b3]">{exp.company}</p>
                <p className="text-xs text-gray-400">
                  {exp.duration}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
                <p className="mt-2 text-sm text-gray-300 leading-6">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
