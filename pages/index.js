import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [openAbstract, setOpenAbstract] = useState(null);

  // Initialize theme from localStorage, default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-v2") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme-v2", newTheme);
    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for reveals & active nav
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
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    dots.forEach((el) => observer.observe(el));

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
              Publications
            </a>
            <a
              href="#projects"
              className={`navbar-link ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Projects
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
              href="#service"
              className={`navbar-link ${activeSection === "service" ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              Leadership
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
            {/* Moon Icon (shown in light mode to switch to dark) */}
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
            {/* Sun Icon (shown in dark mode to switch to light) */}
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

                {/* Interest Chips - Updated with AI/ML instead of Mathematical Foundations */}
                <div className="hero-chips">
                  <span className="chip">🏥 Healthcare AI</span>
                  <span className="chip">🔬 Clinical Deep Learning</span>
                  <span className="chip">📊 Medical Imaging</span>
                  <span className="chip">🧠 Multimodal LLMs</span>
                  <span className="chip">🤖 AI/ML</span>
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
                    Hello! I am <strong>Vibhas Reddy Araveeti</strong>, an undergraduate AI/ML and Clinical AI researcher in the Department of Computer Science &amp; Engineering at <strong>Amrita Vishwa Vidyapeetham</strong> (CGPA: <strong>8.65 / 10</strong>, Class of 2027).
                  </p>

                  <p>
                    My research focuses on developing <em>calibrated deep learning architectures, medical diagnostic pipelines, and healthcare decision-support systems</em> that bridge machine learning rigor with clinical reliability and safety. To date, I have authored <strong>12+ peer-reviewed research publications</strong>, including research in the Q1-indexed journal <a className="link-underline" href="https://doi.org/10.30919/es2461" target="_blank" rel="noopener noreferrer">Engineered Science</a> and the <span style={{ color: "var(--accent)", fontWeight: "600" }}>Best Paper Award</span> at <strong>IEEE ICKECS 2026</strong> for our work on health misinformation detection.
                  </p>

                  <p>
                    As a Research Intern at Amrita under the supervision of Dr. B. Venkatesh, I built bagged Multilayer Perceptron (MLP) ensembles with Bayesian bootstrap aggregation and multi-technique probability calibration (Platt scaling, isotonic regression), reducing clinical false negative rates to 3% with a Brier score of 0.0489.
                  </p>

                  <p>
                    Beyond research, I am a <strong>Gold Medalist in the SOF International Mathematics Olympiad (IMO)</strong>, achieved <strong>100% marks in Class 10</strong>, and scored in the <strong>95th percentile in JEE Main</strong>. I co-founded and lead <strong>ML Minds</strong> (mentoring 250+ student peers), serve as Captain of the Amrita University <strong>Powerlifting Team</strong> (District Gold Medalist &amp; State Silver Medalist), and previously won a State Swimming Championship Gold.
                  </p>

                  <p>
                    I welcome research collaborations, discussions on clinical machine learning, and opportunities. Please feel free to reach out at{" "}
                    <a className="link-underline" href="mailto:vibhasf17@gmail.com?subject=Research%20Collaboration">
                      vibhasf17@gmail.com
                    </a>.
                  </p>

                  {/* Highlights Bar */}
                  <div style={{ marginTop: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", textAlign: "center" }}>
                    <div style={{ padding: "0.75rem", background: "var(--card)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--accent)" }}>12+</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>Publications</div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "var(--card)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--accent)" }}>Q1</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>Engineered Science</div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "var(--card)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--accent)" }}>🏆 Best Paper</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>IEEE ICKECS 2026</div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "var(--card)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--accent)" }}>8.65 / 10</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>B.Tech CSE GPA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            ACADEMIC PROJECTS SECTION (EXACT PROJECTS & PICS FROM RESUME)
            ============================================================== */}
        <section className="section" id="projects">
          <div className="container">
            <h2 className="section-title reveal">Academic Projects</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Core machine learning, medical image analysis, and systems engineering projects developed and verified according to my resume.
            </p>

            <div className="pub-grid">
              {/* Resume Project 1: Brain Tumor & Skin Disease Diagnosis */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/medical-imaging-mri-skin.png"
                    alt="Brain Tumor and Skin Disease Diagnosis with Grad-CAM Visualizations"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Transfer Learning</span>
                    <span className="pub-tag">VGG16 / ResNet-50 / EfficientNet</span>
                    <span className="pub-tag">Grad-CAM</span>
                  </div>
                  <h3 className="pub-title">
                    Automated Medical Image Analysis for Brain Tumor and Skin Disease Diagnosis
                  </h3>
                  <p className="pub-authors">
                    Aug 2024 – Dec 2024 • <strong>94% Brain Tumor Accuracy</strong> • <strong>99% Skin Disease Accuracy</strong> • <strong>0.993 AUC</strong>
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 0.85rem", lineHeight: "1.6" }}>
                    Developed a unified deep learning pipeline for brain tumor and skin disease diagnosis, applying transfer learning with VGG16, ResNet-50, and EfficientNet architectures to address cross-domain variability. Evaluated across MRI and dermoscopic datasets, using Grad-CAM class activation mapping to visually localize critical pathology regions driving model decisions.
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
                      Code / Model Details
                    </a>
                  </div>
                </div>
              </article>

              {/* Resume Project 2: Health Misinformation (Best Paper Award) */}
              <article className="pub-card featured reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/health-misinformation-llama.png"
                    alt="Health Misinformation Detection with BioBERT and Llama-3"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag" style={{ background: "rgba(2, 132, 199, 0.12)", color: "var(--accent)", borderColor: "var(--accent)" }}>
                      🏆 IEEE Best Paper Award
                    </span>
                    <span className="pub-tag">Meta-Llama-3-8B</span>
                    <span className="pub-tag">BioBERT / ClinicalBERT</span>
                  </div>
                  <h3 className="pub-title">
                    Detecting Health Misinformation: AI Solutions for Medical and Policy Content
                  </h3>
                  <p className="pub-authors">
                    Dec 2025 – Feb 2026 • <strong>83.91% Accuracy</strong> • <strong>0.7831 Macro-F1</strong> • <strong>BioBERT Refute F1: 0.7264</strong>
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 0.85rem", lineHeight: "1.6" }}>
                    Compared biomedical transformer models (BioBERT, RoBERTa, SciBERT, and ClinicalBERT) against Meta-Llama-3-8B-Instruct for 3-class claim verification (Support, Refute, Neutral). Zero-shot Meta-Llama-3-8B-Instruct reached 83.91% accuracy and 0.7831 Macro-F1, while data augmentation boosted BioBERT Refute-class F1 to 0.7264. Awarded Best Paper at IEEE ICKECS 2026.
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
                      Paper
                    </a>
                    <a
                      className="pub-link"
                      href="https://github.com/VIBHAS777/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </article>

              {/* Resume Project 3: Real-Time Multimodal Seizure Detection System */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/hardware-seizure-max30102.png"
                    alt="Low-Cost Multimodal Seizure Detection with MAX30102 and Accelerometry"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Hardware / IoT</span>
                    <span className="pub-tag">MAX30102 &amp; MPU6050</span>
                    <span className="pub-tag">Arduino Uno</span>
                  </div>
                  <h3 className="pub-title">
                    A Low-Cost Real-Time Multimodal Seizure Detection System
                  </h3>
                  <p className="pub-authors">
                    Feb 2026 – May 2026 • <strong>Dual-Threshold Signal Fusion</strong> • <strong>Continuous Non-Clinical Monitoring</strong>
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 0.85rem", lineHeight: "1.6" }}>
                    Engineered an accessible wearable prototype integrating MAX30102 photoplethysmography (heart-rate/pulse) and MPU6050 accelerometry with an Arduino Uno. Developed a dual physiological threshold sensor fusion algorithm that cuts false alarms caused by isolated heart-rate spikes or regular body movement, triggering concurrent real-time audiovisual alerts with event timestamping.
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
                      Schematics &amp; Code
                    </a>
                  </div>
                </div>
              </article>

              {/* Resume Project 4: RNN-Based Deadlock Detection */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/rnn-cpu-deadlock.png"
                    alt="RNN-Based Deadlock Detection for CPU Performance Optimization"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Operating Systems</span>
                    <span className="pub-tag">PyTorch 2-Layer RNN</span>
                    <span className="pub-tag">Benchmarking</span>
                  </div>
                  <h3 className="pub-title">
                    RNN-Based Deadlock Detection for CPU Performance Optimization
                  </h3>
                  <p className="pub-authors">
                    Feb 2025 – May 2025 • <strong>90.25% Test Accuracy</strong> • <strong>CPU Score: 70 → 98.02 (+28.02% Boost)</strong>
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 0.85rem", lineHeight: "1.6" }}>
                    Architected a Python/PyTorch system that translated simulated OS process and resource logs into sequential one-hot encoded vectors, capturing temporal dependency patterns. A 2-layer recurrent neural network predicts impending circular-wait deadlocks with 90.25% accuracy, allowing preemptive resolution that raised simulated CPU benchmark performance from 70 to 98.02.
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
                      Repository
                    </a>
                  </div>
                </div>
              </article>

              {/* Resume Project 5: Priority-Aware SDN */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/priority-sdn-healthcare.png"
                    alt="Priority-Aware SDN Performance Degradation Analysis"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Healthcare IoT Networks</span>
                    <span className="pub-tag">Dijkstra + Tabular Q-Learning</span>
                    <span className="pub-tag">SDN</span>
                  </div>
                  <h3 className="pub-title">
                    Stability Threshold and Performance Degradation Analysis of Priority-Aware SDN
                  </h3>
                  <p className="pub-authors">
                    Jan 2026 – Jun 2026 • <strong>P95 Latency: -40%</strong> • <strong>Jitter: -84%</strong> • <strong>100% On-Time Delivery</strong>
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 0.85rem", lineHeight: "1.6" }}>
                    Engineered a priority-aware SDN framework combining Dijkstra dynamic routing with tabular Q-learning to dynamically adapt queue weights across four healthcare IoT traffic tiers under fluctuating network congestion. Lowered P95 latency by 40% and jitter by 84% at peak saturation while ensuring 100% on-time packet arrival for mission-critical telemetry.
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
                      Architecture &amp; Code
                    </a>
                  </div>
                </div>
              </article>

              {/* Resume Project 6: Unified Disease Prediction Pipeline */}
              <article className="pub-card reveal">
                <div className="pub-media" data-media-type="image">
                  <img
                    src="/assets/projects/unified-disease-pipeline.png"
                    alt="Unified Disease Prediction Pipeline for Heart Disease, Diabetes, and Alzheimer's"
                    loading="lazy"
                  />
                </div>
                <div className="pub-content">
                  <div className="pub-tags">
                    <span className="pub-tag">Multi-Condition ML</span>
                    <span className="pub-tag">SMOTE Balancing</span>
                    <span className="pub-tag">Clinical Screening</span>
                  </div>
                  <h3 className="pub-title">
                    Unified Disease Prediction Pipeline (Heart Disease, Diabetes, Alzheimer's)
                  </h3>
                  <p className="pub-authors">
                    Aug 2025 – Nov 2025 • <strong>89.3% Overall Accuracy</strong> • <strong>0.887 F1-Score</strong> • <strong>Multi-Dataset Evaluation</strong>
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.5rem 0 0.85rem", lineHeight: "1.6" }}>
                    Built an end-to-end clinical machine learning pipeline for early multi-condition disease screening across heart disease, diabetes mellitus, and Alzheimer's disease. Implemented standardized preprocessing, feature engineering, and SMOTE class-imbalance correction, rigorously comparing predictive performance across three distinct clinical cohorts.
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
            PEER-REVIEWED PUBLICATIONS SECTION (FULL 12 FROM RESUME)
            ============================================================== */}
        <section className="section" id="research">
          <div className="container">
            <h2 className="section-title reveal">Publications &amp; Papers</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Peer-reviewed papers published in Q1-indexed journals and international IEEE conferences (12 publications).
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Publication 1: Q1 Engineered Science */}
              <div className="pub-card featured reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag" style={{ color: "#059669", borderColor: "#059669", fontWeight: "700" }}>
                      Q1 Journal
                    </span>
                    <span className="pub-tag">Engineered Science</span>
                    <span className="pub-tag">DOI: 10.30919/es2461</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.1rem" }}>
                    [1] Heart Disease Risk Prediction Using Deep Learning and Probabilistic Calibration Techniques
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, Dr. B. Venkatesh, et al.
                  </p>
                  <p className="pub-venue">
                    <em>Engineered Science</em> (Q1 Journal, 2025)
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
                    Bagged MLP ensemble framework integrating Bayesian bootstrap aggregation with Platt scaling, isotonic regression, and histogram binning. Achieved 96.42% accuracy, 0.0489 Brier score, 0.97 recall, and 3% false negative rate.
                  </p>
                </div>
              </div>

              {/* Publication 2: ICKECS 2026 Best Paper */}
              <div className="pub-card featured reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag" style={{ background: "rgba(2, 132, 199, 0.12)", color: "var(--accent)", borderColor: "var(--accent)", fontWeight: "700" }}>
                      🏆 Best Paper Award
                    </span>
                    <span className="pub-tag">IEEE ICKECS 2026</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.1rem" }}>
                    [2] Detecting Health Misinformation: AI Solutions for Medical and Policy Content
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Proc. IEEE International Conference on Knowledge Engineering and Communication Systems (ICKECS), 2026
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
                    Comparative study of biomedical transformers and Meta-Llama-3-8B-Instruct for 3-class claim verification (Support, Refute, Neutral), achieving 83.91% accuracy and 0.7831 Macro-F1.
                  </p>
                </div>
              </div>

              {/* Publication 3: Brain Tumor & Skin Image Analysis */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICITEICS 2026</span>
                    <span className="pub-tag">Grad-CAM &amp; Transfer Learning</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [3] Automated Medical Image Analysis for Brain Tumor and Skin Disease Diagnosis Using Transfer Learning and Grad-CAM
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Presented at the 3rd International Conference on Innovative Trends in Electronics, Information and Communication Systems (ICITEICS), 2026
                  </p>
                </div>
              </div>

              {/* Publication 4: Seizure Detection System */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICACS 2026</span>
                    <span className="pub-tag">IoT Hardware</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [4] A Low-Cost Real-Time Multimodal Seizure Detection System Using MAX30102 and Accelerometry
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Under review at the International Conference on Advanced Computing and Systems (ICACS), 2026
                  </p>
                </div>
              </div>

              {/* Publication 5: Deadlock Detection ICCCNT */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICCCNT 2025</span>
                    <span className="pub-tag">RNN &amp; CPU Optimization</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [5] Enhancing CPU Benchmark Scores Using RNN-Based Deadlock Detection from System Logs
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Presented at the 16th International Conference on Computing, Communication and Networking Technologies (ICCCNT), 2025
                  </p>
                </div>
              </div>

              {/* Publication 6: Priority-Aware SDN */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICUIS 2026</span>
                    <span className="pub-tag">Healthcare SDN</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [6] Stability Threshold and Performance Degradation Analysis of Priority-Aware SDN in Healthcare IoT Systems
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Accepted at the International Conference on Ubiquitous and Intelligent Systems (ICUIS), 2026
                  </p>
                </div>
              </div>

              {/* Publication 7: Unified ML Disease Pipeline */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICRTAC 2026</span>
                    <span className="pub-tag">Clinical Screening</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [7] A Unified Machine Learning Pipeline for Early Prediction of Heart Disease, Diabetes Mellitus, and Alzheimer's Disease
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Under review at the International Conference on Research in Trends in Advanced Computing (ICRTAC), 2026
                  </p>
                </div>
              </div>

              {/* Publication 8: Waste Detection IEEE */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">IEEE ICSSAS 2026</span>
                    <span className="pub-tag">Object Detection</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [8] AI-Powered Waste Detection and Sorting Using Object Detection
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Proc. IEEE International Conference on Self-Sustainable Artificial Intelligence Systems (ICSSAS), 2026
                  </p>
                </div>
              </div>

              {/* Publication 9: Malayalam Handwritten OCR */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">IEEE I3CTCON 2026</span>
                    <span className="pub-tag">ConvNeXt-PCA-RF</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [9] Efficient Malayalam Handwritten Character Recognition Using ConvNeXt-PCA-RandomForest Architecture
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Proc. IEEE International Conference on Convergence in Computing Technology (I3CTCON), 2026
                  </p>
                </div>
              </div>

              {/* Publication 10: Congestion Prediction in Data Centers */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICON INDIA 2026</span>
                    <span className="pub-tag">Data Center SDN</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [10] Intelligent Congestion Prediction and Control in Data Center Networks Using SDN and Deep Learning
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Accepted at IEEE ICON INDIA, 2026
                  </p>
                </div>
              </div>

              {/* Publication 11: Blockchain Banking Load Balancer */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICECA 2026</span>
                    <span className="pub-tag">Blockchain &amp; AI</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [11] AI-Driven Load Balancer with Blockchain-Based Decision Making in Banking System
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Presented at the 10th International Conference on Electronics, Communication and Aerospace Technology (ICECA), 2026
                  </p>
                </div>
              </div>

              {/* Publication 12: Space Shuttle External Tank */}
              <div className="pub-card reveal" style={{ padding: "1.25rem" }}>
                <div>
                  <div className="pub-tags">
                    <span className="pub-tag">ICAANA 2025</span>
                    <span className="pub-tag">SLSQP Optimization</span>
                  </div>
                  <h3 className="pub-title" style={{ fontSize: "1.05rem" }}>
                    [12] Optimization of Space Shuttle External Tank Design Return on Investment (ROI)
                  </h3>
                  <p className="pub-authors">
                    <strong>Vibhas Reddy Araveeti</strong>, et al.
                  </p>
                  <p className="pub-venue">
                    Presented at the International Conference on Applied Analysis and Numerical Analytics (ICAANA), 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            WORK EXPERIENCE & EDUCATION SECTION (FROM RESUME)
            ============================================================== */}
        <section className="section" id="experience">
          <div className="container">
            <h2 className="section-title reveal">Education &amp; Experience</h2>

            <div className="timeline">
              {/* Education: Amrita University */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">2023 – 2027</span>
                  <h3 className="timeline-title">Bachelor of Technology, Computer Science and Engineering</h3>
                  <p className="timeline-org">Amrita Vishwa Vidyapeetham, Bengaluru, India</p>
                  <p className="timeline-desc">
                    <strong>Cumulative GPA: 8.65 / 10</strong>. Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Software Engineering, Operating Systems, Computer Organization, Database Management Systems, Computer Networks, Machine Learning, Deep Learning, Natural Language Processing, Distributed Systems, Probability, Linear Algebra, and Discrete Mathematics.
                  </p>
                </div>
              </div>

              {/* Work Experience: Amrita Research Intern */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">Mar 2025 – Jun 2026</span>
                  <h3 className="timeline-title">Research Intern — Healthcare AI</h3>
                  <p className="timeline-org">Amrita University, Bengaluru, India (Supervisor: Dr. B. Venkatesh)</p>
                  <p className="timeline-desc">
                    Investigated heart attack risk prediction to improve the reliability of clinical risk assessment through deep learning and probabilistic calibration. Built and trained a bagged Multilayer Perceptron (MLP) ensemble framework in Python using scikit-learn and PyTorch, integrating Bayesian bootstrap aggregation with multi-technique calibration (Platt scaling, isotonic regression, histogram binning). Achieved 96.42% accuracy, Brier score of 0.0489, 0.97 recall, reducing false negative rates to 3%. Co-authored research published in the Q1-indexed journal <em>Engineered Science</em> (DOI: 10.30919/es2461).
                  </p>
                </div>
              </div>

              {/* Leadership: ML Minds */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">Sep 2024 – Present</span>
                  <h3 className="timeline-title">Co-Founder &amp; Lead Developer</h3>
                  <p className="timeline-org">ML Minds, Amrita Vishwa Vidyapeetham</p>
                  <p className="timeline-desc">
                    Co-founded and led a student-driven machine learning community, organizing technical workshops, coding bootcamps, and research initiatives. Mentored peer members on ML concepts and open-source projects, fostering a collaborative learning environment across cohorts.
                  </p>
                </div>
              </div>

              {/* Leadership: Powerlifting Captain */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">Jul 2024 – Feb 2025</span>
                  <h3 className="timeline-title">Captain — University Powerlifting Team</h3>
                  <p className="timeline-org">Amrita Vishwa Vidyapeetham Sports Council</p>
                  <p className="timeline-desc">
                    Guided squad members to compete in competitive district and state powerlifting championships. Coordinated structured training and nutrition regimens, leading the team to secure 1st place overall in the district championship.
                  </p>
                </div>
              </div>

              {/* Leadership: Kalanjali 2025 Coordinator */}
              <div className="timeline-item reveal">
                <div className="timeline-dot">
                  <span className="timeline-dot-inner" />
                </div>
                <div className="timeline-card">
                  <span className="timeline-date">Apr 2025</span>
                  <h3 className="timeline-title">Cultural Coordinator — Kalanjali 2025 (College Fest)</h3>
                  <p className="timeline-org">Amrita Vishwa Vidyapeetham</p>
                  <p className="timeline-desc">
                    Directed event logistics, cross-functional student teams, stage management, and multi-college participant registration for the college's flagship annual cultural festival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            AWARDS & HONORS SECTION (MATCHING RESUME)
            ============================================================== */}
        <section className="section" id="awards">
          <div className="container">
            <h2 className="section-title reveal">Awards &amp; Distinctions</h2>

            <div className="awards-featured reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "1.25rem" }}>
              <div className="award-card featured">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🏆</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>IEEE ICKECS 2026 Best Paper Award</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>IEEE Computer Society</p>
                  </div>
                </div>
                <p className="award-desc">
                  Awarded Best Paper at the 2026 International Conference on Knowledge Engineering and Communication Systems for <em>"Detecting Health Misinformation: AI Solutions for Medical and Policy Content."</em>
                </p>
              </div>

              <div className="award-card featured">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🌟</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>Top 3% Student Researcher Recognition</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Amrita Vishwa Vidyapeetham</p>
                  </div>
                </div>
                <p className="award-desc">
                  Formally recognized among the top 3% of student researchers across the university for prolific research contributions and peer-reviewed publications.
                </p>
              </div>

              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🥇</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>1st Place — Arista Networks Boot Camp 2026</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Arista Networks</p>
                  </div>
                </div>
                <p className="award-desc">
                  Secured 1st place in the competitive Arista Networks Boot Camp 2026 with an exceptional score of 86%.
                </p>
              </div>

              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🥇</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>SOF International Mathematics Olympiad (IMO)</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Gold Medalist</p>
                  </div>
                </div>
                <p className="award-desc">
                  Earned the Gold Medal in the Science Olympiad Foundation International Mathematics Olympiad through rigorous analytical problem-solving.
                </p>
              </div>

              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>💯</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>100% Aggregate Score (Class 10)</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Board Examination Distinction</p>
                  </div>
                </div>
                <p className="award-desc">
                  Achieved a perfect 100% aggregate score in Class 10 Board Examinations, earning academic honors.
                </p>
              </div>

              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>⚡</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>95th Percentile — JEE Main</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>National Engineering Entrance</p>
                  </div>
                </div>
                <p className="award-desc">
                  Ranked in the 95th percentile among over 1 million candidates nationwide in India's prestigious engineering examination.
                </p>
              </div>

              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🏋️</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>District Gold &amp; State Silver in Powerlifting</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>Varsity Team Captain</p>
                  </div>
                </div>
                <p className="award-desc">
                  Won 1st Place &amp; Gold Medal at the District Powerlifting Championship, Silver Medal at State level, bench-pressing 70kg in first year.
                </p>
              </div>

              <div className="award-card">
                <div className="award-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div className="award-icon" style={{ fontSize: "1.8rem" }}>🏊</div>
                  <div>
                    <h3 className="award-title" style={{ fontSize: "1.1rem" }}>State Swimming Championship Gold</h3>
                    <p className="award-org" style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600" }}>State Championship (Class 12)</p>
                  </div>
                </div>
                <p className="award-desc">
                  Won the Gold Medal at the state-level swimming championship in Class 12, successfully balancing competitive athletics with academics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            TECHNICAL SKILLS SECTION (FROM RESUME)
            ============================================================== */}
        <section className="section" id="service">
          <div className="container">
            <h2 className="section-title reveal">Technical Arsenal &amp; Tools</h2>
            <p className="reveal" style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "750px" }}>
              Core languages, machine learning frameworks, clinical imaging toolkits, and developer environments from my resume.
            </p>

            <div className="awards-service reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              <div className="award-card">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>AI &amp; Deep Learning</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.35rem" }}>Frameworks &amp; Toolkits</p>
                <p className="award-desc" style={{ fontSize: "0.88rem" }}>
                  PyTorch, TensorFlow, Keras, Hugging Face Transformers, Scikit-learn, XGBoost, LightGBM, SHAP, Grad-CAM, MLflow, MONAI, NiBabel.
                </p>
              </div>

              <div className="award-card">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Core Programming Languages</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.35rem" }}>Systems &amp; Scripting</p>
                <p className="award-desc" style={{ fontSize: "0.88rem" }}>
                  Python, C, C++, Java, TypeScript, Go, Rust, Ruby, SQL, Bash.
                </p>
              </div>

              <div className="award-card">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Healthcare &amp; Biomedical</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.35rem" }}>Clinical Standards</p>
                <p className="award-desc" style={{ fontSize: "0.88rem" }}>
                  FHIR, HL7, Medical Image Segmentation, Radiograph Grad-CAM, Photoplethysmography (PPG), ECG/EEG Signal Analysis, Scipy.
                </p>
              </div>

              <div className="award-card">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Full-Stack &amp; Systems</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.35rem" }}>Web &amp; APIs</p>
                <p className="award-desc" style={{ fontSize: "0.88rem" }}>
                  React.js, Next.js, Node.js, Express.js, FastAPI, Flask, Django, PostgreSQL, MongoDB.
                </p>
              </div>

              <div className="award-card">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>DevOps, Cloud &amp; Tools</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.35rem" }}>Infrastructure</p>
                <p className="award-desc" style={{ fontSize: "0.88rem" }}>
                  Docker, Kubernetes, Git, GitHub, Jenkins, Postman, Linux/Bash, VS Code, Jupyter, Terraform.
                </p>
              </div>

              <div className="award-card">
                <h3 className="award-title" style={{ fontSize: "1.05rem" }}>Interests &amp; Leadership</h3>
                <p className="award-desc" style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.35rem" }}>Extracurriculars</p>
                <p className="award-desc" style={{ fontSize: "0.88rem" }}>
                  AI/ML Research, Competitive Programming, Open-Source Development, Technical Mentoring, Competitive Powerlifting.
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
            © {new Date().getFullYear()} Vibhas Reddy Araveeti. Academic research portfolio.
          </p>
        </div>
      </footer>
    </>
  );
}
