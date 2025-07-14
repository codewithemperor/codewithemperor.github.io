
import {
    Code2,
    GraduationCap,
    Apple,
    Smartphone,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    ExternalLink,
    Paintbrush,
    Laptop,
    Wrench
} from "lucide-react"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import images from "./images";



export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "React Native/Expo", level: 90, color: "bg-blue-600" },
            { name: "HTML5 & CSS3", level: 90, color: "bg-orange-500" },
            { name: "JavaScript (ES6+)/Typescript", level: 93, color: "bg-yellow-400" },
            { name: "Libraries & UI", level: 95, color: "bg-pink-500" },
        ]
    }, 
    {
        title: "Design & Productivity",
        icon: Paintbrush, 
        description: "Designing visual assets and managing content with creative and office tools",
        skills: [
            { name: "Figma", level: 90, color: "bg-purple-500" },
            { name: "Adobe Photoshop", level: 88, color: "bg-blue-700" },
            { name: "CorelDRAW", level: 80, color: "bg-green-700" },
            { name: "Adobe Illustrator", level: 75, color: "bg-orange-600" },
            { name: "Microsoft Office", level: 95, color: "bg-blue-500" },
        ]
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            {name: "Node.js", level: 95, color: "bg-green-500"},
            {name: "Express.js", level: 90, color: "bg-yellow-500"},
            {name: "PHP", level: 88, color: "bg-pink-600"},
            {name: "REST APIS", level: 92, color: "bg-orange-500"},
        ]
    },
    {
        title: "Database",
        icon: Database,
        description: "managing and optimizing data storage",
        skills: [
            {name: "MongoDB", level: 95, color: "bg-green-500"},
            {name: "MYSQL", level: 90, color: "bg-red-500"},
            {name: "Firebase", level: 88, color: "bg-yellow-600"},
        ]
    },
]

export const TECH_STACK = [
    "Vite",
    "Webpack",
    "Zustand",
    "Redux Toolkit",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap CSS",
    "Styled Components",
    "Expo Router",
    "Framer Motion",
    "Lottie",
    "Lightswind UI",
    "CapCut",
    "Git & GitHub",
    "Jest",
    "Notion",
    "Slack"
];


export const STATS = [
    {number: "20+", label: "Projects Completed"},
    {number: "10+", label: "Years Experience"},
    {number: "20+", label: "Technologies"},
    {number: "100%", label: "Client Satisfaction"},
]

