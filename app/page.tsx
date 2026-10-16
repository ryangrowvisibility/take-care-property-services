const PHONE_DISPLAY = "(289) 407-2325";
const PHONE_TEL = "tel:+12894072325";
const PHONE_SMS = "sms:+12894072325";
const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=Take%20Care%20Property%20Services&query_place_id=ChIJQVA_sDHWJ4kRVn2LpoWbF7Y";
const FACEBOOK = "https://www.facebook.com/takecarepropertyservices";
const INSTAGRAM = "https://www.instagram.com/takecarepropertyservices";

type IconProps = { className?: string };
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};
const PhoneIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
);
const ChatIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);
const Star = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg>
);
const Stars = ({ className = "h-5 w-5" }: IconProps) => (
  <span className="inline-flex text-star" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className={className} />)}</span>
);
const MowerIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M3 20h18" /><path d="M5 20v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" /><path d="M8 14 6 4H4" /></svg>
);
const RakeIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M19 3 9 13" /><path d="m5 13 4 4" /><path d="M3.5 14.5 7 11l6 6-3.5 3.5" /></svg>
);
const TreeIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M12 22v-5" /><path d="m12 2-6 9h3l-4 6h14l-4-6h3z" /></svg>
);
const FlowerIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><circle cx="12" cy="8" r="2.5" /><path d="M12 5.5V3M14.5 8H17M12 10.5V13M9.5 8H7" /><path d="M12 13v8" /><path d="M12 17c-2.5 0-4-1.5-4-3.5 2.5 0 4 1.5 4 3.5z" /></svg>
);
const SprayIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M3 21l7-7" /><path d="M10 14l3-3 4 4-3 3z" /><path d="M17 4v2M20 7h-2M19.5 4.5 18 6M21 11h-1.5M14 2.5V4" /></svg>
);
const StonesIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><rect x="3" y="4" width="8" height="7" rx="1.5" /><rect x="13" y="4" width="8" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /></svg>
);
const BrushIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M18 3h3v6h-3z" /><path d="M18 6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h7v3" /><rect x="10" y="15" width="4" height="7" rx="1" /></svg>
);
const ShieldIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
const BoltIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>
);
const TagIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1.5" /></svg>
);
const HelpIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" /></svg>
);
const PinIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const ClockIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
);
const ChevronDown = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="m6 9 6 6 6-6" /></svg>
);
const ArrowRight = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...s} strokeWidth={2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const FacebookIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
);

const services = [
  { icon: MowerIcon, name: "Lawn Care", text: "Mowing, trimming and edging that leaves lawns neat and manicured, for homeowners and rental properties alike." },
  { icon: RakeIcon, name: "Yard Clean-ups", text: "Weed-invaded, overgrown front and back yards brought back under control. Old shrubs removed and debris hauled away, even junk left behind by tenants." },
  { icon: TreeIcon, name: "Hedging & Small Tree Work", text: "Bushes and hedges trimmed, smaller trees like spruce cut down, and everything disposed of properly." },
  { icon: FlowerIcon, name: "Landscape Design, Mulching & Planting", text: "Front garden makeovers, with honest advice on what to plant and how to look after it once it's in." },
  { icon: SprayIcon, name: "Power Washing", text: "Driveways, patios and walkways washed clean of dirt and grime." },
  { icon: StonesIcon, name: "Patio Stones", text: "New patio stones installed and sunken ones re-set, often quoted and finished the very same day." },
  { icon: BrushIcon, name: "Small Painting Jobs", text: "Interior touch-ups and rooms like bedrooms and en-suites, with help picking the right colour." },
];

const reviews = [
  { name: "Catherine B.", job: "Front gardens", text: "Responsive when so many lawn guys take weeks. Endlessly patient with her questions, very reasonable prices and impeccable work. She's now proud of her front gardens." },
  { name: "Linda O.", job: "Tree & hedge work", text: "A major backyard trim: bushes cut back, spruce trees taken down and everything disposed of professionally. Personable, and knows what he's doing." },
  { name: "Daina B.", job: "Overgrown front yard", text: "Chris cleaned up the overgrown front yard and removed the old shrubs. She's booking him again for the fall and recommending him to friends." },
  { name: "Latoya C.", job: "Rental lawn cut", text: "Cut the lawn and hauled away the garbage the tenants left behind, at an amazing price." },
  { name: "Marco R.", job: "Interior painting", text: "Called on Monday, and the bedroom and en-suite were painted in a single day by the end of the week, with paint colour suggestions included." },
];

