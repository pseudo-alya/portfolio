import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { personalData } from "@/utils/data/personalData";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-1/4 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left: intro */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 md:pb-16 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I&apos;m{" "}
            <span className="gradient-text">{personalData.name}</span>
            <br />
            <span className="text-2xl lg:text-3xl">{personalData.designation}</span>
          </h1>

          <p className="my-8 max-w-lg text-base leading-7 text-gray-300">
            {personalData.description}
          </p>

          <div className="flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="text-pink-500 text-2xl transition-all hover:scale-125 hover:text-[#16f2b3]">
              <FaGithub />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="text-pink-500 text-2xl transition-all hover:scale-125 hover:text-[#16f2b3]">
              <FaLinkedin />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-violet-600 hover:to-pink-500"
            >
              Contact me
            </Link>
            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-1 rounded-full border border-[#16f2b3] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#16f2b3] hover:text-[#0d1224]"
            >
              Resume <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right: code terminal */}
        <div className="order-1 lg:order-2 rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#020617] shadow-xl">
          <div className="flex flex-row">
            <div className="h-[1px] w-3.5 bg-pink-500 rounded" />
            <div className="h-[1px] w-full bg-gradient-to-r from-pink-500 to-violet-600 rounded" />
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-200" />
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'Alya Al Diqqi',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['Java', 'Python', 'C++', 'SQL', `}</span>
                <span className="text-gray-400">{`'ML', 'Databases'],`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">university:</span>
                <span className="text-orange-400">{`'AUS',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">graduating:</span>
                <span className="text-orange-400">{`'Spring 2026',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="mr-2 text-white">{`() {`}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-cyan-400">hardWorking</span>
                <span className="mr-2 text-amber-300">&amp;&amp;</span>
                <span className="text-cyan-400">fastLearner;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">{`}`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