export const PROJECTS = [
    {
        id: 1,
        title: "Kero Ride App (Driver)",
        description: "A mobile app for ride-hailing drivers to accept, manage, and complete trip requests. Built with Expo for smooth cross-platform performance.",
        image: images.kero_app,
        tags: ["React Native", "Expo", "REST API"],
        link: { title: "Play Store", icon: Smartphone, url: "http://kerotechnologies.com" },
        link2: { title: "App Store", icon: Apple, url: "http://kerotechnologies.com" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Mobile App",
    },
    {
        id: 2,
        title: "Kero Ride App (User)",
        description: "User app for booking rides and tracking drivers in real time. Intuitive interface powered by React Native and scalable APIs.",
        image: images.kero_app2,
        tags: ["React Native", "Expo", "REST API"],
        link: { title: "Play Store", icon: Smartphone, url: "http://kerotechnologies.com" },
        link2: { title: "App Store", icon: Apple, url: "http://kerotechnologies.com" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Mobile App",
    },
    {
        id: 3,
        title: "Kero Admin Panel & Landing Page",
        description: "Web interface to manage users, drivers, and ride analytics. Includes landing page for marketing and onboarding.",
        image: images.kero_web,
        tags: ["React", "Tailwind CSS", "REST API"],
        link: { title: "View Site", icon: ExternalLink, url: "http://kerotechnologies.com" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Web Application",
    },
    {
        id: 4,
        title: "PayYourDues Admin Panel & Landing Page",
        description: "A clean dashboard and landing page for payment management and user engagement. Built with a focus on simplicity and speed.",
        image: images.payyourdues,
        tags: ["HTML", "CSS3", "JS", "Bootstrap"],
        link: { title: "View Site", icon: ExternalLink, url: "http://kerotechnologies.com" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Web Application",
    },
    {
        id: 5,
        title: "YourErrandGuy App",
        description: "All-in-one delivery and service app for food, errands, and laundry. Cross-platform with a strong API-driven backend.",
        image: images.errand_app,
        tags: ["React Native", "Expo", "Figma", "REST API"],
        link: { title: "Play Store", icon: Smartphone, url: "#" },
        link2: { title: "App Store", icon: Apple, url: "#" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Mobile App",
    },
    {
        id: 6,
        title: "YourErrandGuy Admin & Web",
        description: "Admin dashboard for managing services, plus a landing page built for lead generation and user acquisition.",
        image: images.errand_web,
        tags: ["React", "Tailwind CSS", "Rest API"],
        link: { title: "View Site", icon: ExternalLink, url: "http://kerotechnologies.com" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Web Application",
    },
    {
        id: 7,
        title: "ViraShare Task App",
        description: "Mobile app for users to earn points by completing tasks and redeem them for airtime or cash. Lightweight, responsive, and intuitive.",
        image: images.vira_app,
        tags: ["React Native", "Expo", "Rest API"],
        link: { title: "Play Store", icon: Smartphone, url: "https://app.virashare.io" },
        link2: { title: "App Store", icon: Apple, url: "https://app.virashare.io" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Mobile App",
    },
    {
        id: 8,
        title: "ViraShare Admin Panel & Landing Page",
        description: "Control panel for overseeing tasks, users, and point redemptions. Includes landing page optimized for conversion.",
        image: images.vira_web,
        tags: ["React", "Tailwind CSS", "Rest API"],
        link: { title: "View Site", icon: ExternalLink, url: "http://kerotechnologies.com" },
        githubUrl: "#",
        featured: 'Frontend',
        category: "Web Application",
    },
    {
        id: 9,
        title: "Kunbis Unique Travels",
        description: "Corporate travel website for flight bookings and consultation services. Built with PHP and custom front-end design.",
        image: images.kunbis,
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        link: { title: "Visit Site", icon: ExternalLink, url: "https://kunbisunique.com" },
        githubUrl: "#",
        featured: 'FullStack',
        category: "Website",
    },
    {
        id: 10,
        title: "Nemconsults Travel Agency",
        description: "Student counselling and educational travel portal offering free consultations, blogs, university matching etc.",
        image: images.nemconsults,
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        link: { title: "Visit Site", icon: ExternalLink, url: "https://nemconsults.com" },
        githubUrl: "#",
        featured: 'FullStack',
        category: "Website",
    },
    {
        id: 11,
        title: "MM Charity Foundation Website",
        description: "Elegant and responsive charity NGO website highlighting donations, missions, and outreach activities.",
        image: images.mmcharity,
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        link: { title: "Visit Site", icon: ExternalLink, url: "https://mmcharityfoundation.org" },
        githubUrl: "#",
        featured: 'FullStack',
        category: "Website",
    },
];



export const JOURNEY_STEPS = [
    {
        year: "2010",
        title: "Graphics Designer",
        company: "Assalam Multimedia Business Center, Ibadan",
        description: "Started my creative journey designing logos, flyers, and UI elements using Adobe Photoshop, Illustrator, and CorelDraw.",
        icon: Paintbrush,
        color: "bg-pink-500",
    },
    {
        year: "2016",
        title: "Self-Taught Developer",
        company: "Independent",
        description: "Began learning web development with HTML, CSS, and JavaScript. Built small projects and sharpened problem-solving skills.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2017",
        title: "Frontend Developer Intern",
        company: "Techathom, Ibadan",
        description: "Worked on building responsive UIs using React, HTML, and Bootstrap. Gained hands-on experience collaborating with designers and backend teams.",
        icon: Laptop,
        color: "bg-emerald-500",
    },
    {
        year: "2021",
        title: "Backend Developer Intern",
        company: "Rotosoft Technologies, Eruwa",
        description: "Built RESTful APIs with Node.js and PHP. Managed databases and integrated APIs into frontend React apps.",
        icon: Server,
        color: "bg-orange-500",
    },
    {
        year: "2021",
        title: "ND in Computer Science",
        company: "Adeseun Ogundoyin Polytechnic",
        description: "Completed National Diploma in Computer Science with a foundation in programming and software development.",
        icon: GraduationCap,
        color: "bg-purple-500",
    },
    {
        year: "2023",
        title: "HND in Computer Science",
        company: "Adeseun Ogundoyin Polytechnic",
        description: "Graduated with a Higher National Diploma, deepening my understanding of software engineering and system design.",
        icon: GraduationCap,
        color: "bg-indigo-500",
    },
    {
        year: "2024",
        title: "IT Support (NYSC)",
        company: "Ministry of Communication, Kwara State",
        description: "Offered tech support, created digital documents and graphics, and maintained systems during national service.",
        icon: Wrench,
        color: "bg-yellow-500",
    },
    {
        year: "2023 - Present",
        title: "Full Stack Developer",
        company: "Independent / Freelance",
        description: "Building full-stack mobile and web applications in industries like ride-sharing, utility, and services. Working with React, React Native, Node.js, and MongoDB.",
        icon: Zap,
        color: "bg-cyan-500",
    },
];



export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love"
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challneges into elegant solutions"
    },
    {
        icon: BookOpen,
        title: "Continous Learning",
        description: "Always exploring new technologies and best practices"
    },
]

export const SOCIAL_LINKS = [
    {
        name: "Github",
        icon: FiGithub,
        url: "https://github.com/codewithemperor",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/codewithemperor/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10"
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "https://x.com/codewithemperor",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/19"
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/codewithemperor/",
        color: "hover:text-red-400",
        bgColor: "hover:bg-red-500/10"
    },
    {
        name: "Whatsapp",
        icon: FaWhatsapp,
        url: "https://www.instagram.com/codewithemperor/",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10"
    },
]

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Lagos, Nigeria",
    },
    {
        icon: Mail,
        label: "Email",
        value: "codewithemperor@gmail.com",
    },
    {
        icon: ExternalLink,
        label: "Phone",
        value: "+234 805 419 4279",
    }
]