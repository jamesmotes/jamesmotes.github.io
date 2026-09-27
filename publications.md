---
layout: page
title: Publications
permalink: /publications/
body_class: standard-page
---

{% include navigation.html %}

<main class="page-shell" id="main-content" tabindex="-1">
  <header class="page-hero publications-hero">
    <h1>Publications</h1>
    <p class="source-note">
      <span>Checked against the <a href="{{ site.data.publications.source.cv_url | relative_url }}">CV</a>: {{ site.data.publications.source.checked }}</span>
      <span class="scholar-line"><a href="{{ site.data.publications.source.scholar_url }}">Google Scholar</a></span>
    </p>
  </header>

  <section class="page-section publications-section" aria-label="Publication archive">
    <div class="pub-filter" role="group" aria-label="Filter publications by research direction" hidden>
      <button type="button" class="pub-filter-chip is-active" data-filter="all" aria-pressed="true">All</button>
      {% for topic in site.data.publications.topics %}
      <button type="button" class="pub-filter-chip" data-filter="{{ topic.slug }}" aria-pressed="false">{{ topic.title }}</button>
      {% endfor %}
    </div>

    <p class="sr-only" id="publication-filter-status" role="status"></p>
    <div class="pub-list">
      {% for group in site.data.publications.groups %}
      {% assign group_publications = site.data.publications.items | where: "group", group %}
      {% if group_publications.size > 0 %}
      <h2 class="pub-year" data-year="{{ group }}">{{ group }}</h2>
      {% for publication in group_publications %}
      <article class="pub-entry" id="{{ publication.id }}" data-tags="{{ publication.tags | join: ' ' }}">
        <div class="pub-title">{{ publication.title }}</div>
        <div class="pub-authors">{{ publication.authors }}</div>
        <div class="pub-venue">
          {{ publication.venue }}
          {% if publication.year and publication.year != "" %}
          <span class="pub-entry-year">{{ publication.year }}</span>
          {% endif %}
        </div>
        {% if publication.presentation %}
        <div class="pub-venue">{{ publication.presentation | escape }}</div>
        {% endif %}
        {% if publication.note %}
        <div class="pub-venue">{{ publication.note | escape }}</div>
        {% endif %}
        <div class="pub-tags" aria-label="Research directions">
          {% for topic_slug in publication.tags %}
          {% assign topic_title = topic_slug %}
          {% for topic in site.data.publications.topics %}
          {% if topic.slug == topic_slug %}
          {% assign topic_title = topic.title %}
          {% endif %}
          {% endfor %}
          <span class="pub-tag pub-tag--{{ topic_slug }}" data-tag="{{ topic_slug }}">{{ topic_title }}</span>
          {% endfor %}
        </div>
        {% if publication.links %}
        <div class="pub-links">
          {% for link in publication.links %}
          <a class="pub-link" href="{{ link.href }}" target="_blank" rel="noopener">{{ link.label }}</a>
          {% endfor %}
        </div>
        {% endif %}
      </article>
      {% endfor %}
      {% endif %}
      {% endfor %}
    </div>
  </section>
</main>
