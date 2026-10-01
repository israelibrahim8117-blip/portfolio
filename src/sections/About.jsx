import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  return (
    <section id="about" className="border-t border-slate-800/70 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Passionate Developer Building Digital Experiences"
            />

            <p className="max-w-xl text-sm leading-7 text-slate-400">
              I'm a web developer with a strong interest in creating modern web
              applications. My journey started with curiosity and a love for
              problem-solving. I enjoy building clean, user-friendly interfaces
              and powerful backend systems.
            </p>

            <div className="mt-7">
              <Button href="/resume/Runty-Resume.pdf" variant="secondary">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "My Journey",
                text: "Started with HTML & CSS, now building full-stack applications with MERN.",
              },
              {
                title: "What I Enjoy",
                text: "Building web apps, solving problems, and learning new technologies.",
              },
              {
                title: "My Philosophy",
                text: "Clean code, better user experience, continuous learning.",
              },
              {
                title: "Currently Learning",
                text: "Advanced React, system design, cloud technologies.",
              },
              {
                title: "Career Goals",
                text: "Become a skilled full-stack developer, work on meaningful projects, and grow in the tech industry.",
              },
            ].map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
