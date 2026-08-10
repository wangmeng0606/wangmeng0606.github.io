# Updating and maintaining the website

This guide covers the normal workflow for `wangmeng0606.github.io` on Windows.

## 1. Preview the website

Ruby 3.3 and the Ruby development tools are required. After installing Ruby, close and reopen PowerShell so the updated `PATH` is available.

From this repository:

```powershell
ruby --version
bundle install
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000>. Keep the PowerShell window open while editing. Most saved files trigger an automatic refresh.

If `_config.yml` changes, stop the preview with `Ctrl+C` and start it again.

## 2. Know which file to edit

| What you want to change | File or folder |
| --- | --- |
| Homepage introduction and featured sections | `_pages/about.md` |
| Job title, profile photo, institution, and social profiles | `_config.yml` |
| Navigation labels and order | `_data/navigation.yml` |
| CV | `_pages/cv.md` |
| Publications | `_publications/` |
| Research-project summaries | `_portfolio/` |
| News | `_posts/` |
| Colors, spacing, cards, and responsive design | `_sass/_custom.scss` |
| Images and diagrams | `images/` |
| CV or publication PDFs | `files/` |

Do not edit `_site/` or `assets/css/main.css`. They are generated every time Jekyll builds the website.

File and folder names are case-sensitive after deployment. For example, `Profile.jpg` and `profile.jpg` are different files on GitHub Pages.

## 3. Add a publication

Create a file in `_publications/` named with the publication date and a short title:

```text
2026-08-10-short-paper-title.md
```

Use this template:

```markdown
---
title: "Full paper title"
collection: publications
permalink: /publication/2026-08-10-short-paper-title
date: 2026-08-10
venue: "Journal name"
paperurl: "https://doi.org/xx.xxxx/xxxxx"
citation: "Full formatted citation."
---

One or two sentences explaining the work.

Abstract: Add the abstract here.

[Download the paper](/files/paper-filename.pdf)
```

If you provide a PDF, place it in `files/` and make the capitalization and spaces in the link match the filename exactly.

## 4. Add a news update

Create a file in `_posts/`:

```text
2026-08-10-short-update-title.md
```

Use this template:

```markdown
---
title: "Short update title"
date: 2026-08-10
permalink: /posts/2026/08/short-update-title/
tags:
  - News
---

Write the update here.
```

## 5. Publish an update

Before editing, synchronize your local copy:

```powershell
git pull --ff-only
```

Preview the site and review your changes. Then publish them:

```powershell
git status
git diff
git add .
git commit -m "Update website content"
git push origin master
```

GitHub Pages automatically rebuilds the public site after the push. The deployment status appears in the repository's **Actions** tab. It may take a few minutes before the new version is visible.

## 6. Update Jekyll dependencies

Do this occasionally—not for every content update:

```powershell
bundle update github-pages
bundle exec jekyll build
```

Commit both `Gemfile` and `Gemfile.lock` when they change. Do not delete `Gemfile.lock` during a normal update; it records the tested dependency versions.

## 7. Routine maintenance checklist

Every month or after a career update:

- Confirm the current job title and institution in `_config.yml` and `_pages/about.md`.
- Add new papers and confirm DOI and PDF links.
- Update the CV and remove old words such as “expected” once a degree or role is complete.
- Check the homepage on both a phone-sized window and a desktop-sized window.
- Verify the profile photo, research figures, external profiles, and downloadable files.
- Run `bundle exec jekyll build` before pushing.

## 8. Common problems

### `ruby` or `bundle` is not recognized

Close PowerShell and open a new window. If it still fails, confirm that `C:\Ruby33-x64\bin` is included in the Windows `PATH`.

### A local image works but is broken online

Check capitalization first. GitHub Pages treats filenames as case-sensitive. Also confirm the file was committed with `git status`.

### The preview does not reflect `_config.yml`

Restart the Jekyll preview. Configuration changes are not reloaded automatically.

### GitHub Pages reports a build failure

Run this locally and fix the first error shown:

```powershell
bundle exec jekyll build --trace
```

Then commit and push the correction.
