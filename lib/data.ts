export const projects = [
  {
    title: "Númenor Freight Division",
    role: "Full-Stack Developer",
    tech: ["React", "Firebase", "Google Pub/Sub", "Discord API"],
    description: "Architected a serverless logistics platform to manage freight operations. Key feature was a custom Discord bot powered by Google Pub/Sub that provided real-time notifications to drivers, reducing missed pickups by 40%. Implemented a CI/CD pipeline ensuring zero-downtime deployments.",
    link: "https://numenor-freight-division.web.app/",
    github: "https://github.com/emptyloot/numenor-freight-division",
  },
  {
    title: "ReturnPal",
    role: "Backend Architect",
    tech: ["AWS EC2", "AWS S3", "DynamoDB", "CloudFormation", "Kotlin"],
    description: "A native Android application for processing retail returns. My primary contribution was architecting the AWS backend infrastructure using CloudFormation (IaC). This allowed our team to spin up identical testing and production environments in minutes, eliminating 'it works on my machine' bugs.",
    link: "",
    github: "https://github.com/BC-CS481-Capstone/ReturnPalsApp",
  },
  {
    title: "Android Dev Workshop",
    role: "Lead Instructor",
    tech: ["Kotlin", "Jetpack Compose", "Technical Writing"],
    description: "Designed a comprehensive 'Zero to Hero' curriculum for new hires. Authored 50+ pages of documentation and built a gold-standard demo application. The workshop is now part of the official onboarding process.",
    link: "",
    github: "https://github.com/BC-CS481-Capstone/Workshop",
  }
];

export const aboutData = {
  bio: "My journey didn't start with code—it started with a multimeter. For over a decade, I worked as a Technical Operations Specialist, diagnosing complex hardware failures in mission-critical systems. This experience taught me that software doesn't exist in a vacuum; it lives on physical machines that break.",
  bio2: "Now, as a Computer Science graduate (Magna Cum Laude), I leverage that operational mindset to build full-stack applications. I don't just write code that works; I write code that is testable, deployable, and easier to debug when things go wrong.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Bellevue College",
    year: "June 2024",
    honor: "Magna Cum Laude",
  },
  skills: [
    "JavaScript / TypeScript", "React & Next.js", "AWS (EC2, S3, DynamoDB)", 
    "Python", "Java / Kotlin", "CI/CD (GitHub Actions)", 
    "Root Cause Analysis", "System Integration"
  ]
};

export const heroData = {
  headline: "Bridging the Gap Between Physical Hardware & Software Logic",
  subheadline: "Computer Science Graduate with 10+ years of technical operations experience. I combine deep root cause analysis with modern full-stack engineering to build resilient systems.",
  location: "Bellevue, WA",
};

export const diagnostics = [
  {
    title: "Process Architecture",
    stat: "75% Reduction",
    context: "in diagnostic turnaround",
    detail: "Developed formal testing protocols at Practec LLC that slashed diagnostic times from 4 days to 1 day."
  },
  {
    title: "Standardization",
    stat: "Global SOP",
    context: "adoption post-acquisition",
    detail: "My diagnostic playbooks were adopted as the corporate Standard Operating Procedure (SOP) by Radwell International."
  },
  {
    title: "Remote Diagnostics",
    stat: "100% Uptime",
    context: "for critical systems",
    detail: "Served as primary escalation point for remote hardware triage, resolving safety-critical failures without site visits."
  }
]; 