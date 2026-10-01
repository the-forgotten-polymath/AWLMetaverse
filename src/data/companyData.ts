export interface ServiceItem {
  id: string;
  name: string;
  category: "Technology" | "Development" | "Marketing" | "Creative";
  description: string;
  details: string;
  features: string[];
  photo: string;
  badge?: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  color: string;
  icon: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  coverImage: string;
  category: string;
  createdAt: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const COMPANY_INFO = {
  name: "AWL Metaverse Pvt. Ltd.",
  tagline: "Enterprise Infrastructure & Intelligence",
  heroHeadlineLine1: "You bring the ambition.",
  heroHeadlineLine2: "We build the engine behind it.",
  heroSubcopyLine1: "A unified infrastructure platform to help teams build,",
  heroSubcopyLine2: "ship, and scale AI systems with confidence.",
  aboutOverview:
    "AWL Metaverse Pvt. Ltd. is a digital services and advanced enterprise infrastructure company helping modern businesses scale with high-impact technology — AI & intelligent workflows, custom ERP, CRM, LMS platforms, web/app engineering, and performance marketing — backed by a rigorous training wing that keeps our technical talent pipeline sharp.",
  directors: [
    {
      name: "Mr. Rakesh",
      role: "Director & Co-Founder",
      bio: "Spearheading strategic vision, operational excellence, and enterprise engineering across digital transformation initiatives.",
      initials: "R",
      image: "/Founder-Rakesh.png",
      isPlaceholder: false,
    },
    {
      name: "Mrs. Nirmal",
      role: "Director & Co-Founder",
      bio: "Directing talent development, client success ecosystems, and organisational governance.",
      initials: "N",
      image: null,
      isPlaceholder: true,
    },
  ],
  offices: [
    {
      city: "Jind, Haryana",
      label: "Haryana Headquarters",
      address: "SCF 5, 2nd Floor, Punjab and Sind Bank, Opposite DRDA, Jind (Haryana) 126102",
      phone: "+91 70420 49818",
      email: "awlmeta.info@gmail.com",
    },
    {
      city: "Chandigarh",
      label: "Chandigarh Innovation Hub",
      address: "SCO 114-115, 4th Floor, Sector 34-A, Chandigarh 160017",
      phone: "+91 70420 49818",
      email: "awlmeta.info@gmail.com",
    },
  ],
  contact: {
    email: "awlmeta.info@gmail.com",
    phone: "+91 70420 49818",
    formattedPhone: "+91 70420 49818",
  },
};

export const METRICS_DATA: MetricItem[] = [
  {
    id: "251857b4-c298-4870-ae0d-6ef4c4a32364",
    label: "Students Trained",
    value: 1000,
    suffix: "+",
    description: "Across all technology and AI acceleration tracks",
    color: "#0D9488",
    icon: "Users",
  },
  {
    id: "5d155b7a-7c4c-4082-a008-32995fcc8a0a",
    label: "Leads Generated",
    value: 10,
    suffix: "K+",
    description: "High-intent qualified opportunities generated for client brands",
    color: "#EA580C",
    icon: "Zap",
  },
  {
    id: "76540187-c255-453e-81ae-456ab23acce0",
    label: "Brands Served",
    value: 50,
    suffix: "+",
    description: "Enterprise, D2C, and emerging national market leaders",
    color: "#2563EB",
    icon: "Globe",
  },
  {
    id: "9ce00e9b-e667-4565-b33f-2b0e931934b8",
    label: "Placement Rate",
    value: 100,
    suffix: "%",
    description: "Direct industry internships & software engineering roles",
    color: "#0D9488",
    icon: "TrendingUp",
  },
  {
    id: "db2b118a-eaf9-433a-b087-ab3f3cbb21fb",
    label: "Courses Offered",
    value: 15,
    suffix: "+",
    description: "Live workshops, intensive bootcamps, and self-paced tracks",
    color: "#7C3AED",
    icon: "Trophy",
  },
  {
    id: "de8b0ade-b49c-43d5-a0e3-c195674f6558",
    label: "Years in Industry",
    value: 3,
    suffix: "+yrs",
    description: "Building resilient digital engines and automated ecosystems",
    color: "#4F46E5",
    icon: "Clock",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "8db53924-ba08-4bbc-9e0a-10a3ffd4eab4",
    name: "AI & Automation",
    category: "Technology",
    badge: "Flagship",
    description: "Custom AI agents, multi-modal workflows, and autonomous automation tailored to your unique operational telemetry.",
    details: "We put state-of-the-art AI to work on real, mission-critical bottlenecks — not ephemeral toys. We identify tedious, manual friction points across operations and engineer end-to-end autonomous agents that process documents, route sales leads, and trigger actions with human-in-the-loop oversight.",
    features: [
      "AI chat assistants for web, WhatsApp, and internal tooling",
      "Autonomous lead capture, qualification, and instant routing",
      "Complex document parsing, OCR, and structured data extraction",
      "Real-time synthesis, telemetry dashboards, and report generation",
      "Seamless integration with legacy ERPs, CRMs, and APIs",
      "Deterministic human-in-the-loop validation checkpoints",
    ],
    photo: "/photos/1677442136019-21780ecad995-1600.webp",
  },
  {
    id: "3ea1224c-3a75-4f4b-a005-9adf1d8d692e",
    name: "ERP Solutions",
    category: "Technology",
    badge: "Enterprise",
    description: "Centralized operating systems connecting inventory, procurement, accounts, and human resources under real-time synchronization.",
    details: "An ERP eliminates disparate spreadsheets and siloed software by harmonizing inventory, purchasing, invoicing, and cross-departmental reporting into a unified, lightning-fast source of truth.",
    features: [
      "Live multi-warehouse inventory and supply chain tracking",
      "Purchase order generation, vendor management, and billing",
      "Automated GST-compliant invoicing and ledger reconciliation",
      "Role-based access control (RBAC) and audit trails",
      "Real-time executive KPI dashboards and financial forecasting",
      "Frictionless legacy migration with zero downtime guarantees",
    ],
    photo: "/photos/1551288049-bebda4e38f71-1600.webp",
  },
  {
    id: "49b95f76-4a6c-4523-bc05-6abd66a55c16",
    name: "CRM Solutions",
    category: "Technology",
    description: "Every inquiry, deal pipeline, and omnichannel conversation managed effortlessly with proactive follow-up triggers.",
    details: "Never let a high-value opportunity slip through the cracks. Inquiries from landing pages, inbound calls, Meta ads, and WhatsApp stream into a unified pipeline with automated reminders and deal velocity tracking.",
    features: [
      "Omnichannel lead ingestion from web forms, WhatsApp, and phone",
      "Visual sales pipelines with custom deal stages and scoring",
      "Proactive automated follow-up cadences and task triggers",
      "Comprehensive interaction timeline and contact dossiers",
      "Campaign ROI tracking and channel attribution analytics",
      "One-click quotation generation and contract dispatch",
    ],
    photo: "/photos/1600880292203-757bb62b4baf-1600.webp",
  },
  {
    id: "754dcd7d-5a36-4536-ad9c-cc78f9a2a0f1",
    name: "LMS Platforms",
    category: "Technology",
    description: "White-label learning platforms for training institutes and enterprise teams with interactive assessments and verification.",
    details: "Deliver premium interactive courses, monitor student progression in real time, and award cryptographically verifiable credentials — built with mobile-first performance for institutes and corporate learning.",
    features: [
      "Fully branded, white-label student and instructor portals",
      "DRM-protected video streaming, lecture notes, and quizzes",
      "Automated progress metrics and verifiable digital certificates",
      "Integrated payment gateways and subscription management",
      "Comprehensive admin, instructor, and learner dashboards",
      "Corporate compliance tracking and automated onboarding cohorts",
    ],
    photo: "/photos/1522202176988-66273c2fd55f-1600.webp",
  },
  {
    id: "0ad27b4d-2f0b-4435-b343-2992e9ef05f4",
    name: "Web Development",
    category: "Development",
    badge: "Core",
    description: "Ultra-fast, accessible, modern web applications engineered with Next.js, React, and server-driven performance.",
    details: "Your digital storefront is your highest-leverage asset. We craft blazing-fast web architectures engineered to achieve sub-second load times, flawless SEO indices, and seamless self-service administrative experiences.",
    features: [
      "Modern React / Next.js web applications and headless architecture",
      "High-converting landing pages and conversion-rate optimization",
      "Scalable e-commerce infrastructure with global checkout options",
      "Full mobile responsiveness and cross-browser resilience",
      "Built-in technical SEO hierarchy and Core Web Vitals optimization",
      "High-availability cloud deployment with automated CI/CD pipelines",
    ],
    photo: "/photos/1460925895917-afdab827c52f-1600.webp",
  },
  {
    id: "4d1fbf56-5a43-44fd-813c-fc3f1e746db9",
    name: "App Development",
    category: "Development",
    description: "High-performance native and cross-platform iOS & Android mobile applications built for fluid user interaction.",
    details: "From consumer-facing social/e-commerce experiences to complex field-agent mobile workflows, we build mobile apps that feel buttery smooth, consume minimal memory, and operate offline gracefully.",
    features: [
      "Native iOS (Swift) and Android (Kotlin) or cross-platform Flutter/React Native",
      "Pixel-faithful UI/UX with haptic feedback and micro-interactions",
      "Scalable backend APIs, WebSockets, and real-time syncing",
      "Push notification systems and localized user engagement",
      "App Store and Google Play Store compliance and launch handling",
      "Telemetry monitoring, crash analytics, and ongoing feature updates",
    ],
    photo: "/photos/1516321318423-f06f85e504b3-1600.webp",
  },
  {
    id: "251cd52a-c8e2-4619-9e36-694583b87720",
    name: "Gaming Development",
    category: "Development",
    description: "Immersive 3D worlds, WebGL interactive showcases, and gamified customer acquisition systems built in Unity.",
    details: "Engage audiences with spatial storytelling, interactive 3D product visualizers, and multiplayer gamified activations that captivate users far beyond static media.",
    features: [
      "Cross-platform 2D/3D games for mobile, desktop, and web",
      "Interactive 3D WebGL product configurators and showrooms",
      "Gamified loyalty, educational tracks, and rewards mechanics",
      "Multiplayer networking, high-concurrency matchmaking, and leaderboards",
      "High-fidelity visual shader programming and 3D asset modeling",
      "Post-launch telemetry and live-ops content updates",
    ],
    photo: "/photos/1550751827-4bd374c3f58b-1600.webp",
  },
  {
    id: "63654f46-c71f-4e42-a28a-528282532bc7",
    name: "Data Analytics",
    category: "Technology",
    description: "Transform chaotic data fragments into predictive, executive dashboards that uncover clear growth levers.",
    details: "Raw data is useless without synthesis. We connect your ERPs, advertising accounts, inventory logs, and customer touchpoints into interactive visual cockpits that empower rapid, confident decisions.",
    features: [
      "Interactive executive cockpits and real-time BI dashboards",
      "Consolidation of scattered spreadsheets and API pipelines",
      "Revenue attribution, cohort retention, and customer LTV modeling",
      "Advanced Google Analytics 4 (GA4) and server-side tracking",
      "Automated automated morning intelligence summaries via Slack/Email",
      "KPI anomaly alerts and demand forecasting models",
    ],
    photo: "/photos/1551650975-87deedd944c3-1600.webp",
  },
  {
    id: "7c39c211-77bd-4ff6-8560-39e1b8705488",
    name: "Cyber Security",
    category: "Technology",
    description: "Rigorous vulnerability assessments, cloud hardening, and continuous defense against digital threats.",
    details: "Protect your corporate reputation, customer records, and operational assets. We audit your codebase, cloud configurations, API surfaces, and access roles to identify and neutralize exploits before bad actors strike.",
    features: [
      "Comprehensive website and cloud application penetration testing",
      "Vulnerability audits across servers, containers, and databases",
      "Infrastructure hardening, SSL/TLS enforcement, and DDoS mitigation",
      "Role-based permission auditing and least-privilege enforcement",
      "Automated encrypted disaster recovery and immutable backups",
      "Staff security hygiene and phishing resilience training",
    ],
    photo: "/photos/1563986768609-322da13575f3-1600.webp",
  },
  {
    id: "29bf1f22-e1e4-4046-a2b8-03b04dce6b14",
    name: "Digital Marketing",
    category: "Marketing",
    description: "Full-funnel digital acceleration aligning organic search, paid distribution, and conversion rate engineering.",
    details: "We build integrated acquisition engines where every marketing rupee is held accountable to revenue, gross margin, and lower customer acquisition costs (CAC).",
    features: [
      "Comprehensive Technical and On-Page Search Engine Optimization",
      "Targeted Google Search, YouTube, and Performance Max advertising",
      "Multi-channel Meta, Instagram, and LinkedIn conversion funnels",
      "Dedicated high-velocity landing pages engineered to convert",
      "Automated email, SMS, and WhatsApp nurturing sequences",
      "Transparent bi-weekly CAC, ROAS, and cohort performance audits",
    ],
    photo: "/photos/1460925895917-afdab827c52f-1600.webp",
  },
  {
    id: "789e4dd0-6221-48b9-9971-51348be9c2ef",
    name: "Performance Marketing",
    category: "Marketing",
    description: "Data-driven paid advertising on Google and Meta tuned ruthlessly toward maximizing return on ad spend (ROAS).",
    details: "Stop burning ad budgets on impressions that don't convert. We architect disciplined bidding experiments, creative fatigue rotations, and audience exclusions that steadily compress your cost-per-lead.",
    features: [
      "Precision audience segmentation and algorithmic bidding strategies",
      "Continuous creative multivariant testing (hooks, angles, formats)",
      "Server-side conversion tracking (Meta CAPI, Google Enhanced Conversions)",
      "High-intent retargeting sequences across cross-device footprints",
      "Dedicated unit-economic reporting focused on ROAS and blended CAC",
      "Rapid budget allocation scaling to high-performing creative winners",
    ],
    photo: "/photos/1531482615713-2afd69097998-1600.webp",
  },
  {
    id: "17ae6201-5c37-4ca8-a3de-eaf67909f92f",
    name: "Social Media Management",
    category: "Marketing",
    description: "Organic community cultivation, strategic calendar pacing, and short-form video design that build loyal brand equity.",
    details: "Social media is modern proof of life. We design, produce, and manage consistent editorial programming across platforms, building authentic affinity that warms up prospects before sales conversations even start.",
    features: [
      "Strategic monthly content calendars aligned with business milestones",
      "Bespoke static and motion graphics optimized per platform guidelines",
      "Hook-driven short-form reels, stories, and carousel copywriting",
      "Active inbox monitoring, community response, and sentiment analysis",
      "Influencer collaboration outreach and co-branded activations",
      "Monthly virality, reach, and organic follower growth retrospectives",
    ],
    photo: "/photos/1521737604893-d14cc237f11d-1600.webp",
  },
  {
    id: "36d50898-71be-4d4f-b492-fed78b564422",
    name: "GMB Management",
    category: "Marketing",
    description: "Dominate high-intent local search and Google Maps packs to capture nearby customers at the exact moment they need you.",
    details: "For businesses with physical presence or local footprints, Google Business Profile is the primary conversion gate. We ensure you own the local pack with optimized keywords, high-definition imagery, and proactive review generation.",
    features: [
      "Complete GMB profile verification, category, and keyword optimization",
      "Weekly strategic geo-tagged photo uploads and localized update posts",
      "Systematic 5-star review acquisition strategies and reputation handling",
      "Local citation consistency and NAP (Name, Address, Phone) synchronization",
      "Direct messaging response setup and automated FAQ answers",
      "Local search visibility heatmaps and call/direction click analytics",
    ],
    photo: "/photos/1524661135-423995f22d0b-1600.webp",
  },
  {
    id: "6a0b2bd9-4bbd-4195-a7f3-55d7b530feca",
    name: "Graphic Designing",
    category: "Creative",
    description: "Distinctive visual identities, design design systems, and marketing collateral engineered for instant brand recall.",
    details: "First impressions take milliseconds. We forge unified visual design languages — from logos and packaging to enterprise pitch decks — ensuring your brand looks authoritative and memorable across every medium.",
    features: [
      "Complete corporate brand identity systems and typography guidelines",
      "High-impact marketing collateral, digital ads, and pitch presentations",
      "Product packaging, unboxing experiences, and industrial print assets",
      "Vector illustration, iconography libraries, and UI component sets",
      "Physical event signage, exhibition booth graphics, and trade collateral",
      "Exhaustive brand manuals documenting color spaces, clear zones, and dos/don'ts",
    ],
    photo: "/photos/1558655146-9f40138edfeb-1600.webp",
  },
  {
    id: "163d862d-e607-4ee1-be67-b8fa0ebfe59b",
    name: "Video Editing",
    category: "Creative",
    description: "High-retention cinematic editing, 3D motion graphics, and vertical storytelling engineered for maximum watch time.",
    details: "Video rules modern media algorithms. Our editors combine aggressive pacing, immersive sound design, and custom motion graphics to hold viewer attention throughout the full narrative arc.",
    features: [
      "Viral vertical short-form editing for Reels, YouTube Shorts, and TikTok",
      "Long-form documentary, educational, and corporate brand films",
      "Kinetic typography, motion graphics, and lower-third animations",
      "Studio-grade audio mastering, noise removal, and SFX soundscapes",
      "Color grading matched to your brand's cinematic palette",
      "Multi-platform aspect ratio deliverables (9:16, 16:9, 1:1, 4:5)",
    ],
    photo: "/photos/1498050108023-c5249f4df085-1600.webp",
  },
  {
    id: "7f4858a4-a022-4838-a0a1-15d8cabc2067",
    name: "Content Creation",
    category: "Creative",
    description: "Authoritative editorial writing, video scripts, and conversion copywriting crafted to establish industry leadership.",
    details: "High-quality, insightful content educates buyers, accelerates sales cycles, and earns permanent search engine authority. We research and write deep-dive thought leadership that establishes your business as the definitive expert.",
    features: [
      "In-depth technical whitepapers, case studies, and industry guides",
      "Conversion-focused landing page copy and sales email sequences",
      "Long-form SEO blog publications answering buyer intent queries",
      "Hook-driven video scripting for YouTube and executive LinkedIn posts",
      "Microcopy for UX, product onboarding, and transactional flows",
      "Tone-of-voice stylebooks ensuring consistent brand authority",
    ],
    photo: "/photos/1454165804606-c3d57bc86b40-1600.webp",
  },
];

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: "0c3809ee-eaaf-4a63-9058-98657478be20",
    title: "AI & Automation for Small Businesses: Where to Start in 2026",
    excerpt: "You don't need a data science team to benefit from AI. Here is a practical, low-risk way for small and mid-sized businesses to start automating — and what to avoid.",
    content: "Most business owners we meet are not asking 'should we use AI?' any more. They are asking 'where do we even start without wasting money?' That is the right question.\n\nThe good news: the first wins from AI and automation are rarely glamorous. They come from removing the repetitive work your team already hates doing.\n\n### Start with the boring work\n\nLook for tasks that are frequent, rule-based and done on a computer. Common examples:\n\n- Copying enquiry details from WhatsApp, email or website forms into a spreadsheet or CRM\n- Sending the same follow-up messages to every new lead\n- Preparing daily or weekly sales and stock reports by hand\n- Answering the same ten customer questions again and again\n- Creating invoices, quotations and reminders from existing data\n\nIf a task follows the same steps every time, it can usually be automated. If it needs judgement, AI can often prepare a first draft for a human to approve.\n\n### Automation first, AI second\n\nA lot of what gets sold as 'AI' is really plain automation: when X happens, do Y. That is not a criticism — plain automation is cheaper, more predictable and easier to trust.\n\nUse AI where the input is messy and human: reading emails, summarising calls, classifying enquiries, drafting replies or pulling key details out of documents. Use simple automation to move that information to the right place once it is structured.\n\n### A realistic first project\n\nPick one process, measure it and automate it end to end. For example:\n\n- Every website or WhatsApp enquiry is captured automatically in your CRM\n- An AI assistant tags it by service and urgency\n- The right salesperson gets notified instantly\n- The customer receives a personalised acknowledgement within minutes\n\nThis single flow usually saves hours per week and, more importantly, stops leads from slipping through the cracks.",
    author: "AWL Research Team",
    coverImage: "/photos/1677442136019-21780ecad995-1600.webp",
    category: "Technology & AI",
    createdAt: "September 21, 2026",
    readTime: "5 min read",
  },
  {
    id: "b44c8ccb-b52b-44c5-966c-8292906d14c5",
    title: "Branding Is More Than a Logo: Building a Brand People Remember",
    excerpt: "A logo is just the signature. Real branding is the promise, the voice and the experience customers get every time they meet your business — here is how to build it.",
    content: "Many businesses think branding is finished once they have a logo and a colour. Then they wonder why customers still compare them only on price.\n\nA logo is your signature. Your brand is what people say about you when you are not in the room.\n\n### What a brand actually is\n\nA strong brand is the combination of four things:\n\n- A clear promise: what you do better than anyone else, for whom\n- A consistent identity: logo, colours, fonts and imagery used the same way everywhere\n- A recognisable voice: how you write and speak — formal, friendly, bold, expert\n- The experience: how it actually feels to enquire, buy, get support and come back\n\nIf any one of these is inconsistent, customers notice — even if they cannot explain why.\n\n### Start with positioning, not design\n\nBefore choosing colours, answer three questions honestly:\n\n- Who exactly is our ideal customer?\n- What problem do we solve for them better than the alternatives?\n- Why should they believe us?\n\nThe answers become your positioning statement. Every design and marketing decision after that should support it.",
    author: "AWL Brand Studio",
    coverImage: "/photos/1558655146-9f40138edfeb-1600.webp",
    category: "Brand Strategy",
    createdAt: "September 14, 2026",
    readTime: "4 min read",
  },
  {
    id: "28f19b6b-fcd3-46a9-b9d4-f72502770a37",
    title: "Does Your Business Need an ERP? 7 Signs It's Time",
    excerpt: "Spreadsheets work — until they don't. Here are seven clear signs your business has outgrown manual systems, and how to approach an ERP without the usual pain.",
    content: "Almost every growing business runs on spreadsheets at first. That is perfectly fine — until the spreadsheets start running the business.\n\nAn ERP (Enterprise Resource Planning) system brings inventory, purchases, sales, accounts, HR and reporting into one connected place. Here is how to know when it is time.\n\n### 7 signs you have outgrown spreadsheets\n\n- Different teams keep different versions of the same data, and nobody is sure which is correct\n- You find out about low stock only when a customer order cannot be fulfilled\n- Month-end reporting takes days of copying, pasting and checking\n- The same information is typed into multiple systems\n- You cannot see real-time profitability by product, branch or customer\n- Growth means hiring more people just to handle paperwork\n- Only one or two people understand how the files work — and everyone depends on them\n\nIf three or more of these sound familiar, an ERP will likely pay for itself.",
    author: "AWL Enterprise Engineering",
    coverImage: "/photos/1551288049-bebda4e38f71-1600.webp",
    category: "Enterprise Systems",
    createdAt: "September 07, 2026",
    readTime: "6 min read",
  },
  {
    id: "c5136d9d-aed5-4ed9-88e5-ea2e428a9412",
    title: "CRM Basics: Stop Losing Leads and Start Closing More Deals",
    excerpt: "If your leads live in WhatsApp chats, notebooks and memory, you are losing sales. A CRM fixes that — here is what it does and how to adopt it successfully.",
    content: "Ask any growing business where its leads are, and the honest answer is often: 'Some in WhatsApp, some in email, some in a register, and the rest in the sales team's heads.'\n\nThat is how good opportunities quietly disappear. A CRM (Customer Relationship Management) system fixes it.\n\n### What a CRM actually does\n\n- Captures every lead from your website, social media, calls and WhatsApp in one place\n- Shows each lead's stage — new, contacted, proposal sent, won or lost\n- Reminds your team exactly when to follow up\n- Keeps a full history of every conversation with a customer\n- Shows which sources and campaigns bring in paying customers\n\n### Follow-up is where the money is\n\nMany sales are lost not because the customer said no, but because nobody followed up at the right time. A CRM makes follow-ups automatic and visible, so nothing depends on memory.",
    author: "AWL Revenue Operations",
    coverImage: "/photos/1600880292203-757bb62b4baf-1600.webp",
    category: "Sales & CRM",
    createdAt: "August 31, 2026",
    readTime: "4 min read",
  },
  {
    id: "592e5df3-d52d-4bbe-9545-173b441ed30d",
    title: "Digital Marketing That Actually Grows Your Business: A Practical Guide",
    excerpt: "Likes and followers don't pay the bills. Here is how to build a digital marketing system focused on leads and sales — SEO, ads, social and the metrics that matter.",
    content: "Many businesses 'do digital marketing' — they post on social media, maybe boost a few posts — but cannot say what it brings in. Good digital marketing is not about being everywhere. It is about a system that turns attention into customers.\n\n### Start with the goal, not the platform\n\nDecide what success means: enquiries, store visits, online sales or bookings. Then choose channels that serve that goal. Followers and likes are only useful if they lead to one of those outcomes.\n\n### The core building blocks\n\n- A fast, mobile-friendly website with clear calls to action\n- SEO, so people searching for your service can find you on Google\n- A Google Business Profile, essential for local businesses\n- Paid ads on Google and Meta for predictable, targeted reach\n- Social media content that builds trust and shows real work\n- Email or WhatsApp follow-ups to convert interested people into customers",
    author: "AWL Growth Team",
    coverImage: "/photos/1460925895917-afdab827c52f-1600.webp",
    category: "Performance Marketing",
    createdAt: "August 24, 2026",
    readTime: "5 min read",
  },
  {
    id: "8c3649f6-34ac-44b8-b17d-e8adc7c29a3c",
    title: "Why Every Training Business Needs an LMS",
    excerpt: "Coaching institutes, trainers and companies are moving learning online. Here is what a Learning Management System does and how to choose one that learners actually use.",
    content: "Whether you run a coaching institute, sell online courses or train your own employees, managing learning over WhatsApp groups, shared drives and spreadsheets gets messy fast. A Learning Management System (LMS) brings it all together.\n\n### What an LMS does\n\n- Hosts your courses: videos, notes, quizzes and assignments in one place\n- Lets learners study at their own pace, on any device\n- Tracks progress, scores and completion automatically\n- Issues certificates when requirements are met\n- Handles enrolments, batches and payments\n\n### Benefits for training businesses\n\nAn LMS lets you teach more learners without adding more staff. Recorded content can be sold again and again, live batches can be supplemented with self-paced material, and progress tracking shows exactly where learners struggle.",
    author: "AWL EdTech Lab",
    coverImage: "/photos/1522202176988-66273c2fd55f-1600.webp",
    category: "EdTech & LMS",
    createdAt: "August 17, 2026",
    readTime: "5 min read",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "d5f3e112-9f56-4e40-9230-2d6a908b0a8b",
    question: "What services does AWL Metaverse offer?",
    answer: "We help businesses grow with state-of-the-art technology: AI & workflow automation, custom ERP, CRM, and LMS platforms, full-funnel digital and performance marketing (SEO, Meta & Google ads), branding, creative content, and high-performance website and mobile application engineering.",
  },
  {
    id: "38204209-f87a-44d1-a70d-7f0c004c9f9d",
    question: "Do you work with small businesses and startups?",
    answer: "Yes, absolutely. Many of our core clients are ambitious small and growing enterprises, local brands, and agile tech startups. We structure every sprint around your exact stage and operational budget, frequently initiating work on high-ROI bottleneck workflows before scaling broader systems.",
  },
  {
    id: "78e316fc-f8e7-4129-a55c-d630e248bfae",
    question: "How much does a project cost?",
    answer: "Costs are strictly scoped to technical requirements and scale. A custom high-availability ERP differs significantly from an agile web presence or a performance ad retainer. Share your requirements through our form, and we deliver transparent, milestone-gated proposals with no hidden charges.",
  },
  {
    id: "052b9dc4-971e-4f0c-be19-cb74e7c9ea46",
    question: "How long does it take to build a website or software?",
    answer: "A dedicated business website typically ships in 2–3 weeks, whereas custom ERP, CRM, or autonomous AI systems span 4–10 weeks depending on custom modules and legacy database integrations. We deliver granular milestone schedules before kickoff.",
  },
  {
    id: "c938a67b-b8e5-4001-bc90-857dd13f53e5",
    question: "Can you build a custom ERP, CRM or LMS for my business?",
    answer: "Yes. We engineer customized internal software that mirrors your real operating logic — covering multi-warehouse inventory, accounting, sales pipelines, learner milestones, and live reporting — with frictionless integrations into WhatsApp, payment gateways, and external APIs.",
  },
  {
    id: "7d1bd008-e64b-4d3b-86b5-411568e5141a",
    question: "How can AI and automation help my business?",
    answer: "AI and deterministic automation eliminate repetitive human friction — such as manual lead reconciliation, invoice extraction, follow-up notifications, and Tier-1 customer inquiries. We usually automate one high-impact workflow first so you realize measurable ROI immediately.",
  },
  {
    id: "60e2b58b-185f-4b99-b569-e3d8b23d3324",
    question: "Do you provide support after the project is delivered?",
    answer: "Yes. Every client receives dedicated warranty coverage followed by optional continuous maintenance, cloud infrastructure monitoring, database backups, and feature enhancement retainers.",
  },
  {
    id: "1d86c529-1e00-4621-b6e8-d621cb2fbed2",
    question: "Where are you located, and do you work with clients outside your city?",
    answer: "We operate primary offices in Jind (Haryana) and Sector 34-A, Chandigarh, while serving forward-thinking clients across India and globally through secure remote collaboration and regular video sprints.",
  },
  {
    id: "e8c5b586-3139-4d2f-87dc-2fded03a04bc",
    question: "How do I get started?",
    answer: "Submit your inquiry via our 'Let's Talk' form, email us directly at awlmeta.info@gmail.com, or call +91 70420 49818. Our engineering leads will review your goals and schedule an initial discovery call within 24 hours.",
  },
];