const steps = [
  { title: "Call or text Chris", text: `Reach Chris directly at ${PHONE_DISPLAY}. Describe the job, or text a photo.` },
  { title: "Quick visit and quote", text: "Chris comes by, often the same or next day, and gives you a straight price." },
  { title: "The work gets done", text: "Many smaller jobs are finished the same day. Bigger ones get booked in fast." },
  { title: "Tidy finish", text: "Debris hauled away, and tips on keeping your lawn and garden looking good." },
];

const towns = ["Grimsby", "Beamsville", "Vineland", "Pelham", "Surrounding west Niagara"];

const faqs = [
  { q: "Are you licensed and insured?", a: "Yes. Take Care Property Services is licensed and insured." },
  { q: "How quickly can you come out?", a: "Fast. Same-day service is something we're known for. One customer called, had Chris over at 1 p.m. the next day for a quote, and the job was finished by 4 p.m." },
  { q: "What areas do you serve?", a: "Grimsby, Beamsville, Vineland, Pelham and the surrounding west Niagara communities. If you're nearby but not sure, call and ask." },
  { q: "Do you do more than lawns?", a: "Yes. Along with lawn care and clean-ups, Chris handles hedging and small tree work, planting, power washing, patio stones and small interior painting jobs." },
  { q: "Do you work on rental properties?", a: "Yes. We cut lawns and clean up rental properties, including hauling away anything tenants leave behind." },
  { q: "How much does it cost?", a: "Every job is different, so Chris will give you a price after a quick look. Customers consistently describe our prices as very reasonable." },
  { q: "What are your hours?", a: "We start at 8 a.m. Call or text (289) 407-2325 to book." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Take Care Property Services",
  telephone: "+1-289-407-2325",
  url: "https://take-care-property-services.growlocalvisibility.com",
  founder: { "@type": "Person", name: "Chris" },

  areaServed: ["Grimsby, ON", "Beamsville, ON", "Vineland, ON", "Pelham, ON"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "17" },
  sameAs: [FACEBOOK, INSTAGRAM, GOOGLE_URL],
  makesOffer: services.map((x) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: x.name } })),
};

