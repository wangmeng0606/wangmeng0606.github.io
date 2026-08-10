# Meng Wang — personal academic website

This repository contains the source for [wangmeng0606.github.io](https://wangmeng0606.github.io). It is a Jekyll site hosted by GitHub Pages and is based on the Academic Pages / Minimal Mistakes theme.

## Work on the site locally

```powershell
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://127.0.0.1:4000>.

For the complete content, preview, publishing, and troubleshooting workflow, see [MAINTAINING.md](MAINTAINING.md).

## Main folders

- `_pages/` — homepage, research index, publications index, and archived supporting pages
- `_publications/` — one Markdown file per publication
- `_portfolio/` — detailed research-project pages
- `_posts/` — dated news posts
- `_config.yml` — name, biography, profile links, and site-wide settings
- `_sass/_custom.scss` — the site's custom visual design
- `images/` and `files/` — images and downloadable PDFs

Do not edit `_site/` or `assets/css/main.css`; Jekyll generates them automatically.
