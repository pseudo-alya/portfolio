import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";

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

export default function Experience() {
  return (
    <section id="experience" className="relative my-12 lg:my-24">
      <SectionTitle>Experiences</SectionTitle>

      <div className="py-8">
        {experiences.length === 0 ? (
          <div className="glass-card mx-auto max-w-2xl p-8 text-center">
            <BsPersonWorkspace className="mx-auto mb-4 text-4xl text-[#16f2b3]" />
            <p className="text-gray-300">
              Actively seeking my first Software Engineering / AI internship for{" "}
              <span className="text-white font-semibold">Summer 2026</span>.
              This section will fill up as I gain professional experience.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              In the meantime, take a look at the projects below.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <BsPersonWorkspace className="mt-1 text-2xl text-[#16f2b3]" />
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {exp.title}
                    </p>
                    <p className="text-sm text-[#16f2b3]">{exp.company}</p>
                    <p className="text-xs text-gray-400">{exp.duration}</p>
                    <p className="mt-2 text-sm text-gray-300 leading-6">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
