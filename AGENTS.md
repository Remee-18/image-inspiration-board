<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The home-page hero is a presentation-only component in `src/components/hero.tsx`; page routes keep content data and composition only. Shared visual primitives (glass, mesh, grid, grain, spotlight, shine, marquee, tilt) live as `@utility` tokens in `src/styles.css` so every page can reuse them. Why: keeps route files readable and stops hero styling from being duplicated when other sections adopt it.
- Home-page sections are presentation-only components in `src/components/home-sections.tsx`, with experience and career content supplied by the index route; home-only styling must not alter shared sections on other pages. Why: preserves page composition and limits visual changes to their requested scope.
- The contact form in `src/components/contact-form.tsx` validates with zod and sends via EmailJS (browser SDK, publishable key in code); it only shows success after EmailJS resolves. Why: no backend exists and a fake confirmation would lose leads.
- The resume page's file actions live in the presentation-only `src/components/resume-panel.tsx` (plain anchors, no router imports), with copy and the PDF location supplied by the `/resume` route; the panel stays renderable on its own. Why: keeps the resume page testable and consistent with the other presentation-only components.

