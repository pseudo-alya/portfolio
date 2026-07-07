import { BsFillMortarboardFill } from "react-icons/bs";
import { educationsData } from "@/utils/data/educations";

function SectionTitle({ children }) {
  return (
    <div className="flex justify-center my-5 lg:py-8">
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

export default function Education() {
  return (
    <section id="education" className="relative my-12 lg:my-24">
      <SectionTitle>Education</SectionTitle>

      <div className="section-body card-grid">
        {educationsData.map((edu) => (
          <div key={edu.id} className="glass-card p-6 flex gap-4">
            <BsFillMortarboardFill className="mt-1 text-3xl text-[#16f2b3] shrink-0" />
            <div>
              <p className="text-lg font-semibold text-white">{edu.title}</p>
              <p className="text-sm text-gray-300">{edu.institution}</p>
              <p className="text-xs text-violet-300 mt-1">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
