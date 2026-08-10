---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Peer-reviewed publications by Meng Wang on membrane materials, mineral scaling, and transport."
---

<div class="page-intro page-intro--publications">
  <p class="eyebrow">Publications</p>
  <p class="page-intro__lead">Peer-reviewed research spanning ion pairing, thermodynamic modeling, membrane surface modification, mineral scaling and fouling mechanisms, fouling-resistant polymer cotings, and subsurface transport.
</p>
  <a class="button button--secondary button--compact" href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>
</div>

<div class="publication-years">
  {% assign all_authors_short = site.publications | map: "authors_short" | join: " ~ " %}
  {% if all_authors_short contains "#" or all_authors_short contains "*" %}
    <p class="publication-legend">
      {% if all_authors_short contains "#" %}# authors contributed equally to the work.{% endif %}
      {% if all_authors_short contains "#" and all_authors_short contains "*" %} {% endif %}
      {% if all_authors_short contains "*" %}* corresponding authors.{% endif %}
    </p>
  {% endif %}

  {% assign in_prep_items = site.publications | where_exp: "p", "p.status" %}
  {% if in_prep_items.size > 0 %}
    <section class="publication-year-group publication-year-group--in-prep">
      <h2 class="publication-year-heading">Submitted / In Preparation</h2>
      <ul class="publication-year-list">
        {% assign sorted_in_prep = in_prep_items | sort: "date" | reverse %}
        {% for publication in sorted_in_prep %}
          <li class="publication-entry">
            {{ publication.authors_short }} {{ publication.title }}. <i>{% if publication.venue and publication.venue != "" %}{{ publication.venue }}{% else %}TBD{% endif %}</i>, {{ publication.date | date: "%Y" }} ({{ publication.status }}).
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endif %}

  {% assign published_items = site.publications | where_exp: "p", "p.status == nil" %}
  {% assign year_groups = published_items | group_by_exp: "p", "p.date | date: '%Y'" | sort: "name" | reverse %}
  {% for group in year_groups %}
    <section class="publication-year-group">
      <h2 class="publication-year-heading">{{ group.name }}</h2>
      <ul class="publication-year-list">
        {% assign year_items = group.items | sort: "date" | reverse %}
        {% for publication in year_items %}
          <li class="publication-entry">
            {{ publication.authors_short }} {{ publication.title }}. <i>{{ publication.venue }}</i> {{ group.name }}{% if publication.note %} ({{ publication.note }}){% endif %}{% if publication.paperurl and publication.paperurl != "" %}, <a href="{{ publication.paperurl }}">{{ publication.paperurl }}</a>{% else %}, [DOI pending]{% endif %}
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>
