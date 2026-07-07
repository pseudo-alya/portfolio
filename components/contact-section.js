"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { personalData } from "@/utils/data/personalData";

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

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="relative my-12 lg:my-24">
      <SectionTitle>Contact</SectionTitle>

      <div className="section-body card-grid">
        {/* Contact info */}
        <div className="glass-card p-8 flex flex-col gap-6">
          <p className="text-xl font-semibold text-[#16f2b3]">
            Let&apos;s connect
          </p>
          <p className="text-sm text-gray-300 leading-7">
            Open to entry-level software engineering and cloud opportunities.
            Reach out through the form or any channel below.
          </p>

          <ul className="flex flex-col gap-4 text-sm text-gray-200">
            <li className="flex items-center gap-3">
              <MdEmail className="text-xl text-[#16f2b3]" />
              <Link href={`mailto:${personalData.email}`} className="hover:text-[#16f2b3]">
                {personalData.email}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-xl text-[#16f2b3]" />
              <Link href={`tel:${personalData.phone.replace(/\s/g, "")}`} className="hover:text-[#16f2b3]">
                {personalData.phone}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-xl text-[#16f2b3]" />
              <span>{personalData.address}</span>
            </li>
          </ul>

          <div className="flex items-center gap-5 text-2xl">
            <Link href={personalData.github} target="_blank" className="text-gray-300 hover:text-[#16f2b3] transition-colors">
              <FaGithub />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="text-gray-300 hover:text-[#16f2b3] transition-colors">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-[#1b2c68a0] bg-[#10122b] px-3 py-2 text-sm text-white outline-none focus:border-violet-500"
              placeholder="Firstname Lastname"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-[#1b2c68a0] bg-[#10122b] px-3 py-2 text-sm text-white outline-none focus:border-violet-500"
              placeholder="name@example.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-md border border-[#1b2c68a0] bg-[#10122b] px-3 py-2 text-sm text-white outline-none focus:border-violet-500 resize-none"
              placeholder="Hi Alya, I'd love to talk about..."
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-violet-600 hover:to-pink-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
