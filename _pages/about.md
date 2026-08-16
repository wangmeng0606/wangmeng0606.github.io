---
layout: home
permalink: /
title: "Home"
excerpt: "Meng Wang is an environmental engineer studying ion transport, membrane materials, mineral scaling, and water treatment."
description: "Meng Wang is an environmental engineering researcher at The University of Texas at Austin studying ion transport, molecular interactions, and membrane separation in aqueous systems."
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="home-heading">
  <div class="home-hero__content">
    <p class="eyebrow">Solution/Interfacial Chemistry · Materials and Modeling · Water &amp; Energy</p>
    <h1 id="home-heading">Understanding molecule fate and transport across scales</h1>
    <p class="home-hero__subheading">Designing next-generation separation and energy systems</p>
    <div class="home-hero__lead">
    <p>Meng Wang is a Postdoctoral Researcher in the Department of Civil, Architectural
  and Environmental Engineering at The University of Texas at Austin, working with
  <a href="https://www.caee.utexas.edu/people/faculty/faculty-directory/katz">Dr. Lynn Katz</a>.
  His research advances a molecular-level understanding of ion transport and separation in aqueous solutions and at interfaces, combining spectroscopy and thermodynamic modeling to address key challenges in membrane separation and the broader water-energy nexus.</p>
    <p>He received his Ph.D. in Environmental Engineering from the University of Houston
  in 2023, working with
  <a href="https://www.clemson.edu/cecas/departments/eees/people/facultydirectory/rodrigues.html">Prof. Debora F. Rodrigues</a>.</p>
  </div>
    <div class="home-hero__actions">
      <a class="button button--primary" href="{{ site.baseurl }}/portfolio/">Explore my research</a>
      <a class="button button--secondary" href="{{ site.baseurl }}/publications/">View publications</a>
      <a class="button button--secondary" href="{{ site.baseurl }}{{ site.author.cv_pdf }}">Download CV</a>
    </div>
    <!-- <div class="home-hero__profiles">
      {% if site.author.googlescholar %}<a href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>{% endif %}
      {% if site.author.orcid %}<a href="{{ site.author.orcid }}">ORCID <span aria-hidden="true">↗</span></a>{% endif %}
      {% if site.author.github %}<a href="https://github.com/{{ site.author.github }}">GitHub <span aria-hidden="true">↗</span></a>{% endif %}
    </div> -->
    <!-- <p class="home-hero__affiliation"><span aria-hidden="true"></span> Postdoctoral researcher at The University of Texas at Austin</p> -->
  </div>

  <div class="home-hero__portrait">
    <div class="portrait-frame">
      <img src="{{ site.baseurl }}/images/Profile.jpg" alt="Portrait of Meng Wang">
    </div>
    <div class="portrait-note">
      <strong>Meng Wang, Ph.D.</strong>
      <span>Postdoctoral researcher at The University of Texas at Austin</span>
    </div>
  </div>
</section>

<!-- <section class="home-section home-section--intro" aria-labelledby="about-heading">
  <div class="section-heading">
    <p class="eyebrow">About</p>
    <h2 id="about-heading">Research across scales, from molecules to membranes.</h2>
  </div>
  <div class="intro-copy">
    <p>Meng Wang is a postdoctoral researcher in the Department of Civil, Architectural and Environmental Engineering at The University of Texas at Austin, working with <a href="https://www.caee.utexas.edu/people/faculty/faculty-directory/katz">Dr. Lynn Katz</a>. My current work focuses on characterizing ion association and hydration in sulfate electrolyte systems using Raman and dielectric spectroscopy, and their role in predictive Pitzer thermodynamic modeling.</p>
    <p>Meng Wang earned his Ph.D. in Environmental Engineering from the University of Houston in 2023 with <a href="https://www.clemson.edu/cecas/departments/eees/people/facultydirectory/rodrigues.html">Prof. Debora F. Rodrigues</a>. His doctoral research investigated polymer and graphene-oxide membrane coatings for controlling mineral scaling and biofouling in desalination. Before that, he received his bachelor's degree from Northestearn Petroleum University and master's degree from China University of Petroleum in China. </p>
  
  </div>
</section> -->

<section class="home-section" aria-labelledby="focus-heading">
  <div class="section-heading section-heading--wide">
    <p class="eyebrow">Research focus</p>
    <h2 id="focus-heading">Three connected questions guide my work.</h2>
    <p class="section-heading__lead">Together, these questions trace one research arc — from molecular-scale ion pairing and interfacial chemistry to membrane materials that improve water and energy sustainability.</p>
  </div>
  <div class="focus-grid">
    <article class="focus-card">
      <span class="focus-card__number">01</span>
      <h3>Ion transport</h3>
      <p>How hydration and ion pairing shape transport through polymeric materials.</p>
    </article>
    <article class="focus-card">
      <span class="focus-card__number">02</span>
      <h3>Interfacial chemistry</h3>
      <p>How surface chemistry influences mineral nucleation, growth, and adhesion.</p>
    </article>
    <article class="focus-card">
      <span class="focus-card__number">03</span>
      <h3>Membrane &amp; separation systems</h3>
      <p>How material design can reduce scaling and biofouling in water treatment and separation.</p>
    </article>
  </div>
</section>

<section class="home-section" aria-labelledby="publications-heading">
  <div class="section-heading section-heading--split">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2 id="publications-heading">Selected publications</h2>
    </div>
    <a class="text-link" href="{{ site.baseurl }}/publications/">View all publications <span aria-hidden="true">→</span></a>
  </div>

  <div class="featured-publications">
    {% assign published_only = site.publications | where_exp: "p", "p.status == nil" %}
    {% assign featured_only = published_only | where_exp: "p", "p.featured == true" %}
    {% assign featured_publications = featured_only | sort: "date" | reverse %}
    {% for publication in featured_publications %}
      <article class="featured-publication">
        <div class="featured-publication__meta">
          <span>{{ publication.date | date: "%Y" }}</span>
          <span>{{ publication.venue }}</span>
        </div>
        <h3><a href="{{ site.baseurl }}{{ publication.url }}">{{ publication.title }}</a></h3>
        <a class="publication-link" href="{{ publication.paperurl }}">DOI / publisher <span aria-hidden="true">↗</span></a>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section" aria-labelledby="news-heading">
  <div class="section-heading section-heading--split">
    <div>
      <p class="eyebrow">News</p>
      <h2 id="news-heading">Latest news</h2>
    </div>
    <a class="text-link" href="{{ site.baseurl }}/year-archive/">All news <span aria-hidden="true">→</span></a>
  </div>

  <div class="featured-news">
    {% assign recent_posts = site.posts | sort: "date" | reverse %}
    {% for post in recent_posts limit:3 %}
      <article class="featured-news-item">
        <div class="featured-news-item__meta">{{ post.date | date: "%b %Y" }}</div>
        <div class="featured-news-item__body">
          <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-contact" aria-labelledby="connect-heading">
  <div>
    <p class="eyebrow">Connect</p>
    <h2 id="connect-heading">Interested in collaboration or research opportunities?</h2>
  </div>
  <div class="home-contact__links">
    <a href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>
    <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn <span aria-hidden="true">↗</span></a>
    <a href="{{ site.author.orcid }}">ORCID <span aria-hidden="true">↗</span></a>
  </div>
</section>