export const CAREERS_DATA: CareerItem[] = [
  {
    id: "ai-engineer",
    title: "Senior AI / ML Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Chandigarh / Hybrid",
    experience: "2–4 Years",
    description: "Architect and deploy autonomous agent frameworks, multimodal document processing pipelines, and enterprise LLM integrations for mission-critical client workloads.",
    requirements: [
      "Proficiency in Python, LangChain/LlamaIndex, OpenAI/Anthropic APIs, and vector databases",
      "Experience deploying containerized inference servers and orchestrating fine-tuned models",
      "Solid background in prompt optimization and deterministic schema output validation",
    ],
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Next.js & Node Developer",
    department: "Engineering",
    type: "Full-Time",
    location: "Jind / Chandigarh",
    experience: "1–3 Years",
    description: "Build ultra-responsive Next.js frontends and robust REST/GraphQL APIs for internal ERP, LMS, and client web applications.",
    requirements: [
      "Mastery of Next.js (App Router), TypeScript, Tailwind CSS, and React Server Components",
      "Strong database knowledge (PostgreSQL, Prisma, Supabase/Firebase)",
      "Obsession with 60fps animations, mobile optimization, and Core Web Vitals",
    ],
  },
  {
    id: "performance-marketer",
    title: "Performance Marketing Lead",
    department: "Growth",
    type: "Full-Time",
    location: "Chandigarh / Remote",
    experience: "2+ Years",
    description: "Drive high-volume lead generation and customer acquisition across Meta Ads, Google Ads, and programmatic networks with strict ROAS discipline.",
    requirements: [
      "Track record managing substantial monthly budgets on Google Ads & Meta CAPI",
      "Deep understanding of landing page split-testing, funnel analytics, and attribution",
      "Proficiency with Google Analytics 4, Tag Manager, and cohort retention models",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "Lead UI / UX & Brand Designer",
    department: "Creative",
    type: "Full-Time",
    location: "Chandigarh / Hybrid",
    experience: "2+ Years",
    description: "Create premium, dark-mode first digital experiences, interactive design systems, and unforgettable visual identities for modern tech brands.",
    requirements: [
      "Expertise in Figma, design tokens, micro-interactions, and component libraries",
      "Demonstrated ability to craft distinctive, modern typography and dark aesthetic layouts",
      "Understanding of web implementation constraints to collaborate closely with developers",
    ],
  },
  {
    id: "ai-intern",
    title: "AI & Full-Stack Engineering Intern",
    department: "Talent Program",
    type: "Internship (3–6 Months)",
    location: "Jind / Chandigarh",
    experience: "Fresher / Final Year",
    description: "Work on live client deployments from day one under direct mentorship from our senior engineering team, with direct path to full-time roles upon completion.",
    requirements: [
      "Demonstrated projects in Python, JavaScript/TypeScript, or web frameworks",
      "Hunger to solve hard technical problems and learn modern production stacks quickly",
      "Strong communication and collaborative problem-solving mindset",
    ],
  },
];
