import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { personalData } from "@/utils/data/personalData";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1b2c68a0] mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center gap-5">
        <div className="flex items-center gap-6 text-2xl">
          <Link href={personalData.github} target="_blank" className="text-gray-300 hover:text-[#16f2b3] transition-colors">
            <FaGithub />
          </Link>
          <Link href={personalData.linkedIn} target="_blank" className="text-gray-300 hover:text-[#16f2b3] transition-colors">
            <FaLinkedin />
          </Link>
          <Link href={`mailto:${personalData.email}`} className="text-gray-300 hover:text-[#16f2b3] transition-colors">
            <MdEmail />
          </Link>
        </div>
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} {personalData.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
