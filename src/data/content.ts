export interface BookCover {
  id: string;
  title: string;
  author: string;
  genre: string;
  accentColor: string;
  quote?: string;
  isPlaceholder?: boolean;
}

export interface ServicePillar {
  number: string;
  id: string;
  title: string;
  promise: string;
  description: string;
  inclusions: string[];
  timelineBadge: string;
  ctaText: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  bookTitle: string;
  author: string;
  genre: string;
  service: string;
  timeline: string;
  headline: string;
  brief: string;
  creativeIdea: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  authorQuote: string;
  authorTitle: string;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  author: string;
  bookTitle: string;
  genre: string;
  result: string;
  quote: string;
  isPlaceholder?: boolean;
}

// 1. Book Covers for Marquee
export const BOOK_COVERS: BookCover[] = [
  { id: '1', title: 'The Silent Hollow', author: 'Elena Vance', genre: 'Psychological Thriller', accentColor: '#3D3945', quote: '1.4M Views on Launch' },
  { id: '2', title: 'Crown of Starlight', author: 'Kaelen Thorne', genre: 'Epic Romantic Fantasy', accentColor: '#5E1404', quote: '#1 BookTok Trending' },
  { id: '3', title: 'A Thousand Summer Days', author: 'Clara Mercer', genre: 'Contemporary Romance', accentColor: '#7D766B', quote: '850K Backlist Lift' },
  { id: '4', title: 'The Anatomy of Shadows', author: 'Julian Sterling', genre: 'Dark Academia', accentColor: '#121115', quote: 'Top 20 Category' },
  { id: '5', title: 'Beneath the Salt Wind', author: 'Mara Lindqvist', genre: 'Literary Fiction', accentColor: '#28252E', quote: 'Over 50K Saves' },
  { id: '6', title: 'Whispers in Crimson', author: 'S. R. Hastings', genre: 'Gothic Mystery', accentColor: '#8C220B', quote: 'Pre-order Surge' },
  { id: '7', title: 'The Cartographer’s Secret', author: 'David Moreau', genre: 'Historical Fiction', accentColor: '#655F55', quote: 'Global Reader Wave' },
  { id: '8', title: 'When the Tide Recedes', author: 'Nadia Solis', genre: 'Memoir & Essays', accentColor: '#3D3945', quote: '100K+ TBR Adds' },
];

// 2. Metrics (Verified from Brief V1.0)
export const KEY_METRICS = [
  {
    id: 'reach',
    value: '13M+',
    numericValue: 13,
    suffix: 'M+',
    label: 'Readers Reached',
    timeframe: 'Combined organic reach across all campaigns to date',
  },
  {
    id: 'community',
    value: '50K+',
    numericValue: 50,
    suffix: 'K+',
    label: 'Dedicated Readers',
    timeframe: "Followers on Ariba's organic @whynotnovels community",
  },
  {
    id: 'top-campaign',
    value: '1.4M',
    numericValue: 1.4,
    suffix: 'M',
    label: 'Views on Top Campaign',
    timeframe: 'Viral launch feature reach (BookStagram Gallery showcase [TBC])',
  },
  {
    id: 'focus',
    value: '100%',
    numericValue: 100,
    suffix: '%',
    label: 'Literary Focus',
    timeframe: 'Exclusively books, authors, and literary publishers',
  },
];

// 3. Four Core Services
export const SERVICES: ServicePillar[] = [
  {
    number: '01',
    id: 'book-launches',
    title: 'Book Launches',
    promise: "Turn release day into a moment readers can't scroll past.",
    description: 'A synchronized, high-impact rollout combining pre-order buzz, launch-week creator waves, and sustained post-release momentum.',
    inclusions: [
      'Pre-launch cover reveal & ARC creator seeding (Weeks -8 to -1)',
      'Launch-week short-form video wave & author interview spotlight',
      'Digital book tour & sustained reader community discussions',
    ],
    timelineBadge: '-8 Weeks → Launch Day → +4 Weeks',
    ctaText: 'Plan a book launch',
  },
  {
    number: '02',
    id: 'backlist-revival',
    title: 'Backlist Revival',
    promise: 'Your older books still have readers waiting. We find them.',
    description: 'Repositioning published titles around current BookTok tropes, fresh aesthetic hooks, and modern video to re-ignite read-through and sales.',
    inclusions: [
      'Trope & comp-title re-positioning (#EnemiesToLovers, #DarkAcademia)',
      'Hook-driven short-form video series targeting new demographics',
      'Seasonal creator waves and release tie-ins for ongoing series',
    ],
    timelineBadge: 'Rapid 4-Week Activation',
    ctaText: 'Revive your backlist',
  },
  {
    number: '03',
    id: 'author-brand',
    title: 'Author Brand & Content',
    promise: 'Become an author readers follow — not just a book they bought.',
    description: 'Done-for-you monthly content strategy and high-converting video production that builds a loyal audience while protecting your writing time.',
    inclusions: [
      'Complete monthly scripting, hook curation & professional video editing',
      'Requires about an hour of author filming per week',
      'Optimized captions, scheduled calendar, and transparent analytics',
    ],
    timelineBadge: 'Monthly Partnership Retainer',
    ctaText: 'Build your author brand',
  },
  {
    number: '04',
    id: 'author-podcasts',
    title: 'Author Podcasts',
    promise: 'Record the conversation. We turn every episode into weeks of content.',
    description: 'Turnkey podcast production, sound mastering, guest coordination, and viral short-form clipping designed for literary thought leadership.',
    inclusions: [
      'Show concept, visual branding, and multi-platform RSS launch setup',
      'Broadcast-grade audio/video editing & custom YouTube thumbnails',
      '10–15 viral vertical video clips extracted per recorded episode',
    ],
    timelineBadge: 'Full-Cycle Production Pipeline',
    ctaText: 'Launch an author podcast',
  },
];

