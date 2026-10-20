import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../../data/profile";
import { Reveal } from "../fx/Reveal";
import { GithubIcon, YoutubeIcon } from "../ui/BrandIcons";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Contact portfolio — ${name || "Nouveau message"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Anonyme"}\n${email || "Email non renseigné"}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 pb-24 pt-24 sm:pb-28 sm:pt-28">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Contact"
          title={
            <>
              Construisons quelque chose <span className="gradient-text">ensemble</span>.
            </>
          }
          description="Une opportunité, un projet freelance ou simplement une idée à discuter ? Ma boîte mail est ouverte."
          align="center"
        />

        <Reveal delay={0.1} y={30} className="mt-12">
          <div className="gradient-border relative overflow-hidden rounded-3xl bg-ink-850/70 p-5 backdrop-blur-xl sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-laravel/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-python/10 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div className="flex flex-col">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-mint/20 bg-mint/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mint">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-mint" />
                  Disponible pour échanger
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-snow sm:text-3xl">
                  Parlons de votre <span className="text-python-yellow">prochain projet</span>.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">
                  Disponible pour des missions freelance, un poste en CDI ou une collaboration
                  autour du web, du mobile et de l&apos;IA.
                </p>

                <div className="mt-7 space-y-3">
                  <div className="glass flex items-center gap-3 rounded-xl p-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-laravel/10 text-laravel">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mist/60">
                        Email
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="block truncate text-xs text-snow transition-colors hover:text-python-yellow"
                      >
                        {profile.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copier l'adresse email"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 text-mist transition-colors hover:border-white/25 hover:text-snow"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-mint" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="glass flex items-center gap-3 rounded-xl p-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-python/10 text-python-light">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mist/60">
                        Téléphone
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                        {profile.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="text-xs text-snow transition-colors hover:text-python-yellow"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="glass flex items-center gap-3 rounded-xl p-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-php/10 text-php">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mist/60">
                        Localisation
                      </p>
                      <p className="text-xs text-snow">{profile.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-ghost flex-1 !px-3 !py-2.5 text-[11px]"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <a
                    href={profile.links.youtube}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-ghost flex-1 !px-3 !py-2.5 text-[11px]"
                  >
                    <YoutubeIcon className="h-3.5 w-3.5 text-laravel" />
                    YouTube
                  </a>
                  <a
                    href={profile.links.portfolio}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Ancien portfolio"
                    className="btn btn-ghost !px-3 !py-2.5"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <form onSubmit={onSubmit} className="flex flex-col">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      Votre nom
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Ada Lovelace"
                      className="rounded-xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-snow outline-none transition placeholder:text-mist/35 focus:border-python-light/50 focus:ring-2 focus:ring-python/20"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      Votre email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="vous@exemple.com"
                      className="rounded-xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-snow outline-none transition placeholder:text-mist/35 focus:border-python-light/50 focus:ring-2 focus:ring-python/20"
                    />
                  </label>
                </div>

                <label className="mt-4 flex flex-1 flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                    Votre message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    placeholder="Parlez-moi de votre projet, de votre équipe ou de l'opportunité…"
                    className="min-h-[9.5rem] flex-1 resize-none rounded-xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm leading-relaxed text-snow outline-none transition placeholder:text-mist/35 focus:border-python-light/50 focus:ring-2 focus:ring-python/20"
                  />
                </label>

                <button type="submit" className="btn btn-primary mt-4 w-full">
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" />
                      Message préparé — vérifiez votre client mail
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Envoyer le message
                    </>
                  )}
                </button>

                <p className="mt-3 text-center font-mono text-[10px] leading-relaxed text-mist/50">
                  // le formulaire ouvre votre client mail — aucune donnée n&apos;est stockée.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
