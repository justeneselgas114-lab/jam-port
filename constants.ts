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
    title: 'BigBoss Buffet | Eat All You Can Restaurant',
    description: 'BigBoss Buffet’s website is a clean, modern web presence for the popular all-you-can-eat buffet restaurant located in Panabo City, Davao Region, Philippines. It showcases the brand’s unlimited dining experience, highlighting its abundant food offerings, value-for-money pricing, and vibrant buffet atmosphere. The site effectively introduces users to the restaurant’s concept, menu variety, and welcoming environment, encouraging visitors to explore and dine at the buffet.',
    stack: ['Supabase', 'Tailwind', 'PostgreSQL'],
    purpose: 'The purpose of this website is to provide clear information about BigBoss Buffet, show what the restaurant offers, and help customers understand the buffet experience before visiting. It serves as an online presence where people can learn about the food, pricing concept, and location of the restaurant.',
    githubUrl: 'https://bigboss-buffet.vercel.app/#/',
    liveUrl: 'https://bigboss-buffet.vercel.app/#/',
    imageUrl: 'https://i.postimg.cc/mg6GZLm8/Screenshot-2025-12-28-233918.png'
  },
  {
    id: '2',
    title: 'IRON FORGE | Premium Elite Performance & Transformation Center',
    description: 'IRON FORGE is a cutting-edge, high-performance fitness sanctuary designed for those who demand excellence from their bodies and minds. The website serves as a digital gateway to a world-class training environment, featuring state-of-the-art facilities, science-backed recovery zones, and elite coaching. Integrating advanced AI assistance through ForgeAI, the platform provides instant, personalized guidance on memberships, training tips, and motivation, ensuring every visitor is equipped to start their transformation journey before they even step foot in the gym.',
    stack: ['Next.js', 'Laravel', 'Stripe', 'Framer Motion'],
    purpose: 'The primary purpose of the IRON FORGE digital platform is to serve as a high-velocity conversion engine that seamlessly transitions prospective athletes into dedicated members through a blend of elite branding and modern technological innovation. By integrating the Gemini-powered ForgeAI assistant, the website provides 24/7 personalized engagement, reducing friction in the sales funnel by answering complex training and membership queries instantaneously. The platform is strategically designed to establish market authority, educating visitors on specialized pillars like Powerlifting and HIIT while leveraging deep social proof and a mobile-first, high-performance interface to build immediate trust. Ultimately, the site exists to project the gym’s premium identity and provide a frictionless gateway for individuals to begin their physical and mental transformation.',
    githubUrl: 'https://github.com/justeneselgas114-lab',
    liveUrl: 'https://iron-forge-gym-wzry.vercel.app/#home',
    imageUrl: 'https://i.postimg.cc/wv80c3y9/Screenshot-2025-12-30-000417.png'
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
