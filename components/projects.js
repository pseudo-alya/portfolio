import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projectsData } from "@/utils/data/projects";

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

export default function Projects() {
  return (
    <section id="projects" className="relative my-12 lg:my-24">
      <SectionTitle>Projects</SectionTitle>

      <div className="flex flex-col gap-8 pt-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="glass-card p-6 lg:p-8 flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>
              <div className="flex items-center gap-4 text-xl">
                {project.code && (
                  <Link
                    href={project.code}
                    target="_blank"
                    className="text-gray-300 hover:text-[#16f2b3] transition-colors"
                    aria-label="Source code"
                  >
                    <FaGithub />
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-gray-300 hover:text-[#16f2b3] transition-colors"
                    aria-label="Live demo"
                  >
                    <FiExternalLink />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-sm text-[#16f2b3]">{project.subtitle}</p>

            {project.role && (
              <p className="text-xs uppercase tracking-wide text-violet-300">
                Role: {project.role}
              </p>
            )}

            <p className="text-sm text-gray-300 leading-7">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full bg-[#11152c] border border-[#1b2c68a0] px-3 py-1 text-xs text-gray-300"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
