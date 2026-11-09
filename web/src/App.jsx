import { ShieldCheck, Footprints, Sparkles, KeyRound, Languages, WifiOff, Mail, Smartphone, Clock, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.ronitgupta.lumenvault'
const EMAIL = 'mirrorlightstudio@gmail.com'

const worlds = [
  { img: 'archives', name: 'The Archives', text: 'Rats patrol the stacks while a red laser seals the door.' },
  { img: 'garden', name: 'The Sunken Garden', text: 'Blinking green lasers and frogs that leap when you do.' },
  { img: 'caves', name: 'The Crystal Caves', text: 'Prisms split the light while bats circle overhead.' },
  { img: 'heart', name: 'The Heart of Light', text: 'Every trick at once, and shadow wisps in the dark.' },
]

const features = [
  { icon: ShieldCheck, title: 'Every room is solvable', text: 'Each of the 160 rooms is checked by a solver, and they get harder as you go.' },
  { icon: Footprints, title: 'Think before you move', text: 'Creatures step when you step. Limited sparks and five hearts make every move count.' },
  { icon: Sparkles, title: 'New tricks each world', text: 'Crumbling floors, prisms, ice, clockwork mirrors and pressure-plate gates.' },
  { icon: KeyRound, title: 'Secrets to find', text: 'Five hidden easter eggs unlock secret lantern colours.' },
  { icon: CalendarDays, title: 'A new room every day', text: 'The Daily Vault gives everyone the same fresh puzzle each day.' },
  { icon: WifiOff, title: 'Free, works offline', text: 'No account and no internet needed to play.' },
]

const languages = ['English', 'Español', 'Português', 'Français', 'Deutsch', 'Bahasa Indonesia', 'हिन्दी', '日本語', '한국어', '中文']

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="7" className="fill-card stroke-border" />
      <path d="M7 22 L16 10 L25 22" fill="none" stroke="var(--laser)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="10" r="2.6" fill="var(--primary)" />
    </svg>
  )
}

function Phone({ src, alt, className = '' }) {
  return (
    <div className={`relative rounded-[2rem] border border-white/10 bg-black p-2 shadow-2xl shadow-black/60 ${className}`}>
      <img src={`/img/${src}.jpg`} alt={alt} width="420" height="910" loading="lazy" className="block w-full rounded-[1.5rem]" />
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5 font-display text-base font-bold tracking-wide no-underline">
          <Logo /> Mirrorlight Studio
        </a>
        <div className="flex items-center gap-1 text-sm">
          <Button variant="ghost" size="sm" href="#games">Games</Button>
          <Button variant="ghost" size="sm" href="#privacy">Privacy</Button>
          <Button variant="ghost" size="sm" href="#contact" className="hidden sm:inline-flex">Contact</Button>
        </div>
      </nav>
    </header>
  )
}

