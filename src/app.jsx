import { Home, UserRound, Folder, FileText, Mail, Sparkles, ArrowRight } from 'lucide-react'

const links = [
  { name: 'Home', icon: Home, id: 'home' },
  { name: 'About', icon: UserRound, id: 'about' },
  { name: 'Projects', icon: Folder, id: 'projects' },
  { name: 'Resume', icon: FileText, id: 'resume' },
  { name: 'Contact', icon: Mail, id: 'contact' },
]

export default function App() {
  return (
    <div className="portfolio-bg stars min-h-screen text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-purple-500/20 px-6 py-5 md:px-12 lg:px-[10%]">
        <a href="#home" className="purple-text">
          <Sparkles size={34} />
        </a>

        <div className="flex flex-wrap justify-end gap-3 md:gap-6">
          {links.map(({ name, icon: Icon, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400"
            >
              <Icon size={20} />
              <span className="hidden sm:inline">{name}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="section-padding flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500 px-5 py-2 purple-text">
            <Sparkles size={18} /> Welcome to my portfolio!
          </p>

          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            Hi, I'm <span className="purple-text">Christine!</span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold md:text-2xl">
            BSIT Student & Aspiring Developer
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Welcome to my personal e-portfolio! Explore my background,
            educational journey, academic projects, and skills as an
            Information Technology student.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#about" className="purple-button flex items-center gap-2">
              About Me <ArrowRight size={18} />
            </a>
            <a href="#projects" className="rounded-full border border-purple-500 px-6 py-3 hover:bg-purple-500/20">
              View Projects
            </a>
          </div>
        </div>

        <img
          src="src\picture\profile.jpg"
          alt="Christine's profile"
          className="h-56 w-56 rounded-full border-4 border-purple-400 object-cover shadow-[0_0_35px_#9333ea] md:h-72 md:w-72 lg:h-
80 lg:w-80"
        />
      </section>

      {/* About */}
      <section id="about" className="section-padding border-t border-purple-500/20">
        <p className="purple-text font-bold tracking-widest">GET TO KNOW ME</p>
        <h2 className="mt-3 text-4xl font-bold">
          About <span className="purple-text">Me</span>
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <p className="leading-8 text-gray-300">
            I am a second-year Bachelor of Science in Information Technology
            student at Cavite State University - Tanza Campus. I am interested
            in technology and enjoy learning new skills through academic
            activities and projects.
          </p>

          <div className="glass-card p-6">
            <h3 className="mb-3 text-xl font-bold">My Interests</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>Web development and design</li>
              <li>Programming and problem-solving</li>
              <li>Database management</li>
              <li>Learning new technologies</li>
            </ul>
          </div>
        </div>
      </section>

<section id="projects" className="section-padding">
  <h2 className="text-3xl font-bold">
    My <span className="purple-text">Projects</span>
  </h2>

  <div className="mt-6 grid gap-6 md:grid-cols-2">

    {/* To-Do List */}
    <div className="glass-card overflow-hidden">
      <img
        src="src\picture\todo.png"
        alt="To-Do List Project"
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">To-Do List</h3>
        <p className="mt-3 text-gray-400">
          An application for organizing daily tasks.
        </p>

        <a
          href="https://todolistfranciachristine.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="purple-button mt-5 inline-block"
        >
          View Project
        </a>
      </div>
    </div>

    {/* Calculator */}
    <div className="glass-card overflow-hidden">
      <img
        src="src\picture\calcu.png"
        alt="Calculator Project"
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">Calculator</h3>
        <p className="mt-3 text-gray-400">
          A calculator for basic arithmetic operations.
        </p>

        <a
          href="https://francia-christine-calculator.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="purple-button mt-5 inline-block"
        >
          View Project
        </a>
      </div>
    </div>

  </div>
</section>
      {/* Resume and Contact */}
<section id="resume" className="section-padding">
  <h2 className="text-3xl font-bold">
    My <span className="purple-text">Resume</span>
  </h2>

  <div className="glass-card mt-5 p-6">
    <p className="text-gray-300">
      View or download my resume in PDF format.
    </p>

    <div className="mt-5 flex flex-wrap gap-4">
      <a
        href="https://canva.link/yf697dchz2zjxmk"
        target="_blank"
        rel="noreferrer"
        className="purple-button"
      >
        View Resume
      </a>

      <a
        href="src\resume.pdf "target="_blank"
        download="Christine-Resume.pdf"
        className="rounded-full border border-purple-500 px-6 py-3 hover:bg-purple-500/20"
      >
        Download Resume
      </a>
    </div>
  </div>
</section>

<section id="contact" className="section-padding">
  <h2 className="text-3xl font-bold">
    Contact <span className="purple-text">Me</span>
  </h2>

  <p className="mt-3 text-gray-400">
    Have a question or want to connect? Send me a message!
  </p>

  <form
    action="https://formsubmit.co/YOUR-EMAIL@example.com"
    method="POST"
    className="glass-card mt-6 max-w-2xl space-y-5 p-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full rounded-lg border border-purple-500/30 bg-white/5 p-3 text-white outline-none focus:border-purple-400"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full rounded-lg border border-purple-500/30 bg-white/5 p-3 text-white outline-none focus:border-purple-400"
    />

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      required
      className="w-full rounded-lg border border-purple-500/30 bg-white/5 p-3 text-white outline-none focus:border-purple-400"
    />

    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      required
      className="w-full rounded-lg border border-purple-500/30 bg-white/5 p-3 text-white outline-none focus:border-purple-400"
    />

    <input type="hidden" name="_captcha" value="true" />
    <input type="hidden" name="_subject" value="New Portfolio Message" />

    <button type="submit" className="purple-button">
      Send Message
    </button>
  </form>
</section>

      <footer className="border-t border-purple-500/20 p-5 text-center text-gray-500">
        © {new Date().getFullYear()} Christine's Portfolio
      </footer>
    </div>
  )
}