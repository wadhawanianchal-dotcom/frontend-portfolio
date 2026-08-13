import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">AW</div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <a href="/chat">AI Assistant</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Anchal Wadhwani</h1>

          <h2>Computer Science Undergraduate</h2>

          <p className="hero-description">
            I am a Computer Science undergraduate interested in software
            engineering and web development. I build responsive web
            applications using HTML, CSS, JavaScript, React.js and Node.js,
            while continuously developing my programming and problem-solving
            skills.
          </p>

          <div className="hero-buttons">
            <a
              href="/Anchal_Wadhwani_Resume.pdf"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <Image
            className="hero-image"
            src="/profile-optimized.webp"
            alt="Anchal Wadhwani"
            width={360}
            height={360}
            priority
            fetchPriority="high"
            quality={60}
            sizes="(max-width: 768px) 250px, 360px"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p className="section-text">
          I am a Computer Science undergraduate at DHA Suffa University with
          a strong foundation in programming, software development and
          database systems. I have worked on academic projects using C,
          C++, Java, Java Swing, HTML, CSS and JavaScript. I am interested
          in software engineering and web development, and I enjoy learning
          new technologies through practical projects.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-container">
          <div className="skill-card">C</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">OOP</div>
          <div className="skill-card">Data Structures & Algorithms</div>
          <div className="skill-card">DBMS</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">Kali Linux</div>
          <div className="skill-card">Cisco Packet Tracer</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">My Projects</h2>

        <p className="section-text">
          A selection of academic and practical projects developed while
          building my programming, software development and web development
          skills.
        </p>

        <div className="projects-container">
          <article className="project-card">
            <div className="project-image" aria-hidden="true">
              🚌
            </div>

            <div className="project-content">
              <h3>Transport System</h3>

              <p>
                A console-based Transport System developed in C for managing
                transport records and applying programming and Data Structures
                concepts.
              </p>

              <span className="project-tech">
                C · Data Structures
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image" aria-hidden="true">
              🏥
            </div>

            <div className="project-content">
              <h3>Hospital Management System</h3>

              <p>
                A console-based Hospital Management System developed in C++
                to manage patient records, doctor information, appointments
                and billing. The project applies Object-Oriented Programming
                and Data Structures concepts.
              </p>

              <span className="project-tech">
                C++ · OOP · Data Structures
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image" aria-hidden="true">
              ✈️
            </div>

            <div className="project-content">
              <h3>Airline Resource Allocation System</h3>

              <p>
                A desktop-based Airline Resource Allocation System developed
                using Java Swing with separate Admin and User dashboards.
                It includes flight management, passenger registration,
                ticket booking, reservations, payment processing and booking
                history.
              </p>

              <span className="project-tech">
                Java · Java Swing · OOP
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image" aria-hidden="true">
              👗
            </div>

            <div className="project-content">
              <h3>Ultimate Fashion – E-Commerce Website</h3>

              <p>
                A responsive fashion e-commerce website featuring product
                listings, category navigation and interactive user interfaces.
                Developed using HTML, CSS and JavaScript with a focus on
                responsive design and usability.
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
          <div className="education-header">
            <div className="education-icon" aria-hidden="true">
              🎓
            </div>

            <div>
              <h3>Bachelor of Science in Computer Science</h3>

              <p className="education-university">
                DHA Suffa University
              </p>

              <p className="education-location">
                Karachi, Pakistan
              </p>
            </div>
          </div>

          <div className="education-status">
            <div>
              <span className="education-label">
                Academic Progress
              </span>

              <strong>Completed 4th Semester</strong>
            </div>

            <div>
              <span className="education-label">
                Expected Graduation
              </span>

              <strong>2028</strong>
            </div>
          </div>

          <div className="coursework">
            <h4>Relevant Coursework</h4>

            <div className="coursework-list">
              <span>Object-Oriented Programming</span>
              <span>Data Structures & Algorithms</span>
              <span>Database Systems</span>
              <span>Operating Systems</span>
              <span>Information Security</span>
              <span>Computer Organization & Assembly</span>
              <span>Digital Logic Design</span>
              <span>Calculus</span>
              <span>Linear Algebra</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section">
        <h2 className="section-title">
          Achievements & Activities
        </h2>

        <div className="achievements-container">
          <article className="achievement-card">
            <div className="achievement-icon" aria-hidden="true">
              🤖
            </div>

            <div>
              <h3>
                Retrieval-Augmented Generation (RAG) Workshop
              </h3>

              <p className="achievement-organization">
                GDG On Campus, DHA Suffa University · 2026
              </p>

              <p>
                Learned the fundamentals of AI-powered information
                retrieval, vector embeddings and Large Language Models
                (LLMs).
              </p>
            </div>
          </article>

          <article className="achievement-card">
            <div className="achievement-icon" aria-hidden="true">
              🎨
            </div>

            <div>
              <h3>Stranger Designs: UI/UX Event</h3>

              <p className="achievement-organization">
                Microsoft Learn Student Community, DSU · 2026
              </p>

              <p>
                Gained practical knowledge of user-centered design,
                wireframing, prototyping, accessibility and usability
                principles.
              </p>
            </div>
          </article>

          <article className="achievement-card">
            <div className="achievement-icon" aria-hidden="true">
              💻
            </div>

            <div>
              <h3>HASHCODE Coding Competition</h3>

              <p className="achievement-organization">
                GDG On Campus, DHA Suffa University · 2025
              </p>

              <p>
                Participated in algorithmic and logical programming
                challenges, strengthening problem-solving and analytical
                thinking skills.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Let's Connect</h2>

        <p className="section-text">
          Feel free to contact me for internship opportunities,
          collaborations or software and web development projects.
        </p>

        <a
          href="mailto:wadhawanianchal@gmail.com"
          className="btn-primary"
        >
          Email Me
        </a>
      </section>
    </>
  );
}