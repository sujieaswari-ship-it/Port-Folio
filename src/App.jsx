import {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Database,
  Code,
  BarChart,
  ChevronRight,
  Download,
  Terminal,
  Cpu,
  Globe,
  TrendingUp,
  ShoppingBag,
  BookOpen,
  Award,
  ShieldCheck,
  Search,
  Instagram
} from 'lucide-react';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 80;
    const connectionDistance = 150;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    resize();

    class Particle {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            this.x -= dx * 0.02;
            this.y -= dy * 0.02;
          }
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 217, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - (dist / connectionDistance);
            ctx.strokeStyle = `rgba(0, 217, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(4, 17, 29, 0.85), rgba(4, 17, 29, 0.85)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    />
  );
};

const Portfolio = () => {
  const resumeData = {
    name: "SUJIEASWARI T",
    role: "Business Data Analyst",
    email: "sujieaswari83@gmail.com",
    phone: "8925421281",
    location: "Alappakkam, Chennai",
    linkedin: "https://www.linkedin.com/in/sujieaswari-t-748278298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/sujieaswari-ship-it",
    instagram: "https://www.instagram.com/sujieaswari?igsh=YnIzbmc2MjdwcThy",
    resumeUrl: "/SUJI RESUME.pdf.pdf",

    objective: (
      <>
        Aspiring <span style={{ color: 'var(--primary)' }}>Business Data Analyst</span> with strong <span style={{ color: 'var(--primary)' }}>problem-solving skills</span> and knowledge in <span style={{ color: 'var(--primary)' }}>data analysis</span>, <span style={{ color: 'var(--primary)' }}>visualization</span>, and <span style={{ color: 'var(--primary)' }}>digital marketing analytics</span>, seeking an opportunity to apply <span style={{ color: 'var(--primary)' }}>technical and business knowledge</span> to solve real-world business challenges.
      </>
    ),
    education: [
      {
        degree: "M.Com [ Business Data Science ]",
        school: "University of Madras",
        duration: "2024 - 2026",
        highlights: "Specializing in Data Analytics and Data Visualization."
      },
      {
        degree: "Bachelor of Commerce (B.Com)",
        school: "Meenakshi Academy of Higher Education and Research",
        duration: "2021 - 2024"
      },
      {
        degree: "Senior Secondary (XII)",
        school: "Government Higher Secondary School",
        duration: "2021",
        score: "60%"
      },
      {
        degree: "Secondary (X)",
        school: "Government Higher Secondary School",
        duration: "2019"
      }
    ],
    experience: [
      {
        role: "Human Resources (HR) INTERN",
        company: "Honey Universel Digital Pvt. Ltd.",
        duration: "May - July",
        location: "Chennai",
        tasks: [
          "Helped in screening resumes and scheduling interviews",
          "Assisted with employee onboarding and basic HR paperwork",
          "Updated and maintained employee records",
          "Supported the HR team in daily office tasks"
        ]
      },
      {
        role: "Research and Development (R&D) INTERN",
        company: "Alim Digital Marketing Agency",
        duration: "Dec - Mar 2026",
        location: "Chennai",
        tasks: [
          "Conducted market research and competitor analysis for digital marketing campaigns",
          "Assisted in developing new strategies for brand growth and online presence",
          "Analyzed campaign performance data and generated actionable insights",
          "Collaborated with the team to improve digital marketing processes"
        ]
      }
    ],
    certifications: [
      {
        title: "Digital Marketing",
        provider: "Simple Learning, Virtual",
        date: "Jun 2024",
        description: "SEO, SEM, social media strategy, email marketing, and website analytics."
      }
    ],
    projects: [
      {
        title: "Benford's Law Fraud Detection",
        duration: "Oct 2024",
        description: "Developed a fraud detection workflow using Kaggle data. Implemented preprocessing, feature engineering, and machine learning to classify fraudulent vs. legitimate transactions.",
        tech: ["Python", "Machine Learning", "Fraud Detection", "Benford's Law"],
        icon: <ShieldCheck size={32} />
      },
      {
        title: "Stock Test Financial Analysis",
        duration: "Feb",
        description: "In-depth financial analysis using 5 years of data for 30 listed companies. Evaluated profitability, solvency, and liquidity to support data-driven investment decision-making.",
        tech: ["Python", "Statistics", "Finance", "SQL"],
        icon: <TrendingUp size={32} />
      },
      {
        title: "Power BI",
        duration: "Aug - Present",
        description: "Analysed various platform data, created detailed dashboards, and identified trends in course categories and engagement using Power BI for deep analytical insights.",
        tech: ["Power BI", "Data Analytics", "Visualization"],
        icon: <img src="https://logo.svgcdn.com/logos/microsoft-power-bi.svg" alt="Power BI" style={{ width: '32px', height: '32px' }} />
      },
      {
        title: "E-Commerce Platform",
        description: "Designed a user-friendly e-commerce website featuring product catalogs and interactive shopping experience.",
        tech: ["React", "HTML/CSS", "JavaScript"],
        icon: <ShoppingBag size={32} />
      }
    ],
    technicalSkills: [
      { name: "Power BI", icon: <img src="/powerbi.svg" alt="Power BI" style={{ width: '40px', height: '40px' }} />, category: "Data Visualization & Analytics" },
      { name: "Python", icon: <img src="/python.svg" alt="Python" style={{ width: '40px', height: '40px' }} />, category: "Programming & Data Science" },
      { name: "SQL", icon: <img src="/sql.svg" alt="SQL" style={{ width: '40px', height: '40px' }} />, category: "Database Management" },
      { name: "HTML", icon: <img src="/html.svg" alt="HTML" style={{ width: '40px', height: '40px' }} />, category: "Web Layout & Structure" },
      { name: "SPSS", icon: <img src="/spss.svg" alt="SPSS" style={{ width: '40px', height: '40px' }} />, category: "Statistical Analysis" },
      { name: "MS Office", icon: <img src="/msoffice.svg" alt="MS Office" style={{ width: '40px', height: '40px' }} />, category: "Document & Data Productivity" }
    ],
    softSkills: ["Negotiation", "Problem-Solving", "Time Management", "Collaboration"],
    programmingLanguages: ["Python", "SQL", "React", "HTML"]
  };

  return (
    <div className="portfolio-root" style={{ background: 'transparent', minHeight: '100vh', position: 'relative' }}>
      <Background3D />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(4, 17, 29, 0.92)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(0, 217, 255, 0.15)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50px'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00d9ff' }}>
            Portfolio.
          </h2>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', fontWeight: 500, color: '#00d9ff' }}>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 1️⃣ HERO SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="hero" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
            {/* Left: Text */}
            <div className="animate-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Hello, It's Me
              </p>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', lineHeight: 1.1 }}>
                {resumeData.name}
              </h1>
              <p style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                And I'm a <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{resumeData.role}</span>
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Aspiring Business Data Analyst passionate about analyzing data and creating insights to support business decisions.
              </p>
              <div className="social-icons" style={{ marginBottom: '2rem' }}>
                <a href={resumeData.instagram} target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={18} /></a>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={18} /></a>
              </div>
              <a href={resumeData.resumeUrl} download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 2️⃣ ABOUT ME SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="about" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
            {/* Text Context */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                {resumeData.role}!
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem', maxWidth: '800px' }}>
                {resumeData.objective}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contact" className="btn btn-outline">More About Me</a>
                <a href={resumeData.resumeUrl} download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={18} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3️⃣ SKILLS SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="skills">
        <div className="container">
          {/* Technical Skills */}
          <h1 className="section-title">Technical <span>Skills</span></h1>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {resumeData.technicalSkills.map((skill, index) => (
              <div key={index} style={{
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '2.5rem',
                position: 'relative',
                paddingBottom: '1.5rem'
              }}>
                <div style={{
                  position: 'absolute', left: '-9px', top: '12px',
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)', zIndex: 2
                }}></div>
                <div style={{
                  position: 'absolute', left: 0, top: '19px',
                  width: '20px', height: '2px', background: 'var(--primary)', opacity: 0.4
                }}></div>
                <div className="glass-card animate-in" style={{
                  display: 'flex', alignItems: 'center', gap: '1.5rem',
                  padding: '1.2rem', background: 'rgba(10, 38, 54, 0.8)',
                  border: '1px solid var(--glass-border)',
                  animationDelay: `${index * 0.1}s`, transition: 'transform 0.3s ease'
                }}>
                  <div style={{ flexShrink: 0, background: 'rgba(255,255,255,0.05)', padding: '0.6rem', borderRadius: '12px' }}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>{skill.name}</h4>
                    <p style={{ margin: '0.3rem 0 0', fontSize: '0.8rem', color: 'var(--primary)' }}>{skill.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <h1 className="section-title" style={{ marginTop: '3rem' }}>Soft <span>Skills</span></h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {resumeData.softSkills.map((skill, i) => (
              <span key={i} className="badge" style={{ fontSize: '0.95rem', padding: '0.6rem 1.2rem' }}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4️⃣ PROJECTS SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="projects" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="section-title"><span>Projects</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="glass-card animate-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                  {project.icon}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <h3>{project.title}</h3>
                  {project.duration && <span style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>{project.duration}</span>}
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge" style={{ fontSize: '0.75rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ⭐ INTERNSHIP EXPERIENCE SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section>
        <div className="container">
          <h2 className="section-title">Internship <span>Experience</span></h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <h3 style={{ color: 'var(--primary)' }}>{exp.role}</h3>
                  <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>{exp.duration}</span>
                </div>
                <p style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>{exp.company}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.tasks.map((task, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <ChevronRight size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5️⃣ EDUCATION SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="education" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="section-title"><span>Education</span></h2>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {resumeData.education.map((edu, index) => (
                <div key={index} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-7px', top: '0', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}></div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{edu.duration}</p>
                  <h4 style={{ margin: '0.2rem 0' }}>{edu.degree}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{edu.school}</p>
                  {edu.score && <p style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>Score: {edu.score}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6️⃣ CERTIFICATIONS SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section>
        <div className="container">
          <h2 className="section-title"><span>Certifications</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)' }}><Award size={40} /></div>
                <div>
                  <h4 style={{ color: '#fff' }}>{cert.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>{cert.provider} • {cert.date}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7️⃣ CONTACT SECTION */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="contact" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <h2 className="section-title">Contact <span>Me</span></h2>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Left: Contact Info */}
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Let's Work Together</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Feel free to reach out for internship opportunities, collaborations, or just to say hello! I'm always open to discussing new projects and ideas.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ color: 'var(--text-muted)' }}>{resumeData.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ color: 'var(--text-muted)' }}>+91 {resumeData.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={18} style={{ color: 'var(--primary)' }} />
                  <span style={{ color: 'var(--text-muted)' }}>{resumeData.location}</span>
                </div>
              </div>
              <div className="social-icons">
                <a href={resumeData.instagram} target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={18} /></a>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={18} /></a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              onSubmit={(e) => { e.preventDefault(); alert('Message sent! Thank you for reaching out.'); }}>
              <input type="text" placeholder="Enter Your Name" required />
              <input type="email" placeholder="Enter Your Email" required />
              <input type="text" placeholder="Enter Your Subject" />
              <textarea placeholder="Enter Your Message" required></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', background: 'rgba(4, 17, 29, 0.95)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Developed with ❤️ by {resumeData.name} © 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
