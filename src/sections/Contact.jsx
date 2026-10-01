import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

${formData.message}
    `;

    const mailtoUrl = `mailto:your@email.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;

    setStatus("Your email application is opening...");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="border-t border-slate-800/70 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Get In Touch" title="Let's Work Together" />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact info */}
          <div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Have a project in mind or want to say hello? I'd love to hear from
              you. Feel free to reach out using the form or connect with me
              directly.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:israelibrahim8117@gmail.com"
                className="flex items-center gap-4 text-sm text-slate-300 hover:text-blue-400"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700">
                  @
                </span>
                israelibrahim8117@gmail.com
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm text-slate-300 hover:text-blue-400"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700">
                  GH
                </span>
                github.com/israelibrahim8117
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm text-slate-300 hover:text-blue-400"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700">
                  IN
                </span>
                linkedin.com/in/yourusername
              </a>
            </div>

            <div className="mt-7">
              <SocialLinks />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs text-slate-400"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-md border border-slate-700 bg-[#07111e] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs text-slate-400"
              >
                Your Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-md border border-slate-700 bg-[#07111e] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs text-slate-400"
              >
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-[#07111e] px-4 py-3 text-sm text-slate-300 outline-none focus:border-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="Website Project">Website Project</option>
                <option value="React Application">React Application</option>
                <option value="Full Stack Project">Full Stack Project</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs text-slate-400"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="1"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="min-h-11.5 w-full resize-none rounded-md border border-slate-700 bg-[#07111e] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {status && (
              <p className="text-xs text-blue-400 sm:col-span-2">{status}</p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Send Message
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
