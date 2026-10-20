import { ArrowUp } from "lucide-react";
import { profile } from "../../data/profile";
import { GithubIcon, YoutubeIcon } from "../ui/BrandIcons";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-ink-950/60">
      <div className="container-page flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <a href="#accueil" className="font-mono text-sm text-snow" aria-label="Retour en haut">
            <span className="text-python-yellow">&lt;</span>
            henri<span className="text-laravel">.</span>dev
            <span className="text-python-yellow"> /&gt;</span>
          </a>
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} AHANTO Henri Sylvain. Tous droits réservés.
          </p>
        </div>

        <p className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-mist">
          <span className="text-python-light">React</span>
          <span aria-hidden="true">·</span>
          <span className="text-php">TypeScript</span>
          <span aria-hidden="true">·</span>
          <span className="text-python-yellow">Tailwind</span>
          <span aria-hidden="true">·</span>
          <span className="text-laravel">Motion</span>
        </p>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist transition-all hover:-translate-y-0.5 hover:border-white/20 hover:text-snow"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.youtube}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="YouTube"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist transition-all hover:-translate-y-0.5 hover:border-laravel/40 hover:text-laravel"
          >
            <YoutubeIcon className="h-4 w-4" />
          </a>
          <a
            href="#accueil"
            aria-label="Retour en haut de page"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist transition-all hover:-translate-y-0.5 hover:border-python-yellow/40 hover:text-python-yellow"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
