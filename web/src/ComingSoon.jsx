import { Swords, Route, Bike, Users, CloudRain, Trophy, Paintbrush, Eye, Globe, Timer, Monitor, PartyPopper, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const EMAIL = 'mirrorlightstudio@gmail.com'

export const upcoming = [
  {
    slug: 'knuckle-highway',
    name: 'Knuckle Highway',
    genre: 'Motorcycle combat racing',
    tagline: 'Race. Punch. Survive.',
    status: 'In testing on Android · iPhone next',
    blurb: 'Fight your way to the finish line on a fast bike. Punch, kick and swing a chain at rival riders, dodge traffic and the police, and race friends online.',
    description: 'Knuckle Highway is a motorcycle racing game where the race is a fight. Line up with a pack of rival riders, open the throttle and knock them off their bikes before they do it to you. Grab a weapon from an armed rival, outrun the police, and earn coins for faster bikes and fresh paint.',
    image: { src: '/img/knuckle-feature.jpg', alt: 'Knuckle Highway: rival riders line up on a city street at the starting line', w: 1024, h: 500 },
    icon: '/img/knuckle-icon.png',
    features: [
      { icon: Swords, title: 'Fight while you ride', text: 'Punch, kick and elbow rivals at full speed. Steal a club, chain, pipe or crowbar from an armed rider.' },
      { icon: Route, title: '8 roads to master', text: 'City streets, mountain passes, a canyon tunnel, the countryside and neon nights, each with its own traffic.' },
      { icon: Bike, title: 'Build your garage', text: 'Win coins to unlock new bikes, upgrade them and paint them your way.' },
      { icon: CloudRain, title: 'Day, night, rain and snow', text: 'Every road changes with the time of day and the weather.' },
      { icon: Trophy, title: 'World Series', text: 'Race every road back to back and finish on top. Daily rewards and challenges keep it fresh.' },
      { icon: Users, title: 'Race your friends', text: 'Share a room code to race friends online, or play on the same Wi-Fi.' },
    ],
  },
  {
    slug: 'doodle-disguise',
    name: 'Doodle Disguise',
    genre: 'Party hide-and-seek',
    tagline: 'Paint yourself. Hide in plain sight.',
    status: 'In development',
    blurb: 'A party game where every hider paints their own disguise, then tries to blend into the scene before the seekers spot them.',
    description: 'In Doodle Disguise, the hiders get a few moments to paint their own disguise, then try to blend into a busy scene before the seekers start looking. Paint yourself like a speaker stack, a lantern or a coffee cup, stand very still and hope nobody looks twice. The disguises are half the fun: some are genius, most are hilarious.',
    features: [
      { icon: Paintbrush, title: 'Paint your own disguise', text: 'Lots of brushes, colours, patterns and stickers. The more you try, the funnier it gets.' },
      { icon: Eye, title: 'Hide or seek', text: 'Blend into the scene as a hider, or hunt down the doodles as a seeker.' },
      { icon: PartyPopper, title: '5 scenes at launch', text: 'Music Festival, Coffee Rave, House Party, Diwali Market and Disco Night.' },
      { icon: Timer, title: 'You set the paint time', text: 'Quick 30-second scribbles or careful 3-minute masterpieces.' },
      { icon: Globe, title: 'Play with anyone', text: 'Play with your friends, or join players online from around the world.' },
      { icon: Monitor, title: 'Phone, laptop or TV', text: 'Made to fit every screen, so the whole room can play together.' },
    ],
  },
]

function DoodleArt({ className = '' }) {
  // Original art: a festival stage at night, with painted doodle characters, one hiding as a speaker.
  const lights = Array.from({ length: 13 }, (_, i) => i)
  const bulb = ['#ffd166', '#ff5fa2', '#4cc9f0', '#80ed99']
  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Doodle Disguise: painted doodle characters at a music festival, one of them disguised as a speaker">
      <defs>
        <linearGradient id="dd-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a1650" /><stop offset="1" stopColor="#5b2a86" /></linearGradient>
        <radialGradient id="dd-spot" cx="0.5" cy="0" r="1"><stop offset="0" stopColor="#fff6c2" stopOpacity="0.55" /><stop offset="1" stopColor="#fff6c2" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="640" height="360" fill="url(#dd-sky)" />
      <path d="M120 0 L60 300 L260 300 Z" fill="url(#dd-spot)" />
      <path d="M520 0 L380 300 L580 300 Z" fill="url(#dd-spot)" />
      <path d="M0 40 Q320 110 640 40" fill="none" stroke="#1a0d33" strokeWidth="2" />
      {lights.map(i => {
        const x = 20 + i * 50, y = 40 + Math.sin((x / 640) * Math.PI) * 35
        return <circle key={i} cx={x} cy={y + 6} r="6" fill={bulb[i % 4]} />
      })}
      {/* stage */}
      <rect x="150" y="150" width="340" height="120" rx="6" fill="#1b1033" stroke="#ffd166" strokeWidth="3" />
      <rect x="0" y="270" width="640" height="90" fill="#3a1f5c" />
      {/* real speaker */}
      <g transform="translate(170 175)">
        <rect width="64" height="95" rx="6" fill="#111" stroke="#fff" strokeWidth="2.5" />
        <circle cx="32" cy="30" r="14" fill="#333" stroke="#fff" strokeWidth="2" /><circle cx="32" cy="68" r="18" fill="#333" stroke="#fff" strokeWidth="2" />
      </g>
      {/* doodle disguised as a speaker (wobbly lines, peeking eyes) */}
      <g transform="translate(410 175)">
        <path d="M2 6 Q30 -2 62 4 L64 92 Q34 98 0 94 Z" fill="#161616" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M18 30 a14 13 0 1 0 28 1 a14 14 0 1 0 -28 -1" fill="#3a3a3a" stroke="#fff" strokeWidth="2" />
        <path d="M14 68 a18 17 0 1 0 36 1 a18 18 0 1 0 -36 -1" fill="#3a3a3a" stroke="#fff" strokeWidth="2" />
        <circle cx="26" cy="31" r="4" fill="#fff" /><circle cx="38" cy="31" r="4" fill="#fff" />
        <circle cx="27" cy="32" r="2" fill="#111" /><circle cx="39" cy="32" r="2" fill="#111" />
        <path d="M2 94 l-4 14 M62 92 l4 14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* crowd doodles */}
      {[
        [70, '#ff5fa2', 'zig'], [250, '#4cc9f0', 'dots'], [330, '#80ed99', 'stripe'], [560, '#ffd166', 'zig'],
      ].map(([x, c, p]) => (
        <g key={x} transform={`translate(${x} 250)`}>
          <path d="M-26 70 Q-30 10 0 4 Q30 10 26 70 Z" fill={c} stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
          {p === 'zig' && <path d="M-22 40 l8 -8 l8 8 l8 -8 l8 8 l8 -8" fill="none" stroke="#1b1033" strokeWidth="3" />}
          {p === 'dots' && [[-10, 34], [8, 44], [-4, 56], [12, 28]].map(([a, b]) => <circle key={a + b} cx={a} cy={b} r="4" fill="#1b1033" />)}
          {p === 'stripe' && <path d="M-24 36 H24 M-25 50 H25" stroke="#1b1033" strokeWidth="4" />}
          <circle cx="-8" cy="20" r="6" fill="#fff" /><circle cx="8" cy="20" r="6" fill="#fff" />
          <circle cx="-7" cy="21" r="3" fill="#111" /><circle cx="9" cy="21" r="3" fill="#111" />
          <path d="M-26 30 l-16 -22 M26 30 l16 -22" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      {/* seeker's magnifying glass */}
      <g transform="translate(470 120) rotate(-20)">
        <circle r="26" fill="#ffffff22" stroke="#ffd166" strokeWidth="6" />
        <path d="M18 18 L46 46" stroke="#ffd166" strokeWidth="9" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function GameArt({ game, className = '' }) {
  if (game.image) return <img src={game.image.src} alt={game.image.alt} width={game.image.w} height={game.image.h} className={className} />
  return <DoodleArt className={className} />
}

export function ComingSoonGames() {
  return (
    <div className="mt-24">
      <h2 className="font-display text-3xl font-bold">Coming soon</h2>
      <p className="mt-2 text-muted-foreground">Two new games are on the way.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {upcoming.map(g => (
          <a key={g.slug} href={`/${g.slug}/`} className="group block no-underline">
            <Card className="h-full gap-0 overflow-hidden bg-card/70 p-0 transition-colors group-hover:border-primary/40">
              <GameArt game={g} className="block aspect-[1024/500] w-full object-cover" />
              <CardHeader className="pt-5">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="font-display text-xl">{g.name}</CardTitle>
                  <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary"><Clock /> Coming soon</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{g.genre}</p>
              </CardHeader>
              <CardContent className="pb-6 text-sm text-muted-foreground">
                {g.blurb} <span className="font-semibold text-primary">Learn more →</span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}

export function GamePage({ slug }) {
  const g = upcoming.find(x => x.slug === slug)
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-10 md:pt-20">
        <Badge variant="outline" className="mb-6 gap-1.5 border-primary/40 bg-primary/10 px-3 py-1 text-primary"><Clock /> Coming soon · {g.status}</Badge>
        <div className="flex items-center gap-4">
          {g.icon && <img src={g.icon} alt={`${g.name} app icon`} width="72" height="72" className="size-16 rounded-2xl shadow-lg" />}
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{g.name}</h1>
            <p className="mt-1 text-lg text-primary">{g.tagline}</p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{g.description}</p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
          <GameArt game={g} className="block h-auto w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {g.features.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="gap-3 bg-card/70">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Card className="items-center bg-gradient-to-br from-card to-accent/60 px-6 py-12 text-center">
          <Mail className="size-8 text-primary" />
          <h2 className="font-display text-3xl font-bold">Be the first to play</h2>
          <p className="max-w-md text-muted-foreground">{g.name} is coming to Google Play and the App Store. Email us to hear when it launches or to help test it early.</p>
          <Button size="lg" href={`mailto:${EMAIL}?subject=${encodeURIComponent(g.name)}`}>{EMAIL}</Button>
        </Card>
      </section>
    </>
  )
}
