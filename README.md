# Nurmerey Aidos — Personal Website

Personal website built with pure HTML, CSS, and JavaScript. No build tools, no dependencies — deploy straight to GitHub Pages.

## Live URL

Once deployed, your site will be at: **https://nvrmerey.github.io**

## Add your details

| File | What to do |
|------|------------|
| `assets/profile.jpg` | Replace with your professional headshot (aim for ~800×800 px, roughly square). Until you add it, a green placeholder silhouette is shown automatically. |
| `assets/CV.pdf` | Put a PDF of your CV here. Links to it from the "Download CV" button and the footer. |

## Deploy to GitHub Pages

1. Create a repository named exactly **`nvrmerey.github.io`** on GitHub
   (your public username must be `nurmerey` — the URL is decided by it).

   > If you can't get `nvrmerey`, grab your actual username instead and the URL becomes `username.github.io`.

2. Push the contents of this folder to that repository's `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial personal website"
   git branch -M main
   git remote add origin https://github.com/nvrmerey/nvrmerey.github.io.git
   git push -u origin main
   ```

3. Go to **Settings → Pages** in the repo and set:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/` (root)
   - **Save**

4. Wait 1–2 minutes. Your site is live at `https://nvrmerey.github.io`.

> GitHub Pages serves files as-is. Subsequent pushes to `main` update the site automatically after a short delay.

## Local development

Open `index.html` in a browser, or run a quick local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
├── index.html      # all page content
├── css/styles.css  # design system + light/dark themes
├── js/main.js      # theme toggle, scroll animations, nav
└── assets/
    ├── profile.jpg # your photo (replace)
    └── CV.pdf      # your CV (add)
```

## Customization

- **Colors:** edit the CSS variables at the top of `css/styles.css` (both `:root` light theme and `[data-theme="dark"]`).
- **Contact details:** the contact email (currently `aidosnurmerey@gmail.com`) and phone are in `index.html` (hero, contact section, footer).
