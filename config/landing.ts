import { FeatureLdg, InfoLdg, TestimonialType } from "types";

// Updated InfoLdg data
export const infos: InfoLdg[] = [
  {
    title: "Elevate Your Development Experience",
    description:
      "At DevUnion, we provide an open-source SaaS platform designed to enhance your development workflow. Collaborate effortlessly, innovate with cutting-edge tools, and scale your projects with ease.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Collaborative",
        description: "Collaborate in real-time with your team and streamline your development process.",
        icon: "laptop",
      },
      {
        title: "Innovative",
        description: "Access the latest tools and updates to stay ahead in the tech industry.",
        icon: "settings",
      },
      {
        title: "Scalable",
        description: "Our platform scales with your needs, ensuring flexibility as your projects grow.",
        icon: "search",
      },
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "DevUnion integrates effortlessly with your existing workflows. Connect with your favorite tools and services for a streamlined development experience.",
    image: "/_static/illustrations/integration.jpg",
    list: [
      {
        title: "Flexible",
        description: "Customize integrations to suit your unique project requirements.",
        icon: "laptop",
      },
      {
        title: "Efficient",
        description: "Optimize your workflow and reduce manual tasks with our integrated solutions.",
        icon: "search",
      },
      {
        title: "Reliable",
        description: "Depend on our robust infrastructure and comprehensive support for a smooth experience.",
        icon: "settings",
      },
    ],
  },
];

// Updated FeatureLdg data
export const features: FeatureLdg[] = [
  {
    title: "Collaborative Tools",
    description:
      "Leverage powerful collaborative features to enhance team productivity and project management.",
    link: "/features/collaborative-tools",
    icon: "nextjs",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights into your projects with our advanced analytics and reporting tools.",
    link: "/features/analytics",
    icon: "google",
  },
  {
    title: "Custom Integrations",
    description:
      "Seamlessly integrate with a variety of third-party services and tools to extend functionality.",
    link: "/features/integrations",
    icon: "gitHub",
  },
  {
    title: "Developer-Friendly",
    description:
      "Enjoy a developer-centric platform designed for ease of use and rapid development.",
    link: "/features/developer-friendly",
    icon: "laptop",
  },
  {
    title: "Scalability",
    description:
      "Scale your projects effortlessly with our robust and scalable infrastructure.",
    link: "/features/scalability",
    icon: "user",
  },
  {
    title: "Comprehensive Documentation",
    description:
      "Access detailed and easy-to-understand documentation to help you get the most out of our platform.",
    link: "/features/documentation",
    icon: "copy",
  },
];

// Updated TestimonialType data
export const testimonials: TestimonialType[] = [
  {
    name: "Alice Johnson",
    job: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "DevUnion has transformed how my team collaborates and develops projects. The platform's seamless integration and powerful tools have significantly boosted our productivity.",
  },
  {
    name: "Michael Brown",
    job: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "With DevUnion, I've been able to design and implement user interfaces more efficiently than ever. The platform's features are intuitive and well-documented.",
  },
  {
    name: "Emily Davis",
    job: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "DevUnion's robust analytics and collaborative tools have been game-changers for my projects. The integration with other services is smooth and reliable.",
  },
  {
    name: "John Smith",
    job: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    review:
      "The comprehensive documentation and scalable infrastructure of DevUnion have made managing our projects and teams much easier. Highly recommended!",
  },
  {
    name: "Sophia Martinez",
    job: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "DevUnion has provided the tools and integrations necessary to handle complex data projects efficiently. It's an invaluable asset to our team.",
  },
  {
    name: "James Wilson",
    job: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "The seamless integration and comprehensive features of DevUnion have greatly enhanced our marketing campaigns. The platform's tools are both powerful and user-friendly.",
  },
  {
    name: "Olivia Taylor",
    job: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    review:
      "DevUnion has streamlined my development process with its intuitive features and reliable infrastructure. It has become an essential part of my toolkit.",
  },
];
