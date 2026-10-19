---
layout: page
title: Research
permalink: /research/
body_class: standard-page narrative-page research-overview
coordination_papers:
  - {id: motes2023hypergraph, label: DaSH}
  - {id: solis2024arc, label: ARC}
  - {id: lee2025lazydash, label: Lazy-DaSH}
acceleration_papers:
  - {id: motes2026parc, label: P-ARC}
  - {id: motes2026milliseconds, label: Vector-Accelerated Planning (under review)}
  - {id: ashur2024spite, label: SPITE}
---

{% include navigation.html %}
{% assign statement = site.data.profile.materials | where: 'id', 'research_statement' | first %}

<main class="page-shell narrative-shell" id="main-content" tabindex="-1">
  <header class="page-hero">
    <p class="eyebrow">Research</p>
    <h1>Planning for large robot teams and the people who work with them</h1>
    <p>My research asks how robot teams can coordinate efficiently as tasks, environments, and human choices change. I develop the representations, algorithms, and software that make this possible, with manufacturing experience motivating systems that people can direct and work alongside.</p>
    <div class="inline-links">
      <a href="{{ statement.url | relative_url }}" download>Download research statement (PDF)</a>
      <a href="{{ '/publications/' | relative_url }}">All publications</a>
    </div>
  </header>

  <section class="page-section" aria-labelledby="foundations">
    <h2 id="foundations">Two foundations for practical robot teams</h2>
    <div class="research-foundations">
      <article aria-labelledby="selective-coordination">
        <h3 id="selective-coordination">Selective coordination</h3>
        <p class="research-principle">Decide what needs to be planned together.</p>
        <p>I develop representations and algorithms that identify which robots, objects, and motion segments require joint planning. DaSH represents cooperation implied by tasks; ARC discovers additional coordination needs through motion conflicts. Both preserve independent work wherever possible.</p>
        <p class="research-evidence"><strong>Planning at scale:</strong> 16 robots and 60 objects in a rearrangement benchmark.</p>
        {% include publication-links.html publications=page.coordination_papers %}
      </article>
      <article aria-labelledby="accelerated-planning">
        <h3 id="accelerated-planning">Accelerated planning</h3>
        <p class="research-principle">Use coordination structure to reduce computation.</p>
        <p>I organize independent searches and local repairs to run in parallel, and tailor collision checking to what a planner needs to decide. These methods avoid unnecessary geometric work and reuse valid motions as environments change.</p>
        <p class="research-evidence"><strong>Planning speed:</strong> Motion plans for four seven-joint arms in 50 ms median solve time on the Cage benchmark.</p>
        {% include publication-links.html publications=page.acceleration_papers %}
      </article>
    </div>
  </section>

  <section class="page-section" aria-labelledby="future-directions">
    <h2 id="future-directions">Where this research is going</h2>
    <p>These foundations make it possible to evaluate and revise plans quickly. I will build on them to investigate three questions:</p>
    <div class="research-agenda">
      <article aria-labelledby="learning-coordination">
        <h3 id="learning-coordination">What can teams learn from past coordination?</h3>
        <p>I will investigate how planners can anticipate cooperation and reuse solutions to recurring interactions as tasks and robot capabilities change. Selective coordination creates smaller units for learning; planning checks whether earlier strategies still apply.</p>
        <a href="{{ '/publications/' | relative_url }}#solis2024experience">Starting point: experience-based subproblem planning</a>
      </article>
      <article aria-labelledby="interpretable-planning">
        <h3 id="interpretable-planning">How can planning help people judge alternatives?</h3>
        <p>I will develop methods that explain how choices affect robotic work, helping people compare tradeoffs as their preferences become clearer. Our ERUPT AR/VR platform provides a starting point for studying how people configure workspaces and inspect planned motions.</p>
        <a href="{{ '/publications/' | relative_url }}#ngui2025erupt">Starting point: ERUPT</a>
      </article>
      <article aria-labelledby="human-robot-teams">
        <h3 id="human-robot-teams">How should robots adapt when people share task decisions?</h3>
        <p>I will develop planners that accommodate uncertain human intent and progress during shared work. The challenge is to determine when local repairs suffice, when work must be reassigned, and which decisions can wait until more is known.</p>
      </article>
    </div>
  </section>

  <section class="page-section" aria-labelledby="software">
    <h2 id="software">Open-source software</h2>
    <ul class="research-software">
      <li><a href="https://github.com/parasollab/comotion">CoMotion</a> — coordinated motion planning for multi-robot systems. Research Software Lead.</li>
      <li><a href="https://github.com/parasollab/open-spite">Open-SPITE</a> — motion validation and replanning in changing environments. Research Software Lead.</li>
      <li><a href="https://github.com/parasollab/open-ppl">Parasol Planning Library</a> — shared robotics planning infrastructure. Research Software Lead.</li>
    </ul>
  </section>
</main>
