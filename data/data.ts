import {
  BlogItem,
  FooterItem,
  NavItem,
  ProcessItem,
  ServiceItem,
  StatusItem,
} from "@/types/types";

export const navItems: NavItem[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/",
  },
  {
    id: 3,
    label: "Blog",
    href: "/",
  },
  {
    id: 4,
    label: "Pricing",
    href: "/",
  },
];

export const status: StatusItem[] = [
  {
    id: 1,
    value: "340+",
    label: "Successfull projects",
  },
  {
    id: 2,
    value: "64+",
    label: "Team members",
  },
  {
    id: 3,
    value: "80+",
    label: "Happy Clients",
  },
];

export const servicesItems: ServiceItem[] = [
  {
    id: 1,
    img: "/images/project-1.png",
    title: "Residential design",
  },
  {
    id: 2,
    img: "/images/project-2.png",
    title: "Commercial design",
  },
  {
    id: 3,
    img: "/images/project-3.png",
    title: "Turnkey execution",
  },
  {
    id: 4,
    img: "/images/project-4.png",
    title: "3D wall & floor design",
  },
  {
    id: 5,
    img: "/images/project-5.png",
    title: "Space planning",
  },
];

export const processItems: ProcessItem[] = [
  {
    id: 1,
    title: "planning",
    step: "Step 01",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
  {
    id: 2,
    title: "Estimating",
    step: "Step 02",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
  {
    id: 3,
    title: "Building",
    step: "Step 03",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
  {
    id: 4,
    title: "planning",
    step: "Step 04",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil quia corporis deserunt earum.",
  },
];

export const blogItems: BlogItem[] = [
  {
    id: 1,
    title: "Interior Color Trends Designers Are Betting On for 2026",
    text: "From warm neutrals to bold accent palettes, 2026 is shaping up to be the year designers break the rules and embrace personality-driven interiors.",
    date: "Design • Dec 30, 2025",
  },
  {
    id: 2,
    title: "How Minimal Spaces Are Evolving Into Warmer, Lived-In Homes",
    text: "Minimalism isn’t disappearing  it’s getting softer. Here’s how designers are blending clean layouts with texture, warmth, and human comfort.",
    date: "Interior • Jan 12, 2026",
  },
];

export const footerItems: FooterItem[] = [
  {
    id: 1,
    title: "Services",
    list: [
      "Interior Design",
      "Exterior Architecture",
      "Project Management",
      "General Contracting",
      "Custom Decoration",
      "Space Planning",
    ],
  },
  {
    id: 2,
    title: "Company",
    list: [
      "About Our Studio",
      "Design Process",
      "Our Portfolio",
      "Sustainability",
      "Careers",
      "Contact Us",
    ],
  },
  {
    id: 3,
    title: "Resources",
    list: [
      "Design Blog",
      "Style Guide 2026",
      "Maintenance Tips",
      "FAQs",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
];
