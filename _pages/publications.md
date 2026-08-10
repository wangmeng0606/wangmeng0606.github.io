---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Peer-reviewed publications by Meng Wang on membrane materials, mineral scaling, and transport."
---

<div class="page-intro page-intro--publications">
  <p class="eyebrow">Publications</p>
  <p class="page-intro__lead">Peer-reviewed work spanning membrane surface modification, mineral scaling mechanisms, fouling-resistant polymers, and subsurface transport.</p>
  <a class="button button--secondary button--compact" href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>
</div>

<div class="publication-list">
  {% assign publications = site.publications | sort: "date" | reverse %}
  {% for publication in publications %}
    <article class="publication-card">
      <div class="publication-card__year">{{ publication.date | date: "%Y" }}</div>
      <div class="publication-card__content">
        <p class="publication-card__venue">{{ publication.venue }}</p>
        <h2><a href="{{ site.baseurl }}{{ publication.url }}">{{ publication.title }}</a></h2>
        <div class="publication-card__actions">
          <a href="{{ site.baseurl }}{{ publication.url }}">Abstract</a>
          {% if publication.paperurl %}<a href="{{ publication.paperurl }}">DOI / publisher <span aria-hidden="true">↗</span></a>{% endif %}
        </div>
      </div>
    </article>
  {% endfor %}
</div>
