
import {
    Code2,
    GraduationCap,
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
    Phone,
} from "lucide-react"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive-user interfaces",
        skills: [
            {name: "React", level: 95, color: "bg-blue-500"},
            {name: "Expo", level: 90, color: "bg-blue-600"},
            {name: "React Native", level: 88, color: "bg-gray-800"},
            {name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
            {name: "Framer Motion", level: 95, color: "bg-pink-500"},
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
    }
]

export const TECH_STACK = [
    "Javascript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
    "Jest",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack"
]

export const STATS = [
    {number: "50+", label: "Projects Completed"},
    {number: "3+", label: "Years Experience"},
    {number: "20+", label: "Technologies"},
    {number: "100%", label: "Client Satisfaction"},
]

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with advanced filtering, payment, integration",
        image: "",
        tags: ['React', "Tailwind", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: 'Full Stack'
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with advanced filtering, payment, integration",
        image: "",
        tags: ['React', "Tailwind", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: 'Full Stack'
    }
]

export const JOURNEY_STEPS = [
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Began learning web development with HTML, CSS, and Javascript. Build my fir",
        icon: Code2,
        color: "bg-blue-500"
    },
    {
        year: "2021",
        title: "Computer Science Degree",
        company: "Adeseun Ogundoyin Polytechnic",
        description: "Graduated with honors, specializing in web technologies and software engineer",
        icon: GraduationCap,
        color: "bg-purple-500"
    },
    {
        year: "2025",
        title: "Senior Developer",
        company: "Present",
        description: "Currently building innovative solutions and exploring new technologies like",
        icon: Zap,
        color: "bg-cyan-500"
    }
]

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
        url: "",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800"
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10"
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/19"
    },
    {
        name: "Email",
        icon: Mail,
        url: "",
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
        icon: Phone,
        label: "Phone",
        value: "+234 805 419 4279",
    }
]