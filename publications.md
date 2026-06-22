---
layout: page
title: Publications
permalink: /publications/
body_class: standard-page
---

{% include navigation.html %}

<main class="page-shell">
  <header class="page-hero publications-hero">
    <h1>Publications</h1>
    <p class="source-note">
      <span>Last checked: {{ site.data.publications.source.checked }}</span>
      <span class="scholar-line"><a href="{{ site.data.publications.source.scholar_url }}">Google Scholar</a> may have the most current list.</span>
    </p>
  </header>

  <section class="page-section publications-section" aria-label="Publication archive">
    <div class="pub-filter" role="group" aria-label="Filter publications by research direction">
      <button type="button" class="pub-filter-chip is-active" data-filter="all">All</button>
      {% for topic in site.data.publications.topics %}
      <button type="button" class="pub-filter-chip" data-filter="{{ topic.slug }}">{{ topic.title }}</button>
      {% endfor %}
    </div>

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

<script>
  (function () {
    var filterBar = document.querySelector(".pub-filter");
    var list = document.querySelector(".pub-list");
    if (!filterBar || !list) return;

    var chips = filterBar.querySelectorAll(".pub-filter-chip");
    var entries = list.querySelectorAll(".pub-entry");
    var yearHeaders = list.querySelectorAll(".pub-year");

    function headerHasVisibleEntry(header) {
      var next = header.nextElementSibling;
      while (next && !next.classList.contains("pub-year")) {
        if (next.classList.contains("pub-entry") && !next.classList.contains("pub-hidden")) {
          return true;
        }
        next = next.nextElementSibling;
      }
      return false;
    }

    function applyFilter(filter) {
      entries.forEach(function (entry) {
        var tags = (entry.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
        entry.classList.toggle("pub-hidden", filter !== "all" && tags.indexOf(filter) === -1);
      });

      yearHeaders.forEach(function (header) {
        header.classList.toggle("pub-hidden", !headerHasVisibleEntry(header));
      });

      chips.forEach(function (chip) {
        chip.classList.toggle("is-active", chip.getAttribute("data-filter") === filter);
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        applyFilter(chip.getAttribute("data-filter"));
      });
    });

    list.querySelectorAll(".pub-tag").forEach(function (tag) {
      tag.addEventListener("click", function () {
        applyFilter(tag.getAttribute("data-tag"));
      });
    });
  })();
</script>
