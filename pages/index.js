import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [openAbstract, setOpenAbstract] = useState(null);

  // Initialize theme from localStorage or default dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-v2") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme-v2", newTheme);
    if (newTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for reveal animations & active nav highlighting
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-stagger");
    const dots = document.querySelectorAll(".timeline-dot");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    dots.forEach((el) => observer.observe(el));

    // Nav active section tracking
    const sections = document.querySelectorAll("section[id]");
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((sec) => navObserver.observe(sec));

    return () => {
      observer.disconnect();
      navObserver.disconnect();
    };
  }, []);

  const toggleAbstract = (id) => {
    setOpenAbstract((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* ==============================================================
          NAVBAR
          ============================================================== */}
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        id="navbar"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          <a href="#" className="navbar-brand">
            VR
          </a>

          <div className={`navbar-links ${navOpen ? "open" : ""}`} id="navbar-links">
            <a
              href="#about"
              className={`navbar-link ${activeSection === "about" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              About
            </a>
            <a
              href="#research"
              className={`navbar-link ${activeSection === "research" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Research
            </a>
            <a
              href="#experience"
              className={`navbar-link ${activeSection === "experience" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Experience
            </a>
            <a
              href="#awards"
              className={`navbar-link ${activeSection === "awards" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Awards
            </a>
            <a
              href="#projects"
              className={`navbar-link ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Projects
            </a>
            <a
              href="#writing"
              className={`navbar-link ${activeSection === "writing" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Writing
            </a>
            <a
              href="#service"
              className={`navbar-link ${activeSection === "service" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Service
            </a>
          </div>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title="Toggle theme"
          >
            {/* Moon Icon */}
            <svg
              className="icon-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            {/* Sun Icon */}
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          {/* Mobile Nav Toggle */}
          <button
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <main>
        {/* ==============================================================
            HERO / ABOUT SECTION
            ============================================================== */}
        <section className="hero" id="about">
          <div className="container">
            <div className="hero-grid">
              {/* LEFT COLUMN: Profile */}
              <div className="hero-left reveal">
                <div className="hero-avatar-wrapper">
                  <div className="hero-avatar-glow" />
                  <img
                    className="hero-avatar"
                    src="/assets/vibhas_face.png"
                    alt="Vibhas Reddy Araveeti"
                    loading="eager"
                  />
                </div>

                <h1 className="hero-name">Vibhas Reddy</h1>
                <p className="hero-subtitle">AI/ML &amp; Clinical AI Researcher</p>

                {/* Interest Chips */}
                <div className="hero-chips">
                  <span className="chip">🏥 Healthcare AI</span>
                  <span className="chip">🔬 Clinical Deep Learning</span>
                  <span className="chip">📊 Medical Imaging</span>
                  <span className="chip">🧠 Multimodal LLMs</span>
                  <span className="chip">📐 Mathematical Foundations</span>
                </div>

                {/* CTA Buttons */}
                <div className="hero-actions">
                  <a className="btn btn-primary" href="mailto:vibhasf17@gmail.com">
                    Contact
                  </a>
                  <a
                    className="btn"
                    href="/document/Vibhas-Reddy-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV / Resume
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/VIBHAS777"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn"
                    href="https://www.linkedin.com/in/araveeti-vibhas-reddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a className="btn" href="#research">
                    Publications
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: About Content */}
              <div className="hero-right reveal reveal-delay-1">
                <div className="about-content">
                  <p>
                    Hello! I am <strong>Vibhas Reddy Araveeti</strong>, an undergraduate AI/ML and Clinical AI researcher in the Department of Computer Science &amp; Engineering at <strong>Amrita Vishwa Vidyapeetham</strong> (CGPA: <strong>8.65 / 10</strong>, Class of 2026).
                  </p>

                  <p>
                    My research focuses on developing <em>calibrated deep learning architectures, medical diagnostic pipelines, and healthcare decision-support systems</em> that bridge rigorous theoretical machine learning with clinical reliability. To date, I have authored <strong>12+ peer-reviewed research publications</strong>, including research in the Q1 journal <a className="link-underline" href="https://espublisher.com/" target="_blank" rel="noopener noreferrer">Engineered Science</a> and the <span style={{ color: "var(--accent)", fontWeight: "600" }}>Best Paper Award</span> at <strong>IEEE ICKECS 2026</strong> for our work on explainable clinical risk prediction.
                  </p>

                  <p>
                    My research curiosity is grounded in a deep passion for problem solving and continuous improvement. Having overcome early schooling struggles in mathematics through deliberate practice and resilience, I earned a <strong>Gold Medal in the SOF International Mathematics Olympiad (IMO)</strong>, scored <strong>100% marks in Class 10</strong>, and achieved the <strong>95th percentile in JEE Main</strong>.
                  </p>

                  <p>
                    Beyond research, I believe strong leadership and disciplined athletics feed intellectual endurance. I serve as the Co-Founder &amp; Technical Lead of <strong>ML Minds</strong> (mentoring 250+ student peers in deep learning), Vice President of the <strong>AMAL Club</strong>, Student Mentor in the <strong>Sankhya Mathematics Club</strong>, and Captain of the Amrita University <strong>Powerlifting Team</strong> (District Gold Medalist &amp; State Silver Medalist), as well as a former State Swimming Champion.
                  </p>

                  <p>
                    I am always excited to discuss healthcare AI, clinical trial modeling, and collaborative machine learning research. Feel free to reach out at{" "}
                    <a className="link-underline" href="mailto:vibhasf17@gmail.com?subject=Research%20Collaboration">
                      vibhasf17@gmail.com
                    </a>.
                  </p>

                  {/* Recent Updates / News Feed */}
                  <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                    <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: "1rem", color: "var(--text)" }}>
                      Recent Updates
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                      <li style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                        <span style={{ color: "var(--accent)", fontWeight: "700", minWidth: "75px" }}>Jan 2026</span>
                        <span>🏆 Received the <strong>Best Paper Award</strong> at <strong>IEEE ICKECS 2026</strong> for research on explainable cardiovascular clinical risk stratification.</span>
                      </li>
                      <li style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                        <span style={{ color: "var(--accent)", fontWeight: "700", minWidth: "75px" }}>Dec 2025</span>
                        <span>📄 Research on multimodal clinical diagnostic pipelines accepted for publication in the Q1 journal <strong>Engineered Science</strong>.</span>
                      </li>
                      <li style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                        <span style={{ color: "var(--accent)", fontWeight: "700", minWidth: "75px" }}>Sep 2025</span>
                        <span>🚀 Co-founded <strong>ML Minds</strong> at Amrita; conducted comprehensive hands-on workshops on Transformers and PyTorch for 250+ students.</span>
                      </li>
                      <li style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                        <span style={{ color: "var(--accent)", fontWeight: "700", minWidth: "75px" }}>May 2025</span>
                        <span>🥇 Won <strong>Gold Medal</strong> at District Powerlifting Championship &amp; led Amrita University team to the overall first-place victory.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SELECTED PUBLICATIONS SECTION
            ============================================================== */}
        <section className="section" id="research">
          <div className="container">
            <h2 className="section-title reveal">Selected Publications</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Representative peer-reviewed papers spanning clinical risk stratification, multimodal medical imaging diagnostics, and physiological signal modeling. (12+ total publications)
            </p>

            <div className="pub-grid">
              {/* Paper 1: Best Paper Award IEEE */}
              <article className="pub-card featured reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/heart-disease-ai.png"
                    alt="CardioRisk-AI Stacking Ensemble ROC and SHAP Visualizations"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag" style={{ background: "rgba(94, 181, 214, 0.15)", color: "var(--accent)", borderColor: "var(--accent)" }}>
                      🏆 Best Paper Award
                    </span>
                    <span className="pub-tag">Conference (IEEE)</span>
                    <span className="pub-tag">Clinical AI</span>
                  </div>
                  <h3 className="pub-title">
                    Explainable Deep Stacking Ensembles for Early Cardiovascular Risk Stratification
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, Healthcare AI Lab Collaborators, Amrita Faculty Advisors
                  </p>
                  <p className="pub-venue">
                    IEEE International Conference on Knowledge Engineering and Cyber Systems (ICKECS), 2026
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="/document/Vibhas-Reddy-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Paper (PDF)
                    </a>
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      Code
                    </a>
                    <button
                      className="pub-link"
                      onClick={() => toggleAbstract("pub1")}
                      style={{ background: "none", cursor: "pointer", border: "1px solid var(--border)" }}
                    >
                      Abstract {openAbstract === "pub1" ? "▲" : "▼"}
                    </button>
                  </div>
                  {openAbstract === "pub1" && (
                    <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg2)", borderRadius: "var(--radius-sm)", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <strong>Abstract:</strong> Cardiovascular diseases remain the leading cause of global morbidity. We introduce an explainable stacking ensemble architecture that synchronizes gradient-boosted decision trees with deep neural networks. By integrating post-hoc SHAP attribution and calibrated prediction confidence, our framework achieves a 94.2% ROC-AUC on clinical cohorts, revealing key contributing risk factors (ST-depression, resting blood pressure, serum cholesterol) to empower clinician trust in high-stakes interventions.
                    </div>
                  )}
                </div>
              </article>

              {/* Paper 2: Q1 Journal Engineered Science */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/medical-imaging-ai.png"
                    alt="DenseNet and ViT Grad-CAM Medical Imaging Localization"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag" style={{ color: "#34d399", borderColor: "#34d399" }}>
                      Q1 Journal
                    </span>
                    <span className="pub-tag">Medical Imaging</span>
                    <span className="pub-tag">Grad-CAM</span>
                  </div>
                  <h3 className="pub-title">
                    Calibrated Multimodal Vision Transformers for High-Sensitivity Chest Radiograph Pathology Localization
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, Diagnostic Medical Imaging Research Team
                  </p>
                  <p className="pub-venue">
                    Engineered Science (Q1 Journal, Impact Factor: 5.6+), 2025
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="/document/Vibhas-Reddy-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Paper (PDF)
                    </a>
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      Code
                    </a>
                    <button
                      className="pub-link"
                      onClick={() => toggleAbstract("pub2")}
                      style={{ background: "none", cursor: "pointer", border: "1px solid var(--border)" }}
                    >
                      Abstract {openAbstract === "pub2" ? "▲" : "▼"}
                    </button>
                  </div>
                  {openAbstract === "pub2" && (
                    <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg2)", borderRadius: "var(--radius-sm)", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <strong>Abstract:</strong> Automated chest radiograph interpretation requires both high sensitivity and spatial explainability. We present a hybrid architecture uniting DenseNet-121 convolutional backbones with self-attention Vision Transformers (ViT) and Grad-CAM class activation mapping. Evaluated on large-scale radiograph benchmarks, our method detects thoracic pathologies with 98.2% diagnostic sensitivity while providing anatomical localization to assist radiologists during triage.
                    </div>
                  )}
                </div>
              </article>

              {/* Paper 3: Seizure Detection */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/seizure-detection-iot.png"
                    alt="Real-time Wearable EEG Seizure Detection Waveforms"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Journal</span>
                    <span className="pub-tag">Physiological IoT</span>
                    <span className="pub-tag">EEG Signals</span>
                  </div>
                  <h3 className="pub-title">
                    Continuous Temporal Seizure Onset Detection via Attention-Augmented Bi-LSTM on Wearable EEG
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, Physiological Signal Computing Group
                  </p>
                  <p className="pub-venue">
                    Biomedical Signal Processing and Control, 2025
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="/document/Vibhas-Reddy-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Paper (PDF)
                    </a>
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      Code
                    </a>
                    <button
                      className="pub-link"
                      onClick={() => toggleAbstract("pub3")}
                      style={{ background: "none", cursor: "pointer", border: "1px solid var(--border)" }}
                    >
                      Abstract {openAbstract === "pub3" ? "▲" : "▼"}
                    </button>
                  </div>
                  {openAbstract === "pub3" && (
                    <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg2)", borderRadius: "var(--radius-sm)", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <strong>Abstract:</strong> Timely detection of epileptic seizure onset is critical for patient intervention and preventing injury. We engineer a lightweight Attention Bi-LSTM pipeline optimized for wearable EEG telemetry. By decomposing continuous multi-channel signals and tracking temporal dynamics, the system achieves sub-0.35s inference latency and a 96.4% detection rate with negligible false alarms on continuous pediatric EEG recordings.
                    </div>
                  )}
                </div>
              </article>

              {/* Paper 4: Health Misinformation GNN */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/health-misinformation-gnn.png"
                    alt="Graph Neural Network for Health Misinformation Detection"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">IEEE</span>
                    <span className="pub-tag">Graph Neural Networks</span>
                    <span className="pub-tag">Biomedical NLP</span>
                  </div>
                  <h3 className="pub-title">
                    Graph-Augmented Language Models for Detecting Epidemiological Misinformation in Social Networks
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, Computational Social Systems Research Group
                  </p>
                  <p className="pub-venue">
                    IEEE Transactions on Computational Social Systems, 2025
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="/document/Vibhas-Reddy-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Paper (PDF)
                    </a>
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      Code
                    </a>
                    <button
                      className="pub-link"
                      onClick={() => toggleAbstract("pub4")}
                      style={{ background: "none", cursor: "pointer", border: "1px solid var(--border)" }}
                    >
                      Abstract {openAbstract === "pub4" ? "▲" : "▼"}
                    </button>
                  </div>
                  {openAbstract === "pub4" && (
                    <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg2)", borderRadius: "var(--radius-sm)", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      <strong>Abstract:</strong> Health misinformation during public health crises spreads rapidly through complex social network topologies. We propose a hybrid framework combining BioBERT contextual linguistic embeddings with Graph Convolutional Networks (GCN) over user propagation trees. The model jointly analyzes semantic claims and structural dissemination dynamics, reaching a 94.8% Macro F1 score on health hoax detection benchmarks.
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ==============================================================
            EDUCATION & EXPERIENCE SECTION
            ============================================================== */}
        <section className="section" id="experience">
          <div className="container">
            <h2 className="section-title reveal">Education &amp; Experience</h2>

            <div className="timeline">
              {/* Item 1: B.Tech */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">Aug 2022 – Present</span>
                  <h3 className="timeline-title">B.Tech in Computer Science &amp; Engineering</h3>
                  <p className="timeline-org">Amrita Vishwa Vidyapeetham, Amritapuri</p>
                  <p className="timeline-desc">
                    Maintaining an outstanding academic standing with a <strong>CGPA of 8.65 / 10</strong>. Coursework includes Advanced Deep Learning, Data Structures &amp; Algorithms, Distributed Operating Systems, Linear Algebra, Probability &amp; Statistics, and Computer Vision. Selected for undergraduate research honors.
                  </p>
                </div>
              </div>

              {/* Item 2: Healthcare AI Research Intern */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">May 2023 – Present</span>
                  <h3 className="timeline-title">Undergraduate Research Intern — Healthcare AI</h3>
                  <p className="timeline-org">Healthcare AI Laboratory, Amrita Vishwa Vidyapeetham</p>
                  <p className="timeline-desc">
                    Leading machine learning investigations into calibrated clinical risk algorithms, multimodal medical imaging diagnostics, and physiological signal modeling. Co-authored 12+ peer-reviewed publications, including research published in the Q1 journal <em>Engineered Science</em> and awarded the <strong>IEEE ICKECS 2026 Best Paper Award</strong>.
                  </p>
                </div>
              </div>

              {/* Item 3: ML Minds Co-Founder */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">Jan 2024 – Present</span>
                  <h3 className="timeline-title">Co-Founder &amp; Technical Lead</h3>
                  <p className="timeline-org">ML Minds (Student AI Research Community)</p>
                  <p className="timeline-desc">
                    Co-founded Amrita's student-led machine learning collective. Designed and delivered multi-week hands-on deep learning bootcamps on Transformers, PyTorch, and healthcare datasets for 250+ undergraduate peers. Facilitating open-source reproducibility projects.
                  </p>
                </div>
              </div>

              {/* Item 4: AMAL Club Vice President */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">2023 – 2025</span>
                  <h3 className="timeline-title">Vice President</h3>
                  <p className="timeline-org">AMAL Club (Amrita Management &amp; Applied Leadership)</p>
                  <p className="timeline-desc">
                    Elected Vice President after leading public speaking and strategic thinking initiatives. Bridged academic theory with practical managerial frameworks, coordinated student engagement programs, and organized university leadership events.
                  </p>
                </div>
              </div>

              {/* Item 5: Sankhya Math Club */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">2023 – 2025</span>
                  <h3 className="timeline-title">Student Mentor &amp; Mathematical Specialist</h3>
                  <p className="timeline-org">Sankhya Mathematics Club, Amrita University</p>
                  <p className="timeline-desc">
                    Applied problem-solving frameworks developed through the Math Olympiad and JEE preparation to mentor students in discrete mathematics, linear algebra, and competitive mathematical problem solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            AWARDS & HONORS SECTION
            ============================================================== */}
        <section className="section" id="awards">
          <div className="container">
            <h2 className="section-title reveal">Awards &amp; Honors</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Academic distinctions, competitive mathematics achievements, and athletic leadership honors.
            </p>

            <div className="awards-featured reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "1.25rem" }}>
              {/* Award 1 */}
              <div className="award-card featured">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🏆</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>IEEE ICKECS 2026 Best Paper Award</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>IEEE Computer Society</p>
                  </div>
                </div>
                <p className="award-desc">
                  Honored with the Best Paper Award for research on explainable deep stacking ensembles for early cardiovascular clinical risk stratification.
                </p>
              </div>

              {/* Award 2 */}
              <div className="award-card featured">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🥇</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>SOF International Mathematics Olympiad (IMO)</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Gold Medalist</p>
                  </div>
                </div>
                <p className="award-desc">
                  Earned the Gold Medal in the prestigious Science Olympiad Foundation International Mathematics Olympiad through rigorous analytical problem solving.
                </p>
              </div>

              {/* Award 3 */}
              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>💯</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>100% Aggregate Score (Class 10)</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Board Examination Distinction</p>
                  </div>
                </div>
                <p className="award-desc">
                  Secured a perfect 100% aggregate score in Class 10 Board Examinations, earning recognition from the school and local academic community.
                </p>
              </div>

              {/* Award 4 */}
              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>⚡</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>95th Percentile — JEE Main</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>National Engineering Entrance</p>
                  </div>
                </div>
                <p className="award-desc">
                  Ranked in the 95th percentile among over 1 million candidates across India in one of the world's most competitive engineering entrance exams.
                </p>
              </div>

              {/* Award 5 */}
              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🏋️</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>District Gold &amp; State Silver Medalist</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Varsity Powerlifting Captain</p>
                  </div>
                </div>
                <p className="award-desc">
                  Won 1st Place &amp; Gold Medal in District Powerlifting, Silver Medal at the State level, and captained Amrita University to the overall team trophy.
                </p>
              </div>

              {/* Award 6 */}
              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🏊</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>State Swimming Championship Gold</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>State Championship (Class 12)</p>
                  </div>
                </div>
                <p className="award-desc">
                  Gold Medalist at the state-level swimming championship while concurrently preparing for national engineering entrance examinations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SELECTED PROJECTS SECTION (WITH GENERATED PICS)
            ============================================================== */}
        <section className="section" id="projects">
          <div className="container">
            <h2 className="section-title reveal">Selected Projects</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Key machine learning, computer vision, and systems engineering projects developed with reproducible code and clinical validation.
            </p>

            <div className="pub-grid">
              {/* Project 1 */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/heart-disease-ai.png"
                    alt="CardioRisk-AI Project Visual"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Clinical ML</span>
                    <span className="pub-tag">SHAP Explainability</span>
                    <span className="pub-tag">Stacking</span>
                  </div>
                  <h3 className="pub-title">
                    CardioRisk-AI: Explainable Clinical Stacking Ensemble Platform
                  </h3>
                  <p className="pub-authors">
                    Stacking Meta-Learner (XGBoost + Random Forest + DNN) • SHAP Feature Attribution • 94.2% ROC-AUC
                  </p>
                  <p className="pub-venue">
                    Python, PyTorch, Scikit-Learn, SHAP, FastAPI, Next.js
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 1rem" }}>
                    Engineered an end-to-end clinical decision support platform for multi-factor coronary heart disease prediction. Provides interactive SHAP waterfall attribution plots so clinicians can inspect exact biometric risk drivers.
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      GitHub Repo
                    </a>
                    <a
                      className="pub-link"
                      href="https://portfolio-vibhasf17-4811.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>

              {/* Project 2 */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/medical-imaging-ai.png"
                    alt="NeuroVision Pathology Detection Visual"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Computer Vision</span>
                    <span className="pub-tag">ViT &amp; DenseNet</span>
                    <span className="pub-tag">Grad-CAM</span>
                  </div>
                  <h3 className="pub-title">
                    NeuroVision: Radiograph Pathology Detection &amp; Heatmapping
                  </h3>
                  <p className="pub-authors">
                    Vision Transformer + DenseNet-121 • Grad-CAM Spatial Localization • 98.2% Sensitivity
                  </p>
                  <p className="pub-venue">
                    PyTorch, TorchVision, OpenCV, Albumentations, Streamlit
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 1rem" }}>
                    Automated multi-label thoracic pathology detection pipeline analyzing chest radiographs. Generates high-resolution Grad-CAM heatmaps overlaying lung fields to verify deep learning activations against radiologist findings.
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </article>

              {/* Project 3 */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/seizure-detection-iot.png"
                    alt="EpiPulse Wearable EEG Seizure Monitor Visual"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Biomedical IoT</span>
                    <span className="pub-tag">Edge AI</span>
                    <span className="pub-tag">Bi-LSTM</span>
                  </div>
                  <h3 className="pub-title">
                    EpiPulse: Real-Time Wearable EEG Seizure Detection
                  </h3>
                  <p className="pub-authors">
                    Attention Bi-LSTM • Continuous Scalp EEG • Sub-0.35s Latency • 96.4% Accuracy
                  </p>
                  <p className="pub-venue">
                    Python, MNE-Python, SciPy, TensorFlow Lite, Embedded Edge Microcontroller
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 1rem" }}>
                    Wearable edge computing system for continuous multi-channel EEG monitoring. Detects epileptiform spike-wave discharge with sub-second response times to initiate patient safety warnings and caregiver notifications.
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </article>

              {/* Project 4 */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/telemedicine-sdn.png"
                    alt="TeleSDN Priority Flow Routing Visual"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Networking</span>
                    <span className="pub-tag">SDN</span>
                    <span className="pub-tag">OpenFlow 1.3</span>
                  </div>
                  <h3 className="pub-title">
                    TeleSDN: Priority-Aware OpenFlow Controller for Telemedicine
                  </h3>
                  <p className="pub-authors">
                    Software-Defined Networking • QoS Slicing • Guaranteed &lt;5ms Packet Latency SLA
                  </p>
                  <p className="pub-venue">
                    Python, Ryu SDN Controller, Mininet, OpenFlow 1.3, Wireshark
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 1rem" }}>
                    Engineered an intelligent traffic-slicing controller prioritizing robotic telesurgery video feeds and critical sensor telemetry over congested hospital networks, maintaining strict sub-5ms delay bounds under 95% line saturation.
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </article>

              {/* Project 5 */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/distributed-deadlock-rnn.png"
                    alt="DeadlockRNN Cycle Detection Visual"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Distributed Systems</span>
                    <span className="pub-tag">Deep Learning</span>
                    <span className="pub-tag">Cloud OS</span>
                  </div>
                  <h3 className="pub-title">
                    DeadlockRNN: Proactive Deadlock Prediction in Distributed Cloud OS
                  </h3>
                  <p className="pub-authors">
                    Resource Wait-For Graph (WFG) • LSTM Sequence Modeling • 4.3ms Detection Latency
                  </p>
                  <p className="pub-venue">
                    Python, PyTorch, NetworkX, ZeroMQ, Docker Clusters
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 1rem" }}>
                    Modeled resource allocation wait-for graphs as temporal sequence embeddings. Pre-emptively identifies circular wait deadlocks across 500-node simulated clusters 8.8× faster than traditional distributed edge-chasing algorithms.
                  </p>
                  <div className="pub-links">
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ==============================================================
            WRITING & RESEARCH NOTES SECTION
            ============================================================== */}
        <section className="section" id="writing">
          <div className="container">
            <h2 className="section-title reveal">Research Notes &amp; Writing</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Reflections on clinical AI safety, mathematical problem solving, and graph neural network dynamics.
            </p>

            <div className="writing-grid reveal-stagger reveal">
              <div className="writing-card">
                <h3 className="writing-card-title">
                  Calibrating Neural Confidence for Clinical Healthcare Decisions
                </h3>
                <p className="writing-card-excerpt">
                  Why uncalibrated softmax probabilities cannot be trusted as diagnostic certainty in medical triage, and how temperature scaling and conformal prediction provide safe statistical coverage.
                </p>
                <span className="writing-card-meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  8 min read • Clinical Machine Learning
                </span>
              </div>

              <div className="writing-card">
                <h3 className="writing-card-title">
                  From Weakness to Strength: The Problem-Solving Philosophy of the Math Olympiad
                </h3>
                <p className="writing-card-excerpt">
                  A personal retrospective on overcoming childhood struggles in mathematics, developing deliberate practice systems for the Olympiad, and how rigorous proof structures sharpen intuition in AI research.
                </p>
                <span className="writing-card-meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  6 min read • Mathematical Thinking &amp; Mindset
                </span>
              </div>

              <div className="writing-card">
                <h3 className="writing-card-title">
                  Graph Neural Networks for Epidemic and Misinformation Cascades
                </h3>
                <p className="writing-card-excerpt">
                  Analyzing diffusion dynamics across social networks: how message passing on heterogeneous graphs uncovers structural viral patterns in biomedical hoaxes.
                </p>
                <span className="writing-card-meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  10 min read • Graph Machine Learning
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SERVICE & LEADERSHIP SECTION
            ============================================================== */}
        <section className="section" id="service">
          <div className="container">
            <h2 className="section-title reveal">Service &amp; Leadership</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Academic mentorship, student leadership, and athletic representation.
            </p>

            <div className="awards-service reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              <div className="award-card small">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Co-Founder &amp; Technical Lead</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.25rem" }}>ML Minds Community</p>
                <p className="award-desc">
                  Trained over 250+ student researchers in PyTorch, deep learning pipelines, and research paper replication.
                </p>
              </div>

              <div className="award-card small">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Vice President</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.25rem" }}>AMAL Leadership Club</p>
                <p className="award-desc">
                  Spearheaded strategic leadership workshops, student outreach panels, and executive operations.
                </p>
              </div>

              <div className="award-card small">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Student Mentor</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.25rem" }}>Sankhya Mathematics Club</p>
                <p className="award-desc">
                  Mentored engineering undergraduates in linear algebra, discrete math proofs, and competitive problem solving.
                </p>
              </div>

              <div className="award-card small">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Cultural Coordinator</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.25rem" }}>Dasttan &amp; Kalakriti National Fests</p>
                <p className="award-desc">
                  Managed multi-department logistics, stage coordination, and participant scheduling for national university festivals.
                </p>
              </div>

              <div className="award-card small">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Varsity Team Captain</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.25rem" }}>Amrita Powerlifting Team</p>
                <p className="award-desc">
                  Led the university powerlifting squad to 1st place overall in district championships while training teammates.
                </p>
              </div>

              <div className="award-card small">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>School Head Boy</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.25rem" }}>Student Leadership Council</p>
                <p className="award-desc">
                  Represented the entire student body, organized inter-school events, and mediated student-administration dialogues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==============================================================
          FOOTER
          ============================================================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a className="footer-link" href="mailto:vibhasf17@gmail.com">
              Email
            </a>
            <a
              className="footer-link"
              href="https://github.com/VIBHAS777"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/araveeti-vibhas-reddy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="footer-link"
              href="/document/Vibhas-Reddy-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV / Resume
            </a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Vibhas Reddy Araveeti. Built with Next.js &amp; styled for academic research.
          </p>
        </div>
      </footer>
    </>
  );
}
