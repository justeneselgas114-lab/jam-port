import { Project, SkillCategory, BlogPost } from './types';

export const HUMAN_TAGLINES = {
  hero: "Built with intention, not noise.",
  about: "Focused on results, not just visuals.",
  projects: "High-converting digital assets.",
  blog: "Insights for thoughtful founders."
};

// CHANGE YOUR HERO IMAGE HERE
export const PROFILE_IMAGE = "https://i.postimg.cc/tRZSP5gh/wmremove_transformed.jpg";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'BigBoss Buffet – All-You-Can-Eat Restaurant Experience',
    description: 'BigBoss Buffet’s website is a clean, modern web presence for the popular all-you-can-eat buffet restaurant located in Panabo City, Davao Region, Philippines. It showcases the brand’s unlimited dining experience, highlighting its abundant food offerings, value-for-money pricing, and vibrant buffet atmosphere. The site effectively introduces users to the restaurant’s concept, menu variety, and welcoming environment, encouraging visitors to explore and dine at the buffet.',
    stack: ['Supabase', 'Tailwind', 'PostgreSQL'],
    purpose: 'The purpose of this website is to provide clear information about BigBoss Buffet, show what the restaurant offers, and help customers understand the buffet experience before visiting. It serves as an online presence where people can learn about the food, pricing concept, and location of the restaurant.',
    githubUrl: 'https://bigboss-buffet.vercel.app/#/',
    liveUrl: 'https://bigboss-buffet.vercel.app/#/',
    imageUrl: 'https://i.postimg.cc/mg6GZLm8/Screenshot-2025-12-28-233918.png'
  },
  {
    id: '2',
    title: 'Strategic Inquiry & Lead Capture Hub',
    description: 'High-converting inquiry system for boutique agencies.',
    stack: ['Next.js', 'Laravel', 'Stripe', 'Framer Motion'],
    purpose: 'Designed to transform passive visitors into active leads through intent-based forms and automated CRM integration for immediate follow-ups.',
    githubUrl: 'https://github.com/justeneselgas114-lab',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Real Estate Inquiry Management',
    description: 'A premium listing and investor inquiry platform.',
    stack: ['Node.js', 'Gemini AI', 'GoHighLevel', 'n8n'],
    purpose: 'Built to showcase high-value properties with AI-powered search filters and a dedicated inquiry system for serious investors.',
    githubUrl: 'https://github.com/justeneselgas114-lab',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Medical Patient Intake Portal',
    description: 'HIPAA-ready patient intake and inquiry system.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    purpose: 'Streamlines patient registration and consultation requests, reducing administrative overhead while ensuring data privacy and fast response times.',
    githubUrl: 'https://github.com/justeneselgas114-lab',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Event Registration & Inquiry Center',
    description: 'Full-cycle ticketing and attendee inquiry platform.',
    stack: ['Next.js', 'Firebase', 'Google Maps API'],
    purpose: 'Provides a robust end-to-end solution for corporate event planners to manage registrations, process payments, and handle attendee inquiries in real-time.',
    githubUrl: 'https://github.com/justeneselgas114-lab',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'E-commerce Conversion Machine',
    description: 'Modern storefront optimized for maximum sales throughput.',
    stack: ['Node.js', 'SQL', 'Cloudinary'],
    purpose: 'A conversion-focused online shop that uses speed and clean UX to drive high-volume sales for local manufacturers moving to international markets.',
    githubUrl: 'https://github.com/justeneselgas114-lab',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React Query', 'Vite', 'Tailwind CSS']
  },
  {
    title: 'Backend & Platforms',
    skills: ['PHP', 'Laravel', 'Python', 'Node.js', 'NPM', 'WordPress']
  },
  {
    title: 'Data & Infrastructure',
    skills: ['Firebase', 'Supabase', 'SQL (PostgreSQL/MySQL)', 'REST APIs']
  },
  {
    title: 'Automation & AI',
    skills: ['GitHub', 'GoHighLevel (GHL)', 'n8n', 'Gemini AI', 'Prompt Engineering', 'AI-Assisted Dev']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why Website Speed is Your Best Salesperson',
    excerpt: 'How sub-second load times directly correlate with higher conversion rates and business trust.',
    date: 'March 15, 2024',
    readTime: '4 min read'
  },
  {
    id: 'b2',
    title: 'AI in Web Development: Beyond the Hype',
    excerpt: 'Using AI to build cleaner, more efficient, and more reliable code for your business projects.',
    date: 'February 28, 2024',
    readTime: '6 min read'
  },
  {
    id: 'b3',
    title: 'The Hidden ROI of Clean UX Design',
    excerpt: 'Why making your website simpler often makes your business more profitable.',
    date: 'February 10, 2024',
    readTime: '5 min read'
  }
];

export const CONTACT_INFO = {
  email: 'justeneselgas2004@gmail.com',
  facebook: 'https://www.facebook.com/Just10AiAutomation',
  linkedin: 'https://www.linkedin.com/in/justene-selgas-152052377/',
  github: 'https://github.com/justeneselgas114-lab'
};