const nav = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About Chris" },
  { href: "#area", label: "Areas" },
  { href: "#faq", label: "FAQ" },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-dark text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <span className="flex items-center gap-2"><PinIcon className="h-4 w-4" /> Grimsby · Beamsville · Vineland · Pelham</span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2"><ShieldIcon className="h-4 w-4" /> Licensed &amp; Insured</span>
            <span className="flex items-center gap-2"><ClockIcon className="h-4 w-4" /> Starts at 8 a.m.</span>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Take Care Property Services home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-cta"><TreeIcon className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block font-head text-lg font-extrabold text-brand-dark">Take Care</span>
              <span className="block text-xs font-semibold text-muted">Property Services</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => <a key={n.href} href={n.href} className="font-semibold text-ink/75 transition-colors hover:text-brand">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-4">
            <a href={PHONE_TEL} className="hidden items-center gap-2 font-bold text-brand-dark md:flex"><PhoneIcon className="h-4 w-4" />{PHONE_DISPLAY}</a>
            <a href={PHONE_TEL} className="btn hidden bg-cta text-ink hover:bg-cta-hover md:inline-flex"><PhoneIcon className="ringer h-4 w-4" /> Call Chris</a>
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-ink md:hidden"><PhoneIcon /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-cream">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.2fr_1fr]">
            <div className="enter">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-dark ring-1 ring-line"><BoltIcon className="h-4 w-4 text-brand" /> Same-day service, often</p>
              <h1 className="mt-4 font-extrabold text-ink" style={{ fontSize: "clamp(2.25rem, 4.8vw, 3.6rem)" }}>
                Lawn Care, Yard Clean-ups &amp; Property Maintenance in Grimsby, Beamsville and Vineland
              </h1>
              <p className="mt-5 max-w-[56ch] text-lg text-muted">
                While other lawn guys take weeks to call back, Chris shows up, often the same day. Lawns, hedges, gardens, patio stones, power washing and small painting jobs, done right at very reasonable prices.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className="btn bg-cta text-lg text-ink shadow-md hover:bg-cta-hover"><PhoneIcon className="ringer h-5 w-5" /> Call {PHONE_DISPLAY}</a>
                <a href={PHONE_SMS} className="btn border-2 border-brand bg-white text-brand-dark hover:bg-cream"><ChatIcon /> Text Chris</a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] font-semibold text-ink/80">
                <li className="flex items-center gap-1.5"><Stars className="h-4 w-4" /> 5.0 · 17 Google reviews</li>
                <li className="flex items-center gap-1.5"><ShieldIcon className="h-4 w-4 text-brand" /> Licensed &amp; Insured</li>
                <li className="flex items-center gap-1.5"><TagIcon className="h-4 w-4 text-brand" /> Very reasonable prices</li>
              </ul>
            </div>

            <figure className="enter enter-2 rounded-2xl border border-line bg-white p-7 shadow-xl shadow-brand/10 md:p-8">
              <div className="flex items-center justify-between">
                <Stars />
                <span className="text-sm font-semibold text-muted">Google review</span>
              </div>
              <p className="mt-4 font-head text-xl font-extrabold leading-snug">A patio stone job, start to finish, in one afternoon</p>
              <ol className="mt-5 space-y-3 border-l-2 border-cta pl-5">
                {[
                  { t: "Day 1", d: "Robin calls Chris about sunken patio stones." },
                  { t: "Next day, 1 p.m.", d: "Chris comes by and quotes the job." },
                  { t: "Within the hour", d: "He's back with the materials." },
                  { t: "4 p.m.", d: "Done. She'd expected a full day and weeks of waiting." },
                ].map((x) => (
                  <li key={x.t} className="relative">
                    <span className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full bg-cta ring-4 ring-white" aria-hidden="true" />
                    <span className="block text-sm font-bold text-brand">{x.t}</span>
                    <span className="block text-ink">{x.d}</span>
                  </li>
                ))}
              </ol>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm text-muted"><span className="font-bold text-ink">Robin U.</span> · Patio stones</figcaption>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why choose Take Care" className="border-y border-line bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: Star, t: "5.0 Google rating", s: "17 reviews, all five stars" },
              { icon: ShieldIcon, t: "Licensed & Insured", s: "Peace of mind on every job" },
              { icon: BoltIcon, t: "Same-day service", s: "Quick to respond, quick to show" },
              { icon: HelpIcon, t: "Happy to advise", s: "Ask Chris anything about your yard" },
            ].map((i) => (
              <li key={i.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-brand"><i.icon className="h-5 w-5" /></span>
                <span><span className="block font-bold">{i.t}</span><span className="block text-sm text-muted">{i.s}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="max-w-2xl">
              <p className="font-bold text-brand">Services</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">One call for the yard, and the odd jobs too</h2>
              <p className="mt-4 text-lg text-muted">Plenty of customers start with a lawn cut or a clean-up and end up calling Chris for patio stones, power washing or a freshly painted room.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((x, i) => (
                <article key={x.name} className={`card flex flex-col rounded-2xl border bg-white p-6 ${i === 1 ? "border-2 border-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-cream text-brand"><x.icon /></span>
                    {i === 1 && <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">Most requested</span>}
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold">{x.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{x.text}</p>
                  <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-dark">Call about this <ArrowRight /></a>
                </article>
              ))}
              <div className="flex flex-col justify-center rounded-2xl bg-brand p-6 text-white">
                <p className="font-head text-xl font-extrabold">Something not on the list?</p>
                <p className="mt-2 text-white/85">Ask anyway. If Chris can help, he&apos;ll tell you. If he can&apos;t, he&apos;ll tell you that too.</p>
                <a href={PHONE_SMS} className="btn mt-5 self-start bg-cta text-ink hover:bg-cta-hover"><ChatIcon /> Text a question</a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <Stars className="h-6 w-6" />
                <h2 className="mt-3 text-3xl font-extrabold md:text-[2.6rem]">Rated 5.0 from 17 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Customers keep mentioning how fast Chris responds, how freely he shares lawn and garden advice, his impeccable work and his very reasonable prices.</p>
              </div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn shrink-0 border-2 border-brand bg-white text-brand-dark hover:bg-white/70">Read all reviews on Google <ArrowRight /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <figure key={r.name} className={`card flex flex-col rounded-2xl border border-line bg-white p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
                  <Stars className="h-4 w-4" />
                  <blockquote className={`mt-3 flex-1 leading-relaxed ${i === 0 ? "text-xl font-semibold" : ""}`}>&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                    <span className="font-bold">{r.name}</span>
                    <span className="block text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-bold text-brand">Meet Chris</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">A west Niagara gardener who actually picks up the phone</h2>
              <div className="mt-6 space-y-4 text-lg text-muted">
                <p>Take Care Property Services is run by Chris, a licensed and insured professional gardener serving Grimsby, Beamsville, Vineland and the surrounding area.</p>
                <p>The name says it: we take care of the place. That means showing up quickly, doing the job properly, and hauling away the mess. It also means answering your questions, whether it&apos;s which plants will thrive out front or how to keep your new lawn healthy. One customer described Chris as endlessly patient.</p>
                <p>Chris replies to his reviews personally, and a lot of his work comes from people booking him again and sending their friends his way.</p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: BoltIcon, t: "Responds fast", s: "Often same day, when others take weeks." },
                { icon: HelpIcon, t: "Patient advice", s: "Plant choices and care tips, free with the job." },
                { icon: ShieldIcon, t: "Impeccable work", s: "Customers' word, not ours." },
                { icon: TagIcon, t: "Fair prices", s: "Very reasonable, according to review after review." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border border-line bg-cream p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-cta"><d.icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-extrabold">{d.t}</h3>
                  <p className="mt-1 text-muted">{d.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="how" className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 id="how" className="text-3xl font-extrabold md:text-[2.6rem]">How it works</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-4">
              {steps.map((x, i) => (
                <li key={x.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand font-head text-lg font-extrabold text-cta">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-extrabold">{x.title}</h3>
                  <p className="mt-1.5 text-muted">{x.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">Serving Grimsby, Beamsville, Vineland and Pelham</h2>
              <p className="mt-4 text-lg text-muted">We look after homes and rental properties across west Niagara. If you&apos;re close by and not sure we cover your street, just ask.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {towns.map((t) => <li key={t} className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-semibold text-brand-dark">{t}</li>)}
              </ul>
              <a href={PHONE_TEL} className="btn mt-8 bg-cta text-ink hover:bg-cta-hover"><PhoneIcon className="ringer h-5 w-5" /> Call {PHONE_DISPLAY}</a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe title="Map of Grimsby, Beamsville and Vineland" src="https://maps.google.com/maps?q=Beamsville%2C%20ON&z=11&output=embed" className="h-[360px] w-full md:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="text-3xl font-extrabold md:text-[2.6rem]">Questions people ask Chris</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-white">
                  <summary className="flex items-center justify-between gap-4 p-5 text-lg font-bold">{f.q}<ChevronDown className="chev h-5 w-5 shrink-0 text-brand" /></summary>
                  <p className="px-5 pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Let us take care of it.</h2>
              <p className="mt-3 max-w-xl text-lg text-white/85">Call or text Chris at {PHONE_DISPLAY}. We start at 8 a.m., and plenty of jobs get done the same day.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className="btn bg-cta px-7 text-lg text-ink hover:bg-cta-hover"><PhoneIcon className="ringer h-5 w-5" /> Call {PHONE_DISPLAY}</a>
              <a href={PHONE_SMS} className="btn border-2 border-white/80 text-white hover:bg-white/10"><ChatIcon /> Send a text</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-28 pt-14 text-white/75 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-head text-xl font-extrabold text-white">Take Care Property Services</p>
            <p className="mt-3 max-w-md">Licensed and insured lawn care, yard clean-ups and property maintenance for Grimsby, Beamsville, Vineland, Pelham and west Niagara. Owner Chris.</p>
            <div className="mt-5 flex gap-4">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-white hover:text-white/80" aria-label="Take Care Property Services on Facebook"><FacebookIcon /> Facebook</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-white hover:text-white/80" aria-label="Take Care Property Services on Instagram"><InstagramIcon /> Instagram</a>
            </div>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2">
              <li><a href={PHONE_TEL} className="hover:text-white">{PHONE_DISPLAY}</a></li>
              <li>Grimsby · Beamsville · Vineland, ON</li>
              <li>Starts at 8 a.m.</li>
              <li>Licensed &amp; Insured</li>
              <li><a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Find us on Google</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-2 text-sm">{services.map((x) => <li key={x.name}>{x.name}</li>)}</ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-5 pt-6 text-sm text-white/55 md:px-6">© {new Date().getFullYear()} Take Care Property Services · West Niagara, Ontario</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <a href={PHONE_TEL} className="btn bg-cta text-ink"><PhoneIcon /> Call</a>
        <a href={PHONE_SMS} className="btn border-2 border-brand text-brand-dark"><ChatIcon /> Text</a>
      </div>
    </>
  );
}
