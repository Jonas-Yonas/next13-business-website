import { AboutData } from "@/app/lib/types";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsCartCheckFill, BsGlobe2, BsPhone } from "react-icons/bs";
import { FaLaptopCode, FaUserCheck } from "react-icons/fa";
import { LuSmartphoneNfc } from "react-icons/lu";
import { SiFsecure } from "react-icons/si";

export const stats = [
  { id: 1, value: 120, title: "Clients", start: 10, suffix: "+" },
  { id: 2, value: 110, title: "Projects", start: 1, suffix: "+" },
  { id: 3, value: 200, title: "Team Members", start: 2, suffix: "+" },
];

export const aboutData: AboutData[] = [
  {
    id: 1,
    title: "Smart, Seamless Operations",
    text: "In this category, we focus on developing software solutions that optimize and streamline your business operations.",
    icon: <LuSmartphoneNfc />,
  },
  {
    id: 2,
    title: "Empowering User Experiences",
    text: "This category revolves around creating intuitive and user-centric software applications.",
    icon: <FaUserCheck />,
  },
  {
    id: 3,
    title: "Secure Software Solutions",
    text: "Security is paramount in the digital world, and this category is dedicated to providing robust software solutions.",
    icon: <SiFsecure />,
  },
];

export const serviceData = [
  {
    id: 1,
    title: "Custom Software Development",
    text: "Tailor-made solutions designed to meet your specific business requirements, providing enhanced functionality and scalability.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    text: "Create engaging and intuitive mobile applications for iOS and Android platforms, empowering you to connect with your target audience on the go.",
    icon: <BsPhone />,
  },
  {
    id: 3,
    title: "Web Development",
    text: "Develop visually appealing and user-friendly websites that effectively showcase your brand, products, and services, while ensuring a seamless browsing experience.",
    icon: <BsGlobe2 />,
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    text: "Build robust and secure e-commerce platforms, enabling you to expand your online presence, streamline sales processes, and maximize revenue.",
    icon: <BsCartCheckFill />,
  },
  {
    id: 5,
    title: "UX/UI Design",
    text: "Craft visually stunning and user-centric interfaces that enhance user experience, improve customer engagement, and drive brand loyalty.",
    icon: <AiOutlineAntDesign />,
  },
  {
    id: 6,
    title: "Software Testing and Quality Assurance",
    text: "Conduct comprehensive testing and quality assurance processes to ensure the reliability, performance, and security of your software applications, minimizing risks and maximizing customer satisfaction.",
    icon: <SiFsecure />,
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Jonas G. Yonas",
    title: "CEO/Founder",
    email: "yonas1520@gmail.com",
    image: "/tim.jpg",
  },
  {
    id: 2,
    name: "Dagmawi B. Tadesse",
    title: "Senior Software Engineer",
    email: "dagtad@gmail.com",
    image: "/son.jpg",
  },
  {
    id: 3,
    name: "Danielle R. Doe",
    title: "Graphics/HR Manager",
    email: "dnielledoe@gmail.com",
    image: "/daniel.jpg",
  },
  {
    id: 4,
    name: "Ruth M. Solomon",
    title: "UX/UI Designer",
    email: "ruthsol@gmail.com",
    image: "/emma.jpg",
  },
  {
    id: 5,
    name: "Hanna C. Freeman",
    title: "Product Owner",
    email: "hannacman@gmail.com",
    image: "/linda.jpg",
  },
  {
    id: 6,
    name: "Hellen K. Santiago",
    title: "QA Engineer",
    email: "fredsante@yahoomail.com",
    image: "/hellen.jpg",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Anna Smith",
    rating: 5,
    image: "/anna.jpg",
    review:
      "Nexus Solutions delivered an exceptional custom software solution that perfectly met our business needs. Their team was highly profession, efficient, and responsive throughout the entire development process. We are extremely satisfied with the results and would highly recommend their services.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    rating: 4.5,
    image: "/emily.jpg",
    review:
      "I hired Nexus Solutions for mobile app development, and they exceeded my expectations. Their team displayed excellent technical expertise and attention to detail. The app they developed for us is user-friendly and visually appealing. I appreciate their dedication and commitment to delivering a high-quality product.",
  },
  {
    id: 3,
    name: "Grace Thompson",
    rating: 4,
    image: "/grace.jpg",
    review:
      "Nexus Solutions created a stunning website for our business. Their web development services are top-notch, and they successfully brought our vision to life. The team ensured a smooth user experience and incorporated all the features we requested. We are delighted with their work and would gladly collaborate with them again.",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    rating: 5,
    image: "/sarah.jpg",
    review:
      "Working with Nexus Solutions on our e-commerce platform was a fantastic experience. They delivered a secure and scalable solution that has significantly boosted our online sales. Their attention to detail and ability to understand our business requirements were commendable. We highly recommend their e-commerce services.",
  },
  {
    id: 5,
    name: "Sophia Turner",
    rating: 4.5,
    image: "/sophia.jpg",
    review:
      "The UX/UI design services provided by Nexus Solutions were outstanding. They truly understood our brand identity and crafted visually stunning interfaces that are both aesthetically pleasing and intuitive. Our customers love the new look, and we've seen increased engagement as a result. Thank you, Nexus Solutions.",
  },
  {
    id: 6,
    name: "Elizabeth Miller",
    rating: 4,
    image: "/elizabeth.jpg",
    review:
      "Nexus Solutions software testing and quality assurance team played a crucial role in ensuring the reliability of our application. They meticulously tested every aspect, identifying and addressing potential issues before launch. Their expertise and attention to detail gave us confidence in the performance and security of our software.",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: 2,
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: 3,
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];
