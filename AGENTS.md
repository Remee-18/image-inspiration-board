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

