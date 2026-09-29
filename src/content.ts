export const contact = {
  email: 'tobycrust@gmail.com',
  linkedin: 'https://www.linkedin.com/in/toby-crust-a6a2a2245/',
  github: 'https://github.com/leanforward-backend',
  cv: '/toby-crust-cv.pdf',
}

/** `value` is what shows without JavaScript; the rest drives the count-up. */
export const bigFreezeStats = [
  { value: '$2.5M', to: 2.5, prefix: '$', suffix: 'M', decimals: 1, label: 'revenue, up 49% on last year' },
  { value: '57%', to: 57, prefix: '', suffix: '%', decimals: 0, label: 'of visitors bought' },
  { value: '59,085', to: 59085, prefix: '', suffix: '', decimals: 0, label: 'transactions' },
  { value: '36,000', to: 36000, prefix: '', suffix: '', decimals: 0, label: 'new supporters' },
]

export const arStats = [
  { value: '3', to: 3, prefix: '', suffix: '', decimals: 0, label: 'AR experiences at heritage sites' },
  { value: '5', to: 5, prefix: '', suffix: '', decimals: 0, label: 'languages of AI narration' },
  { value: '2', to: 2, prefix: '', suffix: '', decimals: 0, label: 'app stores, live on iOS and Android' },
]

/** In the order a visitor meets them. */
export const arScreens = [
  {
    src: 'ar-home',
    alt: 'Home screen: The Digger welcomes visitors and lists the experiences, starting with Catalina Flying Boats.',
  },
  {
    src: 'ar-catalina',
    alt: 'AR view at Doctors Gully: Catalina flying boats rendered over the real shoreline, with narration about the Black Cats rescue crews.',
  },
  {
    src: 'ar-digger',
    alt: 'The Digger, a 3D MetaHuman, standing on site and answering the question "Why was Darwin bombed?"',
  },
  {
    src: 'ar-site-map',
    alt: 'Site map of Alice Springs with the ANZAC Hill marker.',
  },
  {
    src: 'ar-trip-planner',
    alt: 'The Explore screen with the AI trip planner for planning a military heritage route.',
  },
]

export const agentSteps = [
  'Request posted in Slack',
  'AI agent plans the change',
  'Fresh VM applies it',
  'Tests run automatically',
  'Pull request, I review and merge',
]

export const sideProjects = [
  {
    title: 'TypeTracker',
    url: 'https://type-tracker.vercel.app/',
    image: 'typetracker',
    alt: 'TypeTracker mid-race on a coding quote about TCP, at 48 wpm and 95% accuracy, with mistyped letters marked in red and a Generate AI Analysis panel below.',
    text: 'I really love this project I built and I use it everyday. Its a type racer where you type quotes from a specific genre, and can then get an AI explination of the quote. It charts every race, tracks the keys and words you miss and drills them in Mistakes mode. Gemini writes fresh quotes on any topic you pick.',
    tech: 'React · Convex · Clerk · Gemini API',
  },
  {
    title: 'TickyTick',
    url: 'https://tickytick.tobycrust.workers.dev',
    image: 'tickytick',
    alt: 'TickyTick week calendar with timed tasks beside a sidebar of views: Today, Next 7 Days, Inbox, Calendar, Matrix, Focus and Assistant.',
    text: 'A local-first task manager with a calendar, habits, a focus timer and an AI assistant. Tasks live on the device, so it is instant and works offline, then sync through Supabase in real time. One codebase ships to the web, as a PWA and as an Android app.',
    tech: 'React · TypeScript · Dexie · Supabase · Capacitor',
  },
]

export const experience = [
  {
    when: '2025 to now',
    where: 'Slik · Software Engineer',
    what: 'Lead developer on NT Military Explorer, an AR app for Tourism NT. Built the Slack-to-VM AI agent workflows.',
  },
  {
    when: '2024 to 2025',
    where: 'Fabra · Software Engineer',
    what: 'React and TypeScript SaaS. Shipped design-sharing permissions and email validation end to end.',
  },
  {
    when: '2024',
    where: 'Bardon Design · Bangkok',
    what: 'Gamified e-commerce with the Louis Vuitton team, and an AR furniture app.',
  },
  {
    when: '2021 to 2023',
    where: 'Internships · Auckland',
    what: 'AR and game work, alongside a Bachelor of Design Innovation at Victoria University.',
  },
]