// 4. Case Studies
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'silent-hollow',
    title: 'How The Silent Hollow Reached 1.4M Views and Hit the Top 20 in Launch Month',
    bookTitle: 'The Silent Hollow',
    author: 'Elena Vance',
    genre: 'Psychological Thriller',
    service: 'Book Launch Wave',
    timeline: '6-Week Campaign Window',
    headline: '1.4M views in 30 days',
    brief: 'A debut author needed to break through algorithm noise in a crowded psychological thriller category with zero pre-existing social presence.',
    creativeIdea: 'Identified the 3 most provocative plot twists, framing them as POV dilemmas on BookTok with suspenseful audio cues that drove immediate comments and shares.',
    metrics: [
      { label: 'Total Verified Views', value: '1.42M', sublabel: 'Over 6 weeks on TikTok & Reels' },
      { label: 'Reader Saves & Bookmarks', value: '38.5K', sublabel: 'Direct purchase intent signals' },
      { label: 'New Author Followers', value: '+4,200', sublabel: 'Engaged readers gained' },
      { label: 'Chart Ranking', value: 'Top 20', sublabel: 'Amazon Thrillers category' },
    ],
    authorQuote: "Ariba and her team didn't just edit videos; they understood my book's darkest hook better than anyone else. The launch week felt like an actual event.",
    authorTitle: 'Debut Novelist',
    isPlaceholder: true,
  },
  {
    id: 'crown-starlight',
    title: 'How Crown of Starlight Revived Book 1 with 850K Views and a 310% Read-Through Surge',
    bookTitle: 'Crown of Starlight',
    author: 'Kaelen Thorne',
    genre: 'Romantic Fantasy',
    service: 'Backlist Revival',
    timeline: '4-Week Campaign Window',
    headline: '310% sales velocity surge',
    brief: 'Published 18 months prior, Book 1 sales had flattened ahead of the upcoming sequel release. The author needed fresh readers to discover the universe.',
    creativeIdea: 'Repositioned the romance arc around trending BookTok tropes (#MorallyGreyHero, #ForcedProximity), producing 12 high-aesthetic atmosphere reels.',
    metrics: [
      { label: 'Campaign Views', value: '850K', sublabel: 'Organic reach across 4 weeks' },
      { label: 'Saves & TBR Adds', value: '29.1K', sublabel: 'Goodreads and Instagram saves' },
      { label: 'Series Read-Through', value: '+310%', sublabel: 'Jump in Book 1 into Book 2 sales' },
      { label: 'Follower Growth', value: '+3,850', sublabel: 'New fans in target fantasy niche' },
    ],
    authorQuote: "I assumed my older title had run its course. The Book Launch Company proved my backlist still had thousands of readers waiting for it.",
    authorTitle: 'Fantasy Author',
    isPlaceholder: true,
  },
];

