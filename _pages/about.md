---
layout: home
permalink: /
title: "Home"
excerpt: "Meng Wang is a postdoctoral researcher at UT studying ion transport, membrane materials, mineral scaling, and water treatment."
description: "Meng Wang is a postdoctoral researcher at The University of Texas at Austin studying ion transport, molecular interactions, and membrane separation in aqueous systems."
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="home-heading">
  <div class="home-hero__content">
    <p class="eyebrow">Ion Pairing · Thermodynamic Modeling · Material Interfaces · Water &amp; Energy</p>
    <h1 id="home-heading">Ions, Interfaces, and Separation Processes</h1>
    <p class="home-hero__subheading">Bridging Molecular Science, Materials, and Environmental Engineering</p>
    <div class="home-hero__lead">
    <p>Meng Wang is a Postdoctoral Researcher in the <a href="https://cwe.engr.utexas.edu/">Department of Civil, Architectural
  and Environmental Engineering</a> at The University of Texas at Austin, working with
  <a href="https://www.caee.utexas.edu/people/faculty/faculty-directory/katz">Dr. Lynn Katz</a>.
  I received my Ph.D. in Environmental Engineering from the <a href="https://www.cive.uh.edu/">University of Houston</a>
  in 2023, working with
  <a href="https://www.clemson.edu/cecas/departments/eees/people/facultydirectory/rodrigues.html">Dr. Debora F. Rodrigues</a>.
  </p>
  <p>My esearch investigates how molecular interactions in aqueous and interfacial systems govern speciation, transport, and separation performance. I combines spectroscopy, thermodynamic modeling, and multiscale experiments to connect molecular-scale behavior with membrane separations, resource recovery, and scaling/fouling control at the water–energy nexus.</p>
  </div>
    <div class="home-hero__actions">
      <a class="button button--primary" href="#research">Explore my research</a>
      <a class="button button--secondary" href="#publications">View publications</a>
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
    <p>Meng Wang earned his Ph.D. in Environmental Engineering from the University of Houston in 2023 with <a href="https://www.clemson.edu/cecas/departments/eees/people/facultydirectory/rodrigues.html">Dr. Debora F. Rodrigues</a>. His doctoral research investigated polymer and graphene-oxide membrane coatings for controlling mineral scaling and biofouling in desalination. Before that, he received his bachelor's degree from Northestearn Petroleum University and master's degree from China University of Petroleum in China. </p>
  
  </div>
</section> -->

{::nomarkdown}
{% include research-section.html %}
{:/nomarkdown}

{::nomarkdown}
{% include publications-section.html %}
{:/nomarkdown}

<section class="home-section" id="news" aria-labelledby="news-heading">
  <div class="section-heading section-heading--split">
    <div>
      <h2 id="news-heading">News</h2>
    </div>
    <a class="text-link" href="{{ site.baseurl }}/year-archive/">All news <span aria-hidden="true">→</span></a>
  </div>

  <div class="featured-news" tabindex="0" role="region" aria-label="News list (scrollable)">
    {% assign recent_posts = site.posts | sort: "date" | reverse %}
    {% for post in recent_posts %}
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
