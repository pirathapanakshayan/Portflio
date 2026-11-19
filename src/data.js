// ===== All website content lives here — edit this file to update the site =====

// Builds a correct URL for files in /public (works on GitHub Pages sub-paths)
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')

export const profile = {
  name: 'PIRATHAPAN',
  surname: 'AKSHAYAN',
  role: 'Freelance Software Developer',
  email: 'pirathapanakshayan@gmail.com',
  github: 'https://github.com/pirathapanakshayan',
  githubUser: 'pirathapanakshayan',
  linkedin: 'https://www.linkedin.com/in/pirathapanakshayan',
  cv: asset('cv.pdf'), // replace /public/cv.pdf to update the CV
  typing: [
    'Freelance Software Developer',
    'Desktop · Web · Data Solutions',
    'Learning AI & Cybersecurity',
    'Turning ideas into working software',
  ],
  tagline:
    "I'm a freelance software developer building desktop apps, websites and data tools with C#, Java, Python and SQL — now leveling up into AI-powered and secure solutions.",
}

export const about = {
  paragraphs: [
    "Hi, I'm Pirathapan — a freelance software developer from Sri Lanka with an HND in Software Engineering from ESOFT UNI.",
    'I help clients and students turn ideas into working software: management systems, data analysis tools, websites and database solutions. Every project is built with clean code, proper documentation and on-time delivery.',
    "I'm now stepping into a BSc (Hons) in Artificial Intelligence (Kingston University) and training in cybersecurity, so I can offer smarter, AI-powered and more secure solutions to my clients.",
  ],
  info: [
    ['NAME', 'PIRATHAPAN AKSHAYAN'],
    ['ROLE', 'FREELANCE SOFTWARE DEVELOPER'],
    ['FOCUS', 'AI · CYBERSECURITY'],
    ['BASE', 'SRI LANKA · WORKS REMOTELY'],
    ['STATUS', 'AVAILABLE FOR PROJECTS'],
  ],
}

export const services = [
  { icon: 'desktop', title: 'Desktop Applications', text: 'Custom management systems built with C# and SQL Server — inventory, orders, members and billing, with secure login and a clean UI.' },
  { icon: 'web', title: 'Websites & Web Apps', text: 'Responsive websites, portfolios and e-commerce stores built with HTML, CSS, JavaScript and React.' },
  { icon: 'data', title: 'Data Analysis & Automation', text: 'Python tools that clean data, generate reports and charts, and automate repetitive tasks.' },
  { icon: 'db', title: 'Database Design', text: 'Well-structured SQL databases with ER diagrams and queries that are easy to manage and scale.' },
  { icon: 'uml', title: 'System Design & Docs', text: 'UML and ER diagrams plus clear technical documentation for projects and assignments.' },
  { icon: 'ai', title: 'AI Solutions', text: 'Chatbots, recommendation systems and AI-powered features for your business.', soon: true },
]

