---
layout: default
title: Robotics and Multi-Robot Planning
browser_title: James D. Motes | Robotics and Multi-Robot Planning
permalink: /
body_class: home-page
---

{% include navigation.html %}

<main class="home-main" id="main-content" tabindex="-1">
  <section class="profile-intro" aria-labelledby="profile-title">
    <div class="profile-nameplate">
      <figure class="profile-photo">
        <img src="{{ '/assets/images/james_smile.jpg' | relative_url }}" alt="Portrait of James D. Motes" width="164" height="164" fetchpriority="high">
      </figure>
      <div class="profile-copy">
        <p class="eyebrow">Faculty candidate · {{ site.data.profile.search_cycle }} academic job market</p>
        <h1 id="profile-title">James D. Motes</h1>
        <p class="status-line">Postdoctoral Researcher, University of Illinois Urbana-Champaign · Parasol Lab</p>
        {% include material-links.html context='hero' %}
      </div>
    </div>
    <div class="profile-statement">
      <p class="research-headline">{{ site.data.home.headline }}</p>
      <p class="intro-pitch">{{ site.data.home.summary }}</p>
    </div>
  </section>

  <section class="home-section short-bio" id="short-bio" aria-labelledby="short-bio-title">
    <div class="section-heading full-width-heading">
      <h2 id="short-bio-title">Short Bio</h2>
      <p>I am a postdoctoral researcher in the <a href="{{ site.data.profile.lab_url }}">Parasol Lab</a> at the University of Illinois Urbana-Champaign, working with Nancy M. Amato. I earned my Ph.D. in Computer Science at UIUC, studying multi-robot task and motion planning.</p>
      <p class="at-a-glance">
        <strong>At a glance:</strong>
        {% for item in site.data.home.at_a_glance %}<a href="{{ item.href | relative_url }}">{{ item.text }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}
      </p>
      <p><strong>Research leadership:</strong> I lead graduate research teams and open-source software development in multi-robot planning, and have served as a primary author on NSF and industry research proposals.</p>
    </div>
  </section>

  <section class="home-section" id="research" aria-labelledby="research-directions-title">
    <span class="compatibility-anchor" id="selected-research-directions" aria-hidden="true"></span>
    <div class="section-heading prose">
      <h2 id="research-directions-title">Research</h2>
      <p>{{ site.data.home.research_intro }}</p>
    </div>
    <div class="research-group" aria-labelledby="foundations-title">
      <h3 class="research-group-title" id="foundations-title">Established foundations</h3>
      <div class="research-grid">
        {% for topic in site.data.home.foundations %}
        {% include research-panel.html topic=topic %}
        {% endfor %}
      </div>
    </div>
    <div class="research-group research-group--future" aria-labelledby="future-title">
      <h3 class="research-group-title" id="future-title">Future directions</h3>
      <p class="prose">{{ site.data.home.future_intro }}</p>
      <div class="research-grid">
        {% for topic in site.data.home.future_directions %}
        {% include research-panel.html topic=topic future=true %}
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="home-section" id="leadership" aria-labelledby="leadership-title">
    <div class="section-heading prose">
      <h2 id="leadership-title">Research Leadership &amp; Mentoring</h2>
      <p>I lead student teams from project definition through implementation and publication, connecting their work through shared planning software. My direct mentorship has supported 11 student-led archival publications.</p>
    </div>
    <div class="leadership-details">
      <div>
        <h3>Mentoring approach</h3>
        <p>I emphasize early ownership and increasing independence for graduate and undergraduate researchers. I have mentored over 20 graduate students, including five through completed Ph.D. or master’s degrees as their primary day-to-day research mentor.</p>
      </div>
      <div>
        <h3>Building a research program</h3>
        <p>I lead open-source planning software: I authored CoMotion’s code, designed Open-SPITE’s architecture and direct its student developers, and coordinate Parasol Planning Library development.</p>
        <p class="student-work-label">Student-led examples</p>
        {% include publication-links.html publications=site.data.home.leadership_publications label='Student-led publications' %}
      </div>
    </div>
  </section>

  <section class="home-section" id="video-demos" aria-labelledby="video-demos-title">
    <h2 id="video-demos-title">Video Demos</h2>
    {% for demo in site.data.home.video_demos %}
    {% assign publication = site.data.publications.items | where: 'id', demo.publication_id | first %}
    {% assign paper = publication.links | where: 'label', 'paper' | first %}
    <article class="research-demo" aria-labelledby="{{ demo.id }}-title">
      <div class="demo-player" id="{{ demo.id }}-player">
        <a class="demo-play" href="{{ demo.video_url }}" data-video-src="{{ demo.embed_url }}" data-video-title="{{ demo.title | escape }}" aria-label="Play {{ demo.title | escape }}">
          <span class="play-symbol" aria-hidden="true">▶</span>
          <span>Play research video</span>
        </a>
      </div>
      <div>
        <h3 id="{{ demo.id }}-title">{{ demo.title }}</h3>
        <p>{{ demo.caption }}</p>
        <div class="inline-links">
          <a href="{{ demo.video_url }}">Watch on YouTube</a>
          {% if paper %}<a href="{{ paper.href }}">Read the paper</a>{% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
    <p class="section-note"><a href="{{ '/publications/' | relative_url }}">View all publications</a></p>
  </section>

  <section class="home-section" id="teaching" aria-labelledby="teaching-title">
    <span class="compatibility-anchor" id="teaching-mentoring" aria-hidden="true"></span>
    <div class="section-heading prose">
      <h2 id="teaching-title">Teaching &amp; Outreach</h2>
      <p>My teaching connects theory, implementation, and experimental evaluation through projects in algorithms, AI, and robotics.</p>
    </div>
    <div class="teaching-evidence">
      <article>
        <h3>Teaching &amp; curriculum</h3>
        <p>As an AI4ALL lead instructor, I developed introductory AI curriculum and led instructor teams. I also previously led curriculum development and taught Parasol Lab’s motion-planning course for new members.</p>
      </article>
      <article>
        <h3>Community outreach</h3>
        <p>Through the Houston Robotics Club, I mentor community college and high school students on AI and robotics projects.</p>
      </article>
    </div>
    <p class="teaching-interests"><strong>Teaching interests:</strong> algorithms, artificial intelligence, robotics, motion planning, and autonomous systems.</p>
  </section>

  <section class="home-section" id="translation" aria-labelledby="translation-title">
    <div class="prose">
      <h2 id="translation-title">Research Translation</h2>
      <p>I have worked on industrial human–robot collaboration, founded Normandy Automation for robotic manufacturing, and led software development for automated materials analysis at Optigon.</p>
      <a href="{{ '/cv/' | relative_url }}#cv-industry-translation">Industry experience and professional record</a>
    </div>
  </section>

  <section class="home-section faculty-contact" id="contact" aria-labelledby="faculty-search-title">
    <div class="prose">
      <h2 id="faculty-search-title">Faculty Search</h2>
      <p>I am seeking tenure-track faculty positions in Computer Science, ECE, Robotics, and related programs in the {{ site.data.profile.search_cycle }} cycle.</p>
    </div>
    {% include material-links.html context='contact' %}
  </section>
</main>
