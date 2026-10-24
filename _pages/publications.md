---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
wide_archive: true
excerpt: "Peer-reviewed publications by Meng Wang on membrane materials, mineral scaling, and transport."
---

<div class="publication-years">
  {% assign published_items = site.publications | where_exp: "p", "p.status == nil" %}
  {% assign year_groups = published_items | group_by_exp: "p", "p.date | date: '%Y'" | sort: "name" | reverse %}
  {% for group in year_groups %}
    <section class="publication-year-group" aria-labelledby="year-{{ group.name }}">
      <h2 class="publication-year-heading" id="year-{{ group.name }}">{{ group.name }}</h2>
      <ul class="publication-year-list">
        {% assign year_items = group.items | sort: "date" | reverse %}
        {% for publication in year_items %}
          {% include publication-entry.html publication=publication %}
        {% endfor %}
      </ul>
    </section>
  {% endfor %}

  {% assign all_authors_short = site.publications | map: "authors_short" | join: " ~ " %}
  {% if all_authors_short contains "#" or all_authors_short contains "*" %}
    <p class="publication-legend">
      {% if all_authors_short contains "#" %}# authors contributed equally to the work.{% endif %}
      {% if all_authors_short contains "*" %}* corresponding authors.{% endif %}
    </p>
  {% endif %}
</div>