// 5. Objection-Dismantling FAQ (From Brief V1.0)
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-timing',
    question: 'How early should I get in touch before my release date?',
    answer: 'Ideally, we recommend beginning 8 to 12 weeks before your publication day. This allows us to seed Advance Reader Copies (ARCs) with verified literary creators, build pre-order anticipation, and film launch-week assets without rushing. However, we also operate fast-turnaround campaigns for books already released through our Backlist Revival service.',
  },
  {
    id: 'faq-self-published',
    question: 'Do you work with self-published and indie authors?',
    answer: 'Yes, absolutely. We work with independent authors, debut writers, traditionally published authors across the Big 5, and specialized overseas publishers. If you have written a story that readers will love, we know how to package and distribute it.',
  },
  {
    id: 'faq-genres',
    question: 'Which genres do you specialize in?',
    answer: 'Our strongest organic traction is in Fiction, Thrillers & Mysteries, Romance & Romantasy, Sci-Fi & Fantasy, Historical Fiction, and select narrative Non-Fiction and Memoirs. We evaluate every title during our 20-minute discovery call to ensure our audience and creators align with your book.',
  },
  {
    id: 'faq-guarantees',
    question: 'Can you guarantee sales or bestseller status?',
    answer: 'Honest answer: No ethical agency can guarantee algorithmic retail sales or specific bestseller rankings. What we guarantee is our work, tested creative hook execution, targeted reader reach, high-velocity distribution, and radical transparency in our weekly campaign reporting.',
  },
  {
    id: 'faq-author-time',
    question: 'What do you need from me?',
    answer: 'The book (or ARC), a short discovery call, and — for ongoing brand and podcast work — about an hour a week. For book launches and backlist revivals, our team handles all scripting, editing, and creator coordination so you can focus on writing your next book.',
  },
];

// 6. Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Kristi Fuentes Losey',
    bookTitle: 'The Memory Keeper',
    genre: 'Literary Fiction',
    result: '140K views in 3 weeks',
    quote: "Working with Ariba was seamless. She treats your manuscript with the discernment of an editor and the sharp intuition of a creator who actually understands what stops people from scrolling.",
    isPlaceholder: false,
  },
  {
    id: 't-2',
    author: 'Johnny Gnall',
    bookTitle: 'City of Dust & Ash',
    genre: 'Cyberpunk Noir',
    result: 'Top 10 Category Debut',
    quote: "Most PR agencies send press releases that nobody reads. The Book Launch Company put my novel directly in front of thousands of readers on TikTok within 48 hours of release.",
    isPlaceholder: false,
  },
  {
    id: 't-3',
    author: 'Egle Sivak',
    bookTitle: 'Northern Echoes',
    genre: 'Historical Thriller',
    result: '2.3K pre-orders generated',
    quote: "The team’s respect for the craft of writing paired with their mastery of short-form video gave my launch the momentum my publisher couldn’t provide.",
    isPlaceholder: false,
  },
];

// 7. Process Steps (How It Works)
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Manuscript Audit',
    timeframe: 'Week 0',
    description: 'We read your book, isolate its primary tropes and comp titles, and analyze your target reader demographics.',
  },
  {
    step: '02',
    title: 'The Campaign Blueprint',
    timeframe: 'Weeks 1–2',
    description: 'We draft bespoke 3-second hook scripts, design the video format mix, and schedule the multi-phase rollout calendar.',
  },
  {
    step: '03',
    title: 'Produce & Deploy Waves',
    timeframe: 'Weeks 3–6',
    description: 'We edit, master, and release cinematic vertical video across Instagram, TikTok, and YouTube with creator partners.',
  },
  {
    step: '04',
    title: 'Analyze & Scale Momentum',
    timeframe: 'Ongoing',
    description: 'We track view velocity, saves, and retail clicks, doubling down on winning formats to sustain reader interest long-term.',
  },
];

// 8. Audience Segments
export const AUDIENCE_SEGMENTS = [
  {
    id: 'debut',
    badge: 'Debut & Indie Authors',
    title: 'Break through the algorithmic noise.',
    subtitle: 'For authors launching their first or second book without major publisher marketing support.',
    deliverables: [
      'Pre-launch ARC seeding with verified book creators',
      'Hook-driven short-form video campaigns',
      'Step-by-step author guidance from Ariba',
    ],
    ctaText: 'Explore debut launches',
  },
  {
    id: 'established',
    badge: 'Established & Career Authors',
    title: 'Build an author brand that compounds.',
    subtitle: 'For multi-title authors wanting consistent social growth, podcast production, and backlist monetization.',
    deliverables: [
      'Done-for-you monthly content engine (1 hr/week)',
      'Backlist catalog repositioning and trope revivals',
      'Author podcast production and short-form clipping',
    ],
    ctaText: 'Explore brand retainers',
  },
  {
    id: 'publishers',
    badge: 'Publishers & Literary Agencies',
    title: 'Boutique new-media execution at scale.',
    subtitle: 'For traditional publishers, independent presses, and agents coordinating lead title rollouts.',
    deliverables: [
      'Multi-title seasonal campaign coordination',
      'Coordinated rollouts for international editions',
      'Executive stakeholder reporting with hard metrics',
    ],
    ctaText: 'Request a publisher proposal',
  },
];
