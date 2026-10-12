# Christine's E-Portfolio

A responsive ReactJS + Tailwind CSS portfolio inspired by the provided purple/black reference.

## Features
- Home, About, Projects, Resume, and Contact sections
- Reusable React rendering for navigation, project cards, tags, and skills
- Responsive mobile navigation
- Light/dark theme toggle
- Project category filters and interactive project detail summaries
- Contact form validation that opens the visitor's email app using `mailto:` (no backend required)
- Smooth anchor navigation and reduced-motion support

## Run locally
1. Install Node.js (LTS).
2. Extract this folder and open a terminal inside it.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL Vite prints in the terminal.

## Customize before submission
- Replace `Christine` and the education details with your confirmed information.
- Replace `christine@example.com` in `src/main.jsx` with your real portfolio email.
- Update GitHub and LinkedIn links to your own profiles.
- Replace the portrait placeholder with your own image.
- Add real project screenshots, repository links, and demos where available.
- Verify the education dates and project statuses.

## Deploy to Vercel
1. Create a GitHub repository and upload the project files.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your GitHub repository.
4. Vercel should detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
5. Select **Deploy** and wait for the build to finish.
6. Open the Vercel URL and test all sections on mobile and desktop.

The website source is prepared for deployment, but it has not been deployed from this workspace. The contact form uses `mailto:`; use a form service or backend if you need messages submitted without opening an email app.
