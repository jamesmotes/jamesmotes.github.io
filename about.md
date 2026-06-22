---
layout: page
title: About / CV
permalink: /about/
body_class: standard-page
published: false
sitemap: false
---

{% include navigation.html %}

<main class="page-shell about-page">
  <header class="page-hero about-hero">
    <p class="eyebrow">About / CV</p>
    <h1>Robotics and AI researcher building adaptive planning systems for human-steerable robot teams.</h1>
    <p>
      I am a postdoctoral researcher in the Siebel School of Computing and Data Science at the University of Illinois Urbana-Champaign, where I work in the Parasol Lab with Nancy M. Amato. I am applying for tenure-track faculty positions in the 2026-27 cycle.
    </p>
    <nav class="profile-links about-links" aria-label="Professional materials">
      <a href="/assets/CV/james_motes_cv.pdf">CV</a>
      <a href="/publications/">Publications</a>
      <a href="https://scholar.google.com/citations?user=O_Zne90AAAAJ&amp;hl=en&amp;oi=ao">Google Scholar</a>
      <a href="https://www.parasollab.web.illinois.edu/people/jmotes2/">Parasol Lab</a>
      <a href="mailto:jmotes2@illinois.edu">Email</a>
    </nav>
  </header>

  <section class="page-section about-intro-section" aria-labelledby="about-overview">
    <div class="about-intro">
      <div>
        <img class="portrait-panel" src="/assets/images/james.jpg" alt="Portrait of James D. Motes">
      </div>
      <div>
        <h2 id="about-overview">About</h2>
        <p class="about-lead">
          My research develops robot planning systems that avoid the exponential cost of full joint planning by decomposing large problems, coordinating robots only around the interactions that matter, and accelerating the motion-validation operations that limit deployment.
        </p>
        <p>
          The work sits at the intersection of robotics, AI planning, motion planning, multi-agent systems, human-robot interaction, and planning infrastructure. The long-term goal is to build robot teams that are scalable enough for complex environments and steerable enough for people to specify, inspect, and revise their behavior.
        </p>
        <p>
          My future lab will develop human-steerable robot-team intelligence for applications in manufacturing, logistics, automated laboratories, field robotics, assistive robotics, and AI-assisted engineering design.
        </p>
      </div>
    </div>
  </section>

  <section class="page-section" aria-labelledby="about-snapshot">
    <div class="section-heading full-width-heading">
      <h2 id="about-snapshot">At a Glance</h2>
    </div>
    <div class="about-stat-grid">
      <article class="about-stat">
        <p class="item-label">Current role</p>
        <h3>Postdoctoral Researcher</h3>
        <p>University of Illinois Urbana-Champaign, Parasol Lab. Advisor: Nancy M. Amato.</p>
      </article>
      <article class="about-stat">
        <p class="item-label">Research output</p>
        <h3>14 peer-reviewed archival publications</h3>
        <p>11 journal articles and 3 refereed conference proceedings, plus first-author and student-led manuscripts under review.</p>
      </article>
      <article class="about-stat">
        <p class="item-label">Mentoring</p>
        <h3>20+ graduate students mentored</h3>
        <p>Mentoring across multi-robot planning, accelerated validation, human-steerable planning, and open-source planning infrastructure.</p>
      </article>
      <article class="about-stat">
        <p class="item-label">Research themes</p>
        <h3>Adaptive, fast, and steerable planning</h3>
        <p>Adaptive robot-team planning, accelerated planning infrastructure, and human-facing interfaces for specifying and revising robot behavior.</p>
      </article>
    </div>
    <p class="section-note">CV snapshot: Google Scholar reports 376 citations and h-index 7 as of June 19, 2026.</p>
  </section>

  <section class="page-section" aria-labelledby="lab-leadership">
    <div class="section-heading full-width-heading">
      <h2 id="lab-leadership">Prepared to Build and Lead a Research Lab</h2>
      <p>
        My postdoctoral work combines an independent research agenda with day-to-day leadership of student projects, paper development, software integration, and proposal narratives.
      </p>
    </div>
    <div class="about-card-grid">
      <article class="about-card">
        <h3>Research leadership</h3>
        <p>I lead graduate research teams across multi-robot planning, accelerated motion validation, human-steerable planning, and open-source planning infrastructure.</p>
      </article>
      <article class="about-card">
        <h3>Mentoring</h3>
        <p>I have mentored more than 20 graduate students, including students who have completed degrees and students now advancing as Ph.D. candidates.</p>
      </article>
      <article class="about-card">
        <h3>Funding and collaboration</h3>
        <p>I have been a primary author on NSF and industry-sponsored research proposals connecting language, HRI, motion planning, environment design, and deployable automation.</p>
      </article>
      <article class="about-card">
        <h3>Professional service</h3>
        <p>I serve as a program committee member and reviewer for venues including WAFR, RA-L, T-RO, ICRA, IROS, MRS, IJRR, and AIJ.</p>
      </article>
    </div>
  </section>

  <section class="page-section" aria-labelledby="research-path">
    <div class="section-heading full-width-heading">
      <h2 id="research-path">Research Path</h2>
    </div>
    <div class="about-timeline">
      <article class="about-timeline-item">
        <p class="about-date">Foundations</p>
        <div>
          <h3>Multi-robot task and motion planning</h3>
          <p>My research began with methods that reason over task structure, subtask dependencies, and robot interactions. This led to hypergraph-based planning frameworks that compose and decompose robot, object, and robot-object spaces instead of searching one monolithic state space.</p>
        </div>
      </article>
      <article class="about-timeline-item">
        <p class="about-date">Coordination</p>
        <div>
          <h3>Adaptive robot coordination</h3>
          <p>I develop planners that let robots plan independently when possible, detect conflicts, and create local coordination subproblems only where needed. This line now includes kinodynamic planning, experience reuse, parallelization, and asymptotic solution quality.</p>
        </div>
      </article>
      <article class="about-timeline-item">
        <p class="about-date">Infrastructure</p>
        <div>
          <h3>Fast motion validation and planning software</h3>
          <p>Adaptive methods repeatedly call motion-validation routines, so my work also develops dynamic roadmaps, geometric approximations, lazy validation, and GPU/SIMD-friendly primitives for changing, cluttered, and multi-robot environments.</p>
        </div>
      </article>
      <article class="about-timeline-item">
        <p class="about-date">Interfaces</p>
        <div>
          <h3>Human-steerable planning</h3>
          <p>My newest direction studies planning systems that let non-expert users specify preferences, inspect robot motions, and refine behavior through natural language, AR/VR interfaces, and shared task representations.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="page-section" aria-labelledby="academic-background">
    <div class="section-heading full-width-heading">
      <h2 id="academic-background">Academic Background</h2>
    </div>
    <div class="credential-list">
      <article class="credential-item">
        <p class="item-label">2023</p>
        <h3>Ph.D. in Computer Science, University of Illinois Urbana-Champaign</h3>
        <p>Dissertation: <em>Multi-robot Task and Motion Planning in Hybrid State Spaces</em>. Advisor: Nancy M. Amato.</p>
      </article>
      <article class="credential-item">
        <p class="item-label">2019</p>
        <h3>M.S. in Computer Science, Texas A&amp;M University</h3>
        <p>Thesis: <em>Interaction Templates for Multi-Robot Systems</em>. Advisor: Nancy M. Amato.</p>
      </article>
      <article class="credential-item">
        <p class="item-label">2018</p>
        <h3>B.S. in Computer Engineering, Texas A&amp;M University</h3>
        <p>Minor in Mathematics, Engineering Honors, Undergraduate Research Scholar.</p>
      </article>
    </div>
  </section>

  <section class="page-section" aria-labelledby="teaching-mentoring">
    <div class="section-heading full-width-heading">
      <h2 id="teaching-mentoring">Teaching and Mentoring</h2>
      <p>
        My teaching is project-based and research-led. I want students to learn robotics and AI by building systems, testing assumptions, and connecting algorithms to physical or simulated behavior.
      </p>
    </div>
    <div class="about-card-grid">
      <article class="about-card">
        <h3>AI4ALL lead instructor</h3>
        <p>I taught introductory AI courses through partner programs at UTEP, New Mexico State, Worcester Polytechnic Institute, and Texas A&amp;M, developed Discover AI curriculum, and led instructor teams.</p>
      </article>
      <article class="about-card">
        <h3>Motion-planning instruction</h3>
        <p>Within the Parasol Lab, I developed and taught a motion-planning course for new lab members and helped students connect theory, code, and experiments.</p>
      </article>
      <article class="about-card">
        <h3>Structured research mentoring</h3>
        <p>My mentoring emphasizes research ownership, regular writing practice, presentation development, software integration, and student leadership across related projects.</p>
      </article>
      <article class="about-card">
        <h3>Outreach</h3>
        <p>Through the Houston Robotics Club, I mentor community college and high school students on AI and robotics projects that help them move toward STEM programs and internships.</p>
      </article>
    </div>
  </section>

  <section class="page-section" aria-labelledby="translation">
    <div class="section-heading full-width-heading">
      <h2 id="translation">Research Translation</h2>
      <p>
        My research is shaped by deployment-facing experience. Real environments need planning systems that are fast, inspectable, adaptable, and usable by people who are not planning experts.
      </p>
    </div>
    <div class="about-timeline compact-timeline">
      <article class="about-timeline-item">
        <p class="about-date">2019-2023</p>
        <div>
          <h3>Industrial human-robot factory collaboration</h3>
          <p>I collaborated with Foxconn Interconnect Technologies and UIUC research groups led by Timothy Bretl and Katherine Driggs-Campbell on collaborative human-robot factory projects.</p>
        </div>
      </article>
      <article class="about-timeline-item">
        <p class="about-date">2023-2025</p>
        <div>
          <h3>Normandy Automation</h3>
          <p>As founder, I developed autonomous robotic manufacturing concepts for welding and CNC machine-tending workflows with minimal human reprogramming.</p>
        </div>
      </article>
      <article class="about-timeline-item">
        <p class="about-date">2024-Present</p>
        <div>
          <h3>Optigon Inc.</h3>
          <p>As principal software engineer, I lead software development for DOE SBIR-funded high-throughput spectroscopic metrology and analysis tools for clean-energy materials.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="page-section search-materials about-materials" aria-labelledby="about-downloads">
    <div>
      <h2 id="about-downloads">Faculty Search Materials</h2>
      <p>
        I am especially interested in departments and institutes building strength in robotics, AI planning, autonomous systems, human-robot interaction, multi-agent systems, and intelligent physical systems.
      </p>
    </div>
    <nav class="profile-links" aria-label="Faculty search materials">
      <a href="/assets/CV/james_motes_cv.pdf">CV</a>
      <a href="mailto:jmotes2@illinois.edu">Email</a>
    </nav>
  </section>
</main>
