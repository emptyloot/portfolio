export const projects = [
  {
    title: "Númenor Freight Division",
    role: "Full-Stack Developer",
    tech: ["React", "Firebase", "Google Pub/Sub", "Discord API", "CI/CD"],
    description: "Architected a serverless logistics platform using React and Firebase. Implemented a robust CI/CD pipeline via GitHub Actions for automated deployment. Key feature was a custom Discord bot powered by Google Pub/Sub with automatic retries for reliable notifications.",
    link: "https://numenor-freight-division.web.app/",
    github: "https://github.com/emptyloot/numenor-freight-division",
  },
  {
    title: "ReturnPal",
    role: "Backend Architect & Team Lead",
    tech: ["AWS EC2", "DynamoDB", "CloudFormation", "Kotlin", "Stripe API"],
    description: "A full-stack Android application for retail returns. Co-architected the AWS backend (DynamoDB/IaC) and integrated the Stripe API to handle secure payment tokenization. Led the team's Agile process and built the CI/CD pipeline (AWS Amplify/GitHub Actions) for reliable deployment.",
    link: "",
    github: "https://github.com/BC-CS481-Capstone/ReturnPalsApp",
  },
  {
    title: "Android Dev Workshop",
    role: "Curriculum Lead & Co-Author",
    tech: ["Kotlin", "Jetpack Compose", "Technical Enablement"],
    description: "Designed and led a comprehensive 'Zero to Hero' technical workshop. Authored documentation including environment setup guides and progressive code challenges. Built a 'golden standard' demo application to demonstrate modern mobile architecture.",
    link: "",
    github: "https://github.com/BC-CS481-Capstone/Workshop",
  }
];

export const aboutData = {
  bio: "My journey didn't start with code—it started with a multimeter. For over a decade, I specialized in hardware diagnostics, helping industrial operators resolve complex failures in mission-critical systems. This taught me that software must be designed for reliability and process efficiency.",
  bio2: "Now, as a Computer Science graduate (Magna Cum Laude), I leverage that operational mindset to build full-stack applications. I drive efficiency via DevOps and CI/CD, focusing on code that is testable, easily deployable, and fundamentally resilient.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Bellevue College",
    year: "June 2024",
    honor: "Magna Cum Laude",
  },
  skills: [
    "Python", "Java / Kotlin", "JavaScript / TypeScript", "React", 
    "AWS (EC2, S3, DynamoDB)", "SQL / NoSQL", "CI/CD (GitHub Actions)", 
    "Stripe API", "Root Cause Analysis", "Technical Mentorship"
  ]
};

export const heroData = {
  headline: "Driving Efficiency via DevOps and Operational Mastery",
  subheadline: "CS Graduate with 10+ years technical tenure. I combine deep Root Cause Analysis with full-stack architecture to build resilient, standardized systems.",
  location: "Bellevue, WA",
};

export const diagnostics = [
  {
    title: "Process Architecture",
    stat: "75% Reduction",
    context: "in diagnostic turnaround",
    detail: "Engineered formal testing protocols at Practec LLC that directly reduced diagnostic turnaround time by 75% (Process Architecture/DevOps Mindset)."
  },
  {
    title: "High-Efficiency Output",
    stat: "Top Tier Ratios",
    context: "despite part-time status",
    detail: "Consistently achieved high repair-to-hour ratios, often outperforming full-time peers in efficiency and maximizing revenue generation."
  },
  {
    title: "Technical Mentorship",
    stat: "Onboarding Lead",
    context: "for new technicians",
    detail: "Designed the formal onboarding curriculum (Practec) and provided ad-hoc coaching (Radwell) to accelerate new staff proficiency."
  }
];