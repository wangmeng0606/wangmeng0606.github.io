---
layout: home
permalink: /
title: "Home"
excerpt: "Meng Wang is an environmental engineer studying ion transport, membrane materials, mineral scaling, and water treatment."
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="home-heading">
  <div class="home-hero__content">
    <p class="eyebrow">Environmental engineering · Materials · Water</p>
    <h1 id="home-heading">Understanding interfaces.<br><span>Designing better water systems.</span></h1>
    <p class="home-hero__lead">I study how polymer chemistry, hydration, and interfacial processes govern ion transport, mineral scaling, and membrane performance.</p>
    <div class="home-hero__actions">
      <a class="button button--primary" href="{{ site.baseurl }}/portfolio/">Explore my research</a>
      <a class="button button--secondary" href="{{ site.baseurl }}/publications/">View publications</a>
    </div>
    <p class="home-hero__affiliation"><span aria-hidden="true"></span> Postdoctoral researcher at The University of Texas at Austin</p>
  </div>

  <div class="home-hero__portrait">
    <div class="portrait-frame">
      <img src="{{ site.baseurl }}/images/Profile.jpg" alt="Portrait of Meng Wang">
    </div>
    <div class="portrait-note">
      <strong>Meng Wang, Ph.D.</strong>
      <span>Environmental Engineer</span>
    </div>
  </div>
</section>

<section class="home-section home-section--intro" aria-labelledby="about-heading">
  <div class="section-heading">
    <p class="eyebrow">About</p>
    <h2 id="about-heading">Research across scales, from molecules to membranes.</h2>
  </div>
  <div class="intro-copy">
    <p>I am a postdoctoral researcher in the Department of Civil, Architectural and Environmental Engineering at The University of Texas at Austin, working with <a href="https://www.caee.utexas.edu/people/faculty/faculty-directory/katz">Dr. Lynn Katz</a>. My current work examines hydration-dependent ion transport and ion association in polymer systems.</p>
    <p>I earned my Ph.D. in Environmental Engineering from the University of Houston in 2023 with <a href="https://www.cive.uh.edu/faculty/rodrigues">Prof. Debora F. Rodrigues</a>. My doctoral research investigated polymer and graphene-oxide membrane coatings for controlling mineral scaling and biofouling in desalination.</p>
    <a class="text-link" href="{{ site.baseurl }}/cv/">Read my full biography and CV <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="focus-heading">
  <div class="section-heading section-heading--wide">
    <p class="eyebrow">Research focus</p>
    <h2 id="focus-heading">Three connected questions guide my work.</h2>
  </div>
  <div class="focus-grid">
    <article class="focus-card">
      <span class="focus-card__number">01</span>
      <h3>Ion transport</h3>
      <p>How hydration and ion pairing shape transport through polymeric materials.</p>
    </article>
    <article class="focus-card focus-card--accent">
      <span class="focus-card__number">02</span>
      <h3>Interfacial chemistry</h3>
      <p>How surface chemistry influences mineral nucleation, growth, and adhesion.</p>
    </article>
    <article class="focus-card">
      <span class="focus-card__number">03</span>
      <h3>Membrane performance</h3>
      <p>How material design can reduce scaling and biofouling in water treatment.</p>
    </article>
  </div>
</section>

<section class="home-section" aria-labelledby="publications-heading">
  <div class="section-heading section-heading--split">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2 id="publications-heading">Recent publications</h2>
    </div>
    <a class="text-link" href="{{ site.baseurl }}/publications/">All publications <span aria-hidden="true">→</span></a>
  </div>

  <div class="featured-publications">
    {% assign featured_publications = site.publications | sort: "date" | reverse %}
    {% for publication in featured_publications limit:3 %}
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

<section class="home-contact" aria-labelledby="connect-heading">
  <div>
    <p class="eyebrow">Connect</p>
    <h2 id="connect-heading">Interested in membranes, polymers, or ion transport?</h2>
  </div>
  <div class="home-contact__links">
    <a href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>
    <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn <span aria-hidden="true">↗</span></a>
    <a href="{{ site.author.orcid }}">ORCID <span aria-hidden="true">↗</span></a>
  </div>
</section>
