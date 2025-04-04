import { link } from "fs";
import { title } from "process";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    area: "md:[grid-area:1/1/2/7]",
    icon: "",
    title: "Building fast and interactive website",
    description: "Using ReactJS, Next.js, and Express.js and Laravel framework to create modern, efficient and responsive websites.",
  },
  {
    id: 2,
    area: "md:[grid-area:1/7/2/13]",
    icon: "",
    title: "Developing AI for Image Captioning",
    description: "Applying Deep Learning and Vision Transformers to generate automatic descriptions from images.",
  },
  {
    id: 3,
    area: "md:[grid-area:2/1/3/7]",
    icon: "",
    title: "Data Analysis for Deep Insights",
    description: "Using Python (Pandas, Matplotlib, Seaborn) to explore patterns and trends from data.",
  },
  {
    id: 4,
    area: "md:[grid-area:2/7/3/13]",
    icon: "",
    title: "Active in Organizations & Social Activities",
    description: "Contributing to technology, social, and leadership communities for self-development and society.",
  },

  {
    id: 5,
    area: "md:[grid-area:3/1/4/13]",
    icon: "",
    title: "Exploring New Technologies: AI & Data Science",
    description: "Learning TensorFlow, PyTorch, and LLM (Large Language Models) for further research and development.",
  },
  {
    id: 6,
    area: "md:[grid-area:4/1/5/13]",
    icon: "",
    title: "Exploring Nature & Seeking New Inspiration",
    description: "Adventuring to new places to refresh your mind and gain new insights.",
  },
];

export const projects = [
  {
    id: 1,
    title: "MyITS Mentoring",
    des: "Information Management system for mentoring program at my campus, using Modular Laravel Framework.",
    img: "/pmentoring.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/mentoring.its.ac.id",
  },
  {
    id: 2,
    title: "MyITS Mentoring",
    des: "Information Management system for mentoring program at my campus, using Modular Laravel Framework.",
    img: "/pmentoring.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/mentoring.its.ac.id",
  },
  {
    id: 3,
    title: "MyITS Mentoring",
    des: "Information Management system for mentoring program at my campus, using Modular Laravel Framework.",
    img: "/pmentoring.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/mentoring.its.ac.id",
  },
  {
    id: 4,
    title: "MyITS Mentoring",
    des: "Information Management system for mentoring program at my campus, using Modular Laravel Framework.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/mentoring.its.ac.id",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Website Developer Intern",
    desc: "Contribute to the development of web-based platforms using ReactJS & Next.js to improve performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 2,
    title: "AI & Image Captioning Researcher",
    desc: "Research and develop Deep Learning models for image description automation using TensorFlow & PyTorch.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "",
  },
  {
    id: 3,
    title: "Freelance Data Analyst",
    desc: "Analyze large datasets using Python (Pandas, Matplotlib, Seaborn) to find patterns and valuable business insights.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "",
  },
  {
    id: 4,
    title: "Tech Community & Social Enthusiast",
    desc: "Active in technology, social, and leadership communities, organizing events and sharing insights about the world of IT and AI.",
    className: "md:col-span-2",
    thumbnail: "",
  },
];

export const organizationExperience = [
  {
    id: 1,
    title: "Unit Kegiatan Mahasiswa (UKM) Rebana ITS",
    desc: "UKM that preserves traditional and modern rebana music and sholawat with various genres in the ITS campus environment.",
    className: "md:col-span-2",
    thumbnail: "",
  },
  {
    id: 2,
    title: "Jamaah Masjid Manarul Ilmi (JMMI) ITS",
    desc: "A student organization that is active in preaching, Islamic studies, and mosque-based social activities at ITS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "",
  },
  {
    id: 3,
    title: "Pergerakan Mahasiswa Islam Indonesia (PMII) ITS",
    desc: "An Islamic youth organization engaged in preaching, social, and student advocacy in the ITS environment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "",
  },
  {
    id: 4,
    title: "Sekolah Rakjat PMII ITS",
    desc: "A volunteer education program that focuses on teaching and empowering communities with PMII ITS students.",
    className: "md:col-span-2",
    thumbnail: "",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Anas was amazing! He’s super professional, always on time, and truly dedicated to delivering great results. His passion for every part of development really shines through. If you want to level up your website and brand, Anas is the perfect person to team up with!",
    name: "Anas Azhar",
    title: "Civilian",
    img: "/anas.png",
  },
  {
    quote:
      "Working with Anas was amazing! He’s super professional, always on time, and truly dedicated to delivering great results. His passion for every part of development really shines through. If you want to level up your website and brand, Anas is the perfect person to team up with!",
    name: "Anas Azhar",
    title: "Civilian",
    img: "/anas.png",
  },
  {
    quote:
      "Working with Anas was amazing! He’s super professional, always on time, and truly dedicated to delivering great results. His passion for every part of development really shines through. If you want to level up your website and brand, Anas is the perfect person to team up with!",
    name: "Anas Azhar",
    title: "Civilian",
    img: "/anas.png",
  },
  {
    quote:
      "Working with Anas was amazing! He’s super professional, always on time, and truly dedicated to delivering great results. His passion for every part of development really shines through. If you want to level up your website and brand, Anas is the perfect person to team up with!",
    name: "Anas Azhar",
    title: "Civilian",
    img: "/anas.png",
  },
  {
    quote:
      "Working with Anas was amazing! He’s super professional, always on time, and truly dedicated to delivering great results. His passion for every part of development really shines through. If you want to level up your website and brand, Anas is the perfect person to team up with!",
    name: "Anas Azhar",
    title: "Civilian",
    img: "/anas.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/azharanas17",
  },
  {
    id: 2,
    img: "/insta.svg",
    href: "https://instagram.com/azharanas_17",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://linkedin.com/anas-azhar"
  },
];
