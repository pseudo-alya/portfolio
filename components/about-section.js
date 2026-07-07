import ProfileAvatar from "@/components/profile-avatar";
import { personalData } from "@/utils/data/personalData";
import { languagesData, softSkillsData } from "@/utils/data/extras";

export default function AboutSection() {
  return (
    <section id="about" className="my-12 lg:my-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            About me
          </p>
          <p className="text-gray-200 text-sm lg:text-base leading-7">
            I recently completed my B.Sc. in Computer Science at the American
            University of Sharjah, and I&apos;m now interning in the IT
            department&apos;s Applications section at the Sharjah Private
            Education Authority. My senior design project centered on an
            AI-based toxic gas leak detection and evacuation system, combining
            sensor data and computer vision for real-time risk assessment.
            I&apos;m especially drawn to backend engineering, machine learning,
            and cloud development, and I enjoy turning messy real-world problems
            into reliable systems.
          </p>

          <div className="mt-8">
            <p className="font-medium mb-3 text-[#16f2b3] text-lg uppercase">
              Languages
            </p>
            <ul className="flex flex-wrap gap-3">
              {languagesData.map((lang) => (
                <li
                  key={lang.name}
                  className="glass-card px-4 py-2 text-sm text-gray-200"
                >
                  <span className="font-semibold text-white">{lang.name}</span>{" "}
                  <span className="text-gray-400">· {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-medium mb-3 text-[#16f2b3] text-lg uppercase">
              Soft Skills
            </p>
            <ul className="flex flex-wrap gap-2">
              {softSkillsData.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[#1b2c68a0] px-3 py-1 text-xs text-gray-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative h-72 w-72 lg:h-80 lg:w-80 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-violet-600">
            <div className="h-full w-full rounded-full overflow-hidden bg-[#0d1224] flex items-center justify-center">
              <ProfileAvatar
                src={personalData.profile}
                alt={personalData.name}
                initials="AA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
