import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-medium text-blue-400">Hi, I'm</p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Israel <span className="text-blue-500">Ibarhim</span>
          </h1>

          <h2 className="mt-3 text-xl font-medium text-slate-200">
            Full Stack Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
            I build modern, responsive and scalable web applications using the
            latest technologies. I'm passionate about turning ideas into real,
            functional products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View My Projects</Button>

            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* Profile */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative h-64 w-64 rounded-full border border-blue-500/70 p-2 shadow-[0_0_50px_rgba(37,99,235,0.12)] sm:h-80 sm:w-80">
            <div className="h-full w-full overflow-hidden rounded-full border border-slate-700">
              <img
                src="/image.png"
                alt="Runty Dev"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Decorative orbit */}
          <div className="absolute -right-4 top-5 hidden h-20 w-20 rounded-full border border-blue-500/20 lg:block" />
          <div className="absolute -left-8 bottom-10 hidden h-12 w-12 rounded-full border border-blue-500/20 lg:block" />

          <div className="absolute -right-16 top-4 hidden max-w-32 rotate-[-10deg] text-xs italic text-slate-400 lg:block">
            Turning ideas
            <br />
            into reality
            <span className="ml-2 text-blue-400">↙</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
