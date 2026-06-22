---
layout: default
title: Home
permalink: /
body_class: home-page
---

{% include navigation.html %}

<main class="home-main">
  <section class="profile-intro" aria-labelledby="profile-title">
    <div class="profile-nameplate">
      <figure class="profile-photo">
        <img src="/assets/images/james.jpg" alt="Portrait of James D. Motes">
      </figure>

      <div class="profile-copy">
        <p class="eyebrow">Faculty candidate, 2026–27 cycle</p>
        <h1 id="profile-title">James D. Motes</h1>
        <p class="status-line">
          Postdoctoral Researcher, University of Illinois Urbana-Champaign · Parasol Lab
        </p>
        <nav class="profile-links" aria-label="Faculty search links">
          <button type="button" class="copy-email-button" data-copy-text="jmotes2@illinois.edu" aria-label="Copy email address jmotes2@illinois.edu">jmotes2@illinois.edu</button>
          <a href="/assets/CV/james_motes_cv.pdf">CV</a>
          <a href="https://scholar.google.com/citations?user=O_Zne90AAAAJ&amp;hl=en&amp;oi=ao">Google Scholar</a>
          <a href="https://www.parasollab.web.illinois.edu/people/jmotes2/">Parasol Lab</a>
        </nav>
        <span class="copy-status" aria-live="polite"></span>
      </div>
    </div>

    <div class="profile-statement">
      <h2>Adaptive planning for robot teams people can guide.</h2>
      <p class="intro-pitch">
        I build planning systems that keep robot teams scalable by coordinating only where the problem demands it. My faculty lab will make those systems faster, more interactive, and easier for people to guide through language, visualization, and shared task representations.
      </p>
    </div>
  </section>

  <section class="home-section" id="short-bio" aria-labelledby="short-bio-title">
    <div class="section-heading full-width-heading">
      <h2 id="short-bio-title">Short Bio</h2>
      <p>
        James D. Motes is a postdoctoral researcher in the Siebel School of Computing and Data Science at the University of Illinois Urbana-Champaign, working in the Parasol Lab with Nancy M. Amato. He develops adaptive planning systems for robot teams that coordinate only when tasks, conflicts, or workspace structure require it. His work spans multi-robot task and motion planning, accelerated validation, and human-steerable interfaces. He received his Ph.D. from UIUC and is now a 2026-27 faculty candidate on the academic job market.
      </p>
    </div>
  </section>

  <section class="home-section" id="selected-research-directions" aria-labelledby="research-directions-title">
    <div class="section-heading">
      <h2 id="research-directions-title">Selected Research Directions</h2>
      <p>
        {{ site.data.home.research_directions_intro }}
      </p>
    </div>

    <div class="research-direction-list">
      {% for thrust in site.data.home.research_program_thrusts %}
      <article class="research-direction-card">
        <p class="item-label">{{ thrust.label }}</p>
        <h3>{{ thrust.title }}</h3>
        <p class="direction-tagline">{{ thrust.tagline }}</p>
        <p>{{ thrust.summary }}</p>
        <ul class="direction-publications" aria-label="Selected publications">
          {% for publication in thrust.publications %}
          <li>
            <span class="direction-publication-title">{{ publication.title }}</span>
            <span class="direction-publication-venue">{{ publication.venue }}</span>
          </li>
          {% endfor %}
        </ul>
      </article>
      {% endfor %}
    </div>
    <p class="section-note">
      <a href="/publications/">View the full publications page</a>
    </p>
  </section>

  <section class="home-section" id="video-demos" aria-labelledby="video-demos-title">
    <div class="section-heading">
      <h2 id="video-demos-title">Video Demos</h2>
    </div>
    <div class="demo-list" aria-label="Video demos">
      {% for demo in site.data.home.video_demos %}
      <article class="demo-item">
        <div class="demo-thumb">
          {% if demo.embed_url %}
          <iframe src="{{ demo.embed_url }}" title="{{ demo.title }}" allowfullscreen loading="lazy"></iframe>
          {% else %}
          <span>{{ demo.title }}</span>
          {% endif %}
        </div>
        <div>
          <h3>{{ demo.title }}</h3>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  {% comment %}
  <section class="home-section" id="selected-publications" aria-labelledby="publications-title">
    <div class="section-heading split-heading">
      <div>
        <h2 id="publications-title">Selected Publications</h2>
        <p>A few papers anchor the research themes above. The full publication archive is one click away.</p>
      </div>
      <a class="text-cta" href="/publications/">View all publications</a>
    </div>

    <div class="publication-list">
      {% for publication in site.data.home.selected_publications %}
      <article class="publication-item">
        <p class="item-label">{{ publication.label }}</p>
        <div>
          <h3>{{ publication.title }}</h3>
          <p class="paper-title">{{ publication.full_title }}</p>
          <p class="venue">{{ publication.venue }}</p>
          <p>{{ publication.summary }}</p>
          <div class="inline-links">
            {% for link in publication.links %}
            <a href="{{ link.href }}">{{ link.label }}</a>
            {% endfor %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endcomment %}

  <section class="home-section" id="teaching-mentoring" aria-labelledby="teaching-title">
    <div class="section-heading full-width-heading">
      <h2 id="teaching-title">Teaching &amp; Mentoring</h2>
      <p>
        My teaching is project-based and research-led: students learn algorithms, AI, and robotics by building systems that accumulate across the semester. In the lab, I use a hierarchical mentoring model that gives junior students early research ownership and helps senior students develop as leaders. Using this approach to mentoring as a postdoc and before as a senior PhD student I have mentored over 20 graduate students and dozens of undergraduates.
      </p>
    </div>

    <div class="teaching-list">
      {% for card in site.data.home.teaching_cards %}
      <article>
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-section search-materials" aria-labelledby="faculty-search-title">
    <div>
      <h2 id="faculty-search-title">Faculty Search</h2>
      <p>
        I am applying for tenure-track faculty positions in the 2026–27 cycle, especially in Computer Science, ECE, Robotics, and related programs building strength in robotics, AI planning, autonomous systems, human-robot interaction, and intelligent physical systems.
      </p>
    </div>
    <nav class="profile-links" aria-label="Faculty search materials">
      <a href="/assets/CV/james_motes_cv.pdf">CV</a>
      <a href="mailto:jmotes2@illinois.edu">Email</a>
    </nav>
  </section>
</main>