function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="lg" href={PLAY_URL}>
        <Smartphone /> Get it on Google Play
      </Button>
      <span className="inline-flex h-11 items-center gap-2 rounded-lg border border-dashed border-border px-5 text-sm text-muted-foreground">
        <Clock className="size-4" /> App Store: coming soon
      </span>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 md:grid-cols-[1.15fr_1fr] md:pt-24 md:pb-24">
        <div className="relative z-10">
          <Badge variant="outline" className="mb-6 gap-1.5 border-primary/40 bg-primary/10 px-3 py-1 text-primary">
            <Sparkles /> Lumen Vault is out now on Android
          </Badge>
          <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Bend the light.<br />
            <span className="bg-gradient-to-r from-primary via-[oklch(0.78_0.18_40)] to-laser bg-clip-text text-transparent">Escape the vault.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Mirrorlight Studio makes small puzzle games about light, patience and clever moves. Our first game, Lumen Vault, is a laser escape puzzle with 160 rooms across eight worlds.
          </p>
          <div className="mt-8"><StoreButtons /></div>
        </div>

        <div className="relative mx-auto w-full max-w-[15rem] md:max-w-[19rem]">
          <svg viewBox="0 0 400 600" className="pointer-events-none absolute -inset-x-24 -top-10 -z-0 h-[115%] w-[calc(100%+12rem)]" aria-hidden="true">
            <defs>
              <filter id="glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <path className="laser-path" d="M0 120 L310 60 L60 330 L380 470" fill="none" stroke="var(--laser)" strokeWidth="3" strokeLinejoin="round" filter="url(#glow)" opacity="0.85" />
            {[[310, 60], [60, 330]].map(([x, y]) => (
              <rect key={x} x={x - 9} y={y - 9} width="18" height="18" rx="3" transform={`rotate(45 ${x} ${y})`} fill="var(--card)" stroke="var(--beam)" strokeWidth="2" />
            ))}
          </svg>
          <Phone src="archives" alt="Lumen Vault: a red laser crosses a room in The Archives while rats patrol" className="relative rotate-2" />
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const items = [['160', 'rooms'], ['8', 'worlds'], ['1', 'new room a day'], ['10', 'languages']]
  return (
    <div className="border-y border-border/60 bg-card/40">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4">
        {items.map(([n, label]) => (
          <div key={label} className="text-center">
            <dt className="sr-only">{label}</dt>
            <dd className="font-display text-3xl font-bold text-primary">{n}</dd>
            <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function Games() {
  return (
    <section id="games" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/img/icon.png" alt="Lumen Vault app icon" width="72" height="72" className="size-16 rounded-2xl shadow-lg" />
          <div>
            <h2 className="font-display text-3xl font-bold">Lumen Vault</h2>
            <p className="text-muted-foreground">Laser escape puzzle · Free</p>
          </div>
        </div>
        <p className="max-w-xl text-muted-foreground">
          Mira's first night shift at the city museum goes wrong when an old lantern wakes up and the security lasers seal every door. Bend the light with mirrors, dodge the creatures that patrol each room, and find your way out.
        </p>
      </div>

      <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
        {worlds.map(w => (
          <figure key={w.img} className="w-[62vw] max-w-[15rem] shrink-0 snap-center md:w-auto md:max-w-none">
            <Phone src={w.img} alt={`${w.name}: ${w.text}`} />
            <figcaption className="mt-4">
              <div className="font-display font-bold">{w.name}</div>
              <div className="text-sm text-muted-foreground">{w.text}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="gap-3 bg-card/70 transition-colors hover:border-primary/30">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></div>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{text}</CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-4 bg-card/70">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary"><Languages className="size-5" /><CardTitle className="text-base text-foreground">Play in 10 languages</CardTitle></div>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {languages.map(l => <Badge key={l} variant="secondary" className="px-2.5 py-1 text-sm font-normal">{l}</Badge>)}
        </CardContent>
      </Card>

      <div className="mt-12 flex justify-center"><StoreButtons /></div>
    </section>
  )
}

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <div className="space-y-3 text-muted-foreground [&_a]:text-primary [&_a]:underline">{children}</div>
    </section>
  )
}

function Privacy() {
  const summary = ['No account needed', 'Progress stays on your device', 'Ads by Google AdMob', 'Anonymous gameplay stats']
  return (
    <section id="privacy" className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold">Privacy policy for Lumen Vault</h2>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: November 8, 2026</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {summary.map(s => <Badge key={s} variant="outline" className="px-2.5 py-1 text-sm font-normal text-muted-foreground">{s}</Badge>)}
        </div>

        <Card className="mt-8 bg-background/60">
          <CardContent className="space-y-8 leading-relaxed">
            <p className="text-muted-foreground">
              Lumen Vault (“the game”) is made by Mirrorlight Studio (“we”, “us”) for Android, iPhone and iPad. This policy explains what information the game uses and why.
            </p>

            <Section title="Information stored on your device">
              <p>Your progress (rooms completed, stars, hearts, lantern colours, secrets found and settings) is saved on your device. A backup copy is kept in the app's own storage on the same device, so progress isn't lost if the phone clears space. This progress stays on your device: we do not run our own servers, and the game does not ask for your name, email address, contacts or precise location. The services listed below (Google AdMob, Google Analytics for Firebase and RevenueCat) run on their own servers.</p>
            </Section>

            <Section title="Advertising">
              <p>The game shows ads provided by Google AdMob. To show and measure ads, AdMob may collect your device's advertising ID, approximate location based on your IP address, and information about how you interact with ads and the app. Where required by law, you are asked for consent before personalised ads are shown.</p>
              <p>On iPhone and iPad, the game asks your permission before your device's advertising identifier can be used (App Tracking Transparency). If you choose “Ask App Not to Track”, you still see ads, but they are not personalised.</p>
              <p>Learn more at <a href="https://policies.google.com/technologies/ads">policies.google.com/technologies/ads</a>.</p>
            </Section>

            <Section title="Gameplay statistics">
              <p>From version 1.3, the game sends anonymous gameplay events, such as when a room is started, won or failed, to Google Analytics for Firebase. This shows us which rooms are too hard so we can improve them. Firebase may also receive basic device information such as device model, operating system version, approximate region and an app instance ID. Collection of the advertising ID by Firebase and ad personalisation signals are turned off, and these statistics are not linked to your name.</p>
              <p>We also use Firebase Remote Config to adjust game settings, such as how often ads appear, without an app update. Learn more at <a href="https://firebase.google.com/support/privacy">firebase.google.com/support/privacy</a>.</p>
            </Section>

            <Section title="In-app purchases">
              <p>Purchases are processed by Google Play on Android and by the App Store on iPhone and iPad. We use RevenueCat to confirm purchases and restore them on a new device. RevenueCat receives an anonymous app user ID and your purchase history, but not your payment details. Learn more at <a href="https://www.revenuecat.com/privacy">revenuecat.com/privacy</a>.</p>
            </Section>

            <Section title="Children">
              <p>The game is suitable for all ages but is not directed at children under 13. If you believe a child has shared personal information with us, contact us and we will help remove it.</p>
            </Section>

            <Section title="Your choices">
              <ul className="list-disc space-y-2 pl-5">
                <li>You can reset or limit your advertising ID in your device settings.</li>
                <li>On iPhone and iPad, you can change tracking permission at any time in Settings → Privacy &amp; Security → Tracking.</li>
                <li>Where available, you can change your ad consent choices from the privacy choices button in the game's settings.</li>
                <li>You can delete all game data by uninstalling the game or clearing its storage.</li>
                <li>You can contact us at any time with questions or requests about your data.</li>
              </ul>
            </Section>

            <Section title="Changes">
              <p>If this policy changes, we will update this page and the date above.</p>
            </Section>

            <Section title="Contact">
              <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </Section>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <Card className="items-center bg-gradient-to-br from-card to-accent/60 px-6 py-12 text-center">
        <Mail className="size-8 text-primary" />
        <h2 className="font-display text-3xl font-bold">Say hello</h2>
        <p className="max-w-md text-muted-foreground">Questions, bug reports or ideas for new rooms? We read every email.</p>
        <Button size="lg" href={`mailto:${EMAIL}`}>{EMAIL}</Button>
      </Card>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Games />
        <Privacy />
        <Contact />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="flex items-center gap-2"><Logo /> © 2026 Mirrorlight Studio</span>
          <span className="flex gap-4"><a href="#privacy">Privacy policy</a><a href={`mailto:${EMAIL}`}>Contact</a></span>
        </div>
      </footer>
    </>
  )
}
