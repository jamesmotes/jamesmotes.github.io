---
layout: default
title: Robotics and Multi-Robot Planning
browser_title: James D. Motes | Robotics and Multi-Robot Planning
permalink: /
body_class: home-page home-page--compact
---

<header class="home-masthead">
  {% include navigation.html %}
  <div class="home-hero">
    <div class="profile-nameplate">
      <figure class="profile-photo">
        <img src="{{ '/assets/images/james_smile.jpg' | relative_url }}" alt="Portrait of James D. Motes" width="164" height="164" fetchpriority="high">
      </figure>
      <div class="profile-copy">
        <p class="eyebrow">Faculty candidate · {{ site.data.profile.search_cycle }} academic job market</p>
        <h1 id="profile-title">James D. Motes</h1>
        <p class="hero-affiliation">Postdoctoral researcher · Parasol Lab · UIUC</p>
        {% include material-links.html context='hero' %}
      </div>
    </div>
  </div>
</header>

<main class="home-main" id="main-content" tabindex="-1">
  <section class="profile-intro" aria-labelledby="bio-title">
    <div class="profile-statement prose" id="bio">
      <h2 id="bio-title">Bio</h2>
      <p>I am a postdoctoral researcher in the <a href="{{ site.data.profile.lab_url }}">Parasol Lab</a> at the University of Illinois Urbana-Champaign, working with Nancy M. Amato. I earned my Ph.D. in Computer Science at UIUC and my M.S. in Computer Science and B.S. in Computer Engineering at Texas A&amp;M University.</p>
      <section class="bio-subsection" id="research-identity" aria-labelledby="identity-title">
        <h3 id="identity-title">Research Identity</h3>
        <p>{{ site.data.home.summary }}</p>
      </section>
      <section class="bio-subsection" id="leadership" aria-labelledby="leadership-title">
        <span class="compatibility-anchor" id="teaching" aria-hidden="true"></span>
        <span class="compatibility-anchor" id="teaching-mentoring" aria-hidden="true"></span>
        <h3 id="leadership-title">Leadership</h3>
        <p>I currently lead research teams involving <strong>12+ graduate students</strong>. Through my postdoc and graduate studies, I have mentored <strong>20+ graduate students</strong>, including five through degree completion. This work has contributed to <strong>11 student-led publications</strong>. I lead the development of <strong>three open-source planning libraries</strong> and have served as a primary author on NSF and industry research proposals.</p>
      </section>
    </div>
  </section>

  <section class="home-section home-research" id="research" aria-labelledby="research-title">
    <span class="compatibility-anchor" id="selected-research-directions" aria-hidden="true"></span>
    <span class="compatibility-anchor" id="video-demos" aria-hidden="true"></span>
    <h2 id="research-title">Selected results &amp; demos</h2>
    <div class="home-demos">
      {% for demo in site.data.home.video_demos %}
      {% assign publication = site.data.publications.items | where: 'id', demo.publication_id | first %}
      {% assign paper = publication.links | where: 'label', 'paper' | first %}
      {% assign has_video = false %}
      {% if demo.video_url or demo.local_video %}{% assign has_video = true %}{% endif %}
      <article class="home-demo{% if has_video %} home-demo--video research-demo{% endif %}" aria-labelledby="{{ demo.id }}-title">
        {% if demo.local_video %}
        <div class="demo-player demo-player--local">
          <video controls playsinline preload="none" poster="{{ demo.image | relative_url }}" aria-label="{{ demo.title | escape }}">
            <source src="{{ demo.local_video | relative_url }}" type="video/mp4">
            <a href="{{ demo.local_video | relative_url }}">Watch {{ demo.title }}</a>
          </video>
        </div>
        {% elsif demo.video_url %}
        <div class="demo-player demo-player--preview">
          <a class="demo-play" href="{{ demo.video_url }}" data-video-src="{{ demo.embed_url }}" data-video-title="{{ demo.title | escape }}" aria-label="Play {{ demo.title | escape }}">
            <img src="{{ demo.image | relative_url }}" alt="" width="900" height="530">
            <span class="demo-play-label"><span aria-hidden="true">▶</span> Watch demo</span>
          </a>
        </div>
        {% endif %}
        <div>
          <h3 id="{{ demo.id }}-title">{{ demo.heading }}</h3>
          <ul class="demo-points">
            {% for point in demo.points %}
            <li>{{ point }}</li>
            {% endfor %}
          </ul>
          <a href="{{ paper.href }}" title="{{ publication.title | escape }}">{{ demo.paper_label }} paper</a>
          {% unless has_video %}<p class="demo-status">{{ demo.video_status }}</p>{% endunless %}
        </div>
      </article>
      {% endfor %}
    </div>
    <div class="inline-links">
      <a href="{{ '/research/' | relative_url }}">Explore my research</a>
      <a href="{{ '/publications/' | relative_url }}">All publications</a>
    </div>
  </section>


  <footer class="home-contact" id="contact">
    <p>I am seeking tenure-track faculty positions in Computer Science, ECE, Robotics, and related programs.</p>
    <a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a>
  </footer>
</main>
