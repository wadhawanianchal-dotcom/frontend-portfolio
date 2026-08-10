export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">AW</div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="/chat">AI Assistant</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Anchal Wadhwani</h1>

          <h2>Frontend AI Engineering Intern</h2>

          <p className="hero-description">
            I build responsive and modern web applications using HTML, CSS,
            JavaScript, React, Next.js and AI-assisted development.
          </p>

          <div className="hero-buttons">
            <a
              href="/Anchal_Wadhwani_Resume.pdf"
              className="btn-primary"
            >
              Download CV
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="/profile.png"
            alt="Anchal Wadhwani"
            className="hero-image"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p className="section-text">
          I am a BS Computer Science student and Frontend AI Engineering
          Intern at FlyRank. I am interested in building modern, responsive
          and user-friendly web applications while continuously improving my
          frontend and AI development skills.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Next.js</div>
          <div className="skill-card">C</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">AI Development</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">My Projects</h2>

        <p className="section-text">
          A selection of academic and practical projects I have developed
          while building my programming, software development and frontend
          skills.
        </p>

        <div className="projects-container">

          {/* Airline */}
          <article className="project-card">
            <div className="project-image">
              ✈️
            </div>

            <div className="project-content">
              <h3>Airline Resource Allocation System</h3>

              <p>
                A Java-based project designed to manage and allocate airline
                resources efficiently using object-oriented programming
                concepts.
              </p>

              <span className="project-tech">
                Java · OOP
              </span>
            </div>
          </article>

          {/* Hospital */}
          <article className="project-card">
            <div className="project-image">
              🏥
            </div>

            <div className="project-content">
              <h3>Hospital Management System</h3>

              <p>
                A C++ project developed using data structures and algorithms
                to organize and manage hospital-related information
                efficiently.
              </p>

              <span className="project-tech">
                C++ · DSA
              </span>
            </div>
          </article>

          {/* Transport */}
          <article className="project-card">
            <div className="project-image">
              🚌
            </div>

            <div className="project-content">
              <h3>Transport System</h3>

              <p>
                A C language project focused on organizing transport-related
                information and managing basic transport system operations.
              </p>

              <span className="project-tech">
                C Language
              </span>
            </div>
          </article>

          {/* Ultimate Fashion */}
          <article className="project-card">
            <div className="project-image">
              👗
            </div>

            <div className="project-content">
              <h3>Ultimate Fashion E-commerce Website</h3>

              <p>
                A responsive fashion e-commerce website built with HTML,
                CSS and JavaScript to create an engaging online shopping
                experience.
              </p>

              <span className="project-tech">
                HTML · CSS · JavaScript
              </span>
            </div>
          </article>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>BS Computer Science</h3>
          <p>DHA Suffa University</p>
          <p>Expected Graduation: 2028</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Let's Connect</h2>

        <p className="section-text">
          Feel free to contact me for opportunities, collaborations or
          frontend development projects.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=wadhawanianchal@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Email Me
        </a>
      </section>
    </>
  );
}