import React, { useState, useEffect } from 'react';
import myImage from './tgn.png';
import contact_img from './contact.png';
//Data for the portfolio
const mockData = {
  about: {
    name: "Tungon Dugi",
    role: "Fulltime PhD Scholar with expertise in AI and NLP.",
    summary:
      "A dedicated researcher at the crossroads of Linguistics, Natural Language Processing, and Machine Translation, passionately working to bring low-resource languages into the digital age. With a deep fascination for how language shapes human connection, I specialize in developing cutting-edge AI models and building rich linguistic resources that preserve endangered languages and make them accessible globally.\nMy work spans from digitizing indigenous Arunachalee languages like Tagin, Nyishi, and Tawra, to designing neural machine translation systems that break communication barriers for underrepresented communities. I thrive on the challenge of transforming scarce data into powerful multilingual tools through transfer learning, corpus development, and state-of-the-art deep learning architectures. Whether I’m in the field collecting raw data, engineering NLP pipelines, or deploying interactive language models on platforms like Hugging Face Spaces, my mission remains clear: to blend technology and tradition and empower linguistic diversity through innovation.\nIf you share a passion for language, AI, and cultural preservation, or want to explore collaboration opportunities, let’s connect and create something meaningful together.",
    education: [
      {
        degree: "B.Tech. in Computer Science and Engineering",
        school: "National Institute of Technology, Arunachal Pradesh",
        year: "2017–2021",
      },
      {
        degree: "M.Tech. in Computer Science and Engineering",
        school: "Rajiv Gandhi University, Rono Hills, Doimukh",
        year: "2021–2023",
      },
      {
        degree: "PhD. Scholar Computer Science and Engineering (Present)",
        school: "National Institute of Technology, Arunachal Pradesh",
        year: "2024–Present",
      },
    ],
    experience: [
      {
        title: "Project Assistant",
        company: "North East Centre for Technology Application and Reach (NECTAR)",
        duration: "2019–2021",
        description: "As a Project Assistant under the Technology Outreach Program of NECTAR, I was involved in a multidisciplinary research project analyzing the impact of Cyclone Bulbul on Aman paddy crop yield and loss assessment in the East Medinipur district of West Bengal. The study utilized geospatial technologies and satellite imagery to support agricultural resilience and disaster management strategies.",
      },
      {
        title: "Guest Lecturer",
        company: "National Institute of Electronics & Information Technology (NIELIT)",
        duration: "2022–2023",
        description:
          "Responsible for delivering specialized lectures and academic sessions to undergraduate and postgraduate students, professionals, and government trainees in the domain of Natural Language Processing(NLP), Machine Learning(ML), Cybersecurity and Engineering Mathematics.",
      },
      {
        title: "Junior Research Fellow (JRF) - Digitization and Preservation for Low-Resource Tawra Language of Arunachal Pradesh and Machine Translation.",
        company: "National Institute of Technology, Arunachal Pradesh",
        duration: "2023–2024",
        description: "As a Junior Research Fellow (JRF) at NIT Arunachal Pradesh, I worked on a government-funded research project focused on the digitization, documentation, and computational modeling of the endangered Tawra language—one of the low-resource indigenous languages of Arunachal Pradesh. My contributions were both linguistic and technical, spanning data collection, language resource development, and the creation of foundational tools for Natural Language Processing (NLP) and Machine Translation (MT)."
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "Tagin-English Neural Machine Translator",
      description:
        "A neural machine translation model that translates between Tagin (a low-resource language from Arunachal Pradesh) and English, developed using MarianMT and fine-tuned on GinLish Corpus v0.1.0 (Tagin-English parallel corpus).",
      image: "https://placehold.co/600x400/22c55e/white?text=Tagin+NMT",
      tags: ["MarianMT", "Hugging Face", "NLP", "Low-Resource MT"],
      liveLink: "https://huggingface.co/spaces/repleeka/tagin",
      codeLink: "https://huggingface.co/spaces/repleeka/tagin",
    },
    {
      id: 2,
      title: "Nyishi-English Neural Machine Translator",
      description:
        "A neural translation system for Nyishi-English built to preserve and make accessible the Nyishi language through machine translation. Fine-tuned with multilingual pre-trained models on EnNyiCorp Corpus (Nyishi-English parallel corpus).",
      image: "https://placehold.co/600x400/f97316/white?text=Nyishi+NMT",
      tags: ["MarianMT", "Hugging Face", "NLP", "Indigenous Language"],
      liveLink: "https://huggingface.co/spaces/repleeka/nyishi",
      codeLink: "https://huggingface.co/spaces/repleeka/nyishi",
    },
    {
      id: 3,
      title: "Digaru (Tawra)-English Neural Machine Translator",
      description:
        "An NMT system for the endangered Digaru (Tawra) language, focusing on low-resource translation using transfer learning techniques. Built to assist linguistic preservation and accessibility.",
      image: "https://placehold.co/600x400/14b8a6/white?text=Tawra+NMT",
      tags: ["MarianMT", "Hugging Face", "NLP", "Language Preservation"],
      liveLink: "https://huggingface.co/spaces/repleeka/tawra",
      codeLink: "https://huggingface.co/spaces/repleeka/tawra",
    }
  ],
  articles: [
    {
      id: 1,
      title: "Understanding React Hooks Deeply",
      date: "April 5, 2025",
      excerpt:
        "A deep dive into how React hooks work under the hood, including custom hook patterns.",
      content: `
        <p>React hooks are one of the most powerful features introduced in React 16.8. They allow developers to use state and other React features without writing a class component.</p>
        <h2>useState</h2>
        <p>The <code>useState</code> hook allows functional components to have local state. It returns a stateful value and a function to update it.</p>
        <pre><code>const [count, setCount] = useState(0);</code></pre>
        <h2>useEffect</h2>
        <p>The <code>useEffect</code> hook handles side effects like data fetching, subscriptions, or manually changing the DOM in React components.</p>
        <p>It runs after every render by default but can be optimized with dependency arrays.</p>
        <pre><code>useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);</code></pre>
        <h2>Custom Hooks</h2>
        <p>You can create your own hooks to reuse logic across multiple components. For example, a <code>useFetch</code> hook to handle API calls.</p>
      `,
    },
    {
      id: 2,
      title: "The Future of Web Development in 2025",
      date: "March 18, 2025",
      excerpt:
        "Exploring trends shaping the future of frontend development including AI integration, faster frameworks, and better tooling.",
      content: `
        <p>In 2025, the web development landscape is evolving rapidly. Developers are embracing new paradigms and technologies that improve productivity and performance.</p>
        <h2>AI-Powered Tools</h2>
        <p>From GitHub Copilot to intelligent IDEs, AI is helping developers write code faster and more accurately.</p>
        <h2>Edge Computing</h2>
        <p>With platforms like Vercel and Cloudflare Workers, edge computing is becoming mainstream, enabling faster response times and better user experiences.</p>
        <h2>Performance Optimization</h2>
        <p>Tools like Lighthouse, Next.js, and SvelteKit are pushing performance metrics higher, ensuring websites load instantly and feel snappy.</p>
        <h2>Conclusion</h2>
        <p>As we move further into 2025, expect to see more innovation in tooling, collaboration between designers and developers, and smarter systems powered by machine learning.</p>
      `,
    },
  ],
  techStack: [
    "Python",
    "FastAPI",
    "Flask",
    "PyTorch",
    "Tensorflow",
    "HF Transformers",
    "NMT / SMT",
    "OpenNMT",
    "Fairseq",
    "Moses / GIZA++",
    "mBART",
    "BERT",
    "NLLB-200",
    "T5",
    "SentencePiece",
    "Pandas / NumPy",
    "Scikit-learn",
    "Gradio",
    "Streamlit",
    "Git / GitHub",
    "Docker",
    "Label Studio",
    "Praat",
    "LaTeX",
    "Anaconda"
  ],
};

// Icon components
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scroll to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "tech", "projects", "articles", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-900 dark:text-white bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300" style={{ fontFamily: "'Product Sans', Arial, sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-indigo-100 dark:border-indigo-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tungon Dugi
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {["home", "about", "experience", "tech", "projects", "articles", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${activeSection === section
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
              >
                {section}
              </a>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              {["home", "about", "experience", "tech", "projects", "articles", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => {
                    setActiveSection(section);
                    setMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-md capitalize ${activeSection === section
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  {section}
                </a>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <>
                    <SunIcon />
                    <span className="ml-2">Light Mode</span>
                  </>
                ) : (
                  <>
                    <MoonIcon />
                    <span className="ml-2">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4">
                PhD Scholar & AI Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hello, I'm Tungon Dugi
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Full-Time PhD Scholar • AI Developer • NIT Arunachal Pradesh
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
                >
                  View My Work
                </a>
                <a
                  href="#articles"
                  className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                >
                  Read Articles
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full  flex items-center justify-center overflow-hidden">
                  <div className="text-6xl"><img src={myImage} alt="Description" /></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3">
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">AI & NLP Expert</div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 text-center">
            <div className="w-full md:w-auto">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="w-full md:w-auto">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="w-full md:w-auto">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="p-8">
            <p className="text-justify dark:text-gray-300">
              {mockData.about.summary.split('\n').map((para, idx) => (
                <span key={idx}>
                  {para}
                  <br /><br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="relative">
            {mockData.about.experience.map((exp, i) => (
              <div key={i} className="mb-3 relative">
                <div className="p-6 text-justify">
                  <h3 className="text-xl font-bold mb-1 text-indigo-600 dark:text-indigo-400">{exp.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {exp.company}<br></br>({exp.duration})
                  </p>
                  <p className="dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mockData.techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-indigo-600 dark:text-indigo-400 font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden  transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {mockData.articles.map((article) => (
              <div
                key={article.id}
                className="hover: transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 w-full max-w-3xl max-h-[90vh] overflow-auto rounded-2xl p-8 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-700 rounded-full p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{selectedArticle.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{selectedArticle.title}</h2>
            </div>

            <div
              className="prose dark:prose-invert prose-indigo max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            ></div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
              >
                Back to Articles
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="p-8">
            {/* <div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Get In Touch</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Feel free to reach out for collaborations, job opportunities, or just a friendly chat.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                      <MailIcon />
                    </div>
                    tungondugi@gmail.com
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                      <GithubIcon />
                    </div>
                    github.com/repleeka
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                      <LinkedInIcon />
                    </div>
                    linkedin.com/in/tungondugi
                  </li>
                </ul>
              </div>

              <div className="p-6">
                <img src={contact_img} alt="Description" />
                {/* <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                    Send Message
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700 transition-colors">
              <GithubIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700 transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700 transition-colors">
              <MailIcon />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Tungon Dugi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