export const skills = {
  core: [
    { name: 'Java', icon: 'java' },
    { name: 'Python', icon: 'python' },
    { name: 'C#', icon: 'csharp' },
    { name: 'SQL', icon: 'sql' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Git & GitHub', icon: 'git' },
  ],
  concepts: ['OOP', 'SOLID', 'Design Patterns', 'Data Structures & Algorithms', 'Unit Testing', 'UML / ER Diagrams', 'Pandas', 'Matplotlib', 'SQL Server', 'WinForms'],
  learning: [
    { name: 'AI / Machine Learning', note: 'Python basics → agentic AI' },
    { name: 'Cybersecurity', note: 'hands-on with pwn.college' },
    { name: 'Linux', note: 'command line & internals' },
    { name: 'C', note: 'low-level & memory' },
    { name: 'Bash', note: 'scripting & automation' },
  ],
}

export const projects = [
  {
    title: 'Dream Book Shop',
    kind: 'Data Analysis System',
    tags: ['Python', 'Pandas', 'Matplotlib', 'pytest'],
    filter: 'Python',
    image: asset('img/book-publication-trends.webp'),
    text: 'CLI app that loads, validates and cleans ~3,900 books, then delivers six analyses with tables and charts. Built with OOP, SOLID and the Strategy, Factory and Template Method patterns — covered by 22 automated tests.',
    repo: 'https://github.com/pirathapanakshayan/Dream_Book_Shop',
    featured: true,
  },
  {
    title: 'Doctor Channelling System',
    kind: 'Data Structures & Algorithms',
    tags: ['Java', 'DSA', 'CLI'],
    filter: 'Java',
    icon: 'health',
    text: 'Register patients and doctors, search by specialization, and book, cancel or reschedule appointments. A FIFO queue waiting list auto-books the next patient when a slot frees up.',
    repo: 'https://github.com/pirathapanakshayan/Doctor-Channelling-System',
  },
  {
    title: 'Food Hub',
    kind: 'Delivery Management System',
    tags: ['C#', 'WinForms', 'SQL Server'],
    filter: 'C#',
    icon: 'food',
    text: 'Desktop system for a food delivery company — customers, addresses, menu items, ingredients, orders, riders and motorbikes, with role-based login and full CRUD.',
    repo: 'https://github.com/pirathapanakshayan/Food-Hub',
  },
  {
    title: 'Kick Blast Judo',
    kind: 'Club Management System',
    tags: ['C#', 'WinForms', 'SQL Server'],
    filter: 'C#',
    icon: 'judo',
    text: 'Judo club manager for athletes, trainers, coaching and competitions, with sign-up & login, automatic BMI calculation and weight-category tracking.',
    repo: 'https://github.com/pirathapanakshayan/KickBlast-Judo',
  },
  {
    title: 'Velvet Vogue',
    kind: 'E-commerce Store',
    tags: ['Web', 'SQL', 'In progress'],
    filter: 'Web',
    icon: 'shop',
    text: 'A fashion e-commerce store with a product catalogue and a database-driven backend. Currently in development.',
    repo: null,
  },
  {
    title: 'AI Learn',
    kind: '23-week AI Journey',
    tags: ['Python', 'AI', 'Ongoing'],
    filter: 'Python',
    icon: 'ai',
    text: 'My 23-week AI learning journey — from Python basics to agentic AI — documented step by step.',
    repo: 'https://github.com/pirathapanakshayan/Ai-learn',
  },
]

export const processSteps = [
  ['DISCUSS', 'Understand your idea, needs and budget'],
  ['PLAN', 'Clear scope, timeline and design'],
  ['BUILD', 'Development with regular progress updates'],
  ['TEST', 'Bug-free, tested and documented'],
  ['DELIVER', 'Source code, setup guide and support'],
]

export const whyMe = [
  ['On-time delivery', 'with regular progress updates'],
  ['Clean, documented code', 'that you can understand and extend'],
  ['Clear communication', 'quick replies and plain explanations'],
  ['Support after delivery', 'for fixes and small changes'],
  ['Affordable rates', 'for students and small businesses'],
]

export const timeline = [
  {
    period: '2025 FEB → 2026 SEP',
    status: 'COMPLETED',
    title: 'HND in Software Engineering',
    place: 'ESOFT UNI',
    text: 'Built desktop, data and console applications with C#, Java, Python and SQL.',
  },
  {
    period: '2026 → NOW',
    status: 'ACTIVE',
    title: 'Freelancing + AI & Cyber self-learning',
    place: 'Remote · pwn.college · Ai-learn',
    text: 'Delivering client projects while following a 23-week AI journey and hands-on security training.',
  },
  {
    period: '2027 FEB → 2028 FEB',
    status: 'UPCOMING',
    title: 'BSc (Hons) in Artificial Intelligence',
    place: 'Kingston University (UK) · via ESOFT UNI',
    text: 'Machine learning, intelligent systems and applied AI.',
  },
]
