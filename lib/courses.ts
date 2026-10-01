export type Course = {
  id: string;
  title: string;
  author: string;
  rating: number;
  reviews: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  period: string;
  image: string;
  students: number;
  lessons?: number;
  duration?: string;
  comments?: number;
  studentsBadge?: string;
};

export const courses: Course[] = [
  {
    id: "figma-basics",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    reviews: 2440,
    level: "Beginner",
    price: 25,
    period: "/lifetime",
    image: "/courses/figma-basic.jpg",
    students: 1200,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    studentsBadge: "26+",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    reviews: 2440,
    level: "Beginner",
    price: 25,
    period: "/lifetime",
    image: "/courses/ui-icons.jpg",
    students: 980,
    lessons: 19,
    duration: "2 hours 50 mins",
    comments: 38,
    studentsBadge: "29+",
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    reviews: 2440,
    level: "Beginner",
    price: 25,
    period: "/lifetime",
    image: "/courses/big-data.jpg",
    students: 1450,
    lessons: 14,
    duration: "3 hours 20 mins",
    comments: 45,
    studentsBadge: "18+",
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Creativity",
    author: "purepearl studio",
    rating: 4.5,
    reviews: 2440,
    level: "Beginner",
    price: 25,
    period: "/lifetime",
    image: "/courses/productivity.jpg",
    students: 820,
    lessons: 21,
    duration: "1 hour 45 mins",
    comments: 62,
    studentsBadge: "34+",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: 4.5,
    reviews: 2440,
    level: "Beginner",
    price: 25,
    period: "/lifetime",
    image: "/courses/stock-chart.jpg",
    students: 1620,
    lessons: 24,
    duration: "4 hours 15 mins",
    comments: 87,
    studentsBadge: "42+",
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: 4.5,
    reviews: 2440,
    level: "Beginner",
    price: 25,
    period: "/lifetime",
    image: "/courses/digital-asset.jpg",
    students: 2010,
    lessons: 16,
    duration: "2 hours 10 mins",
    comments: 53,
    studentsBadge: "22+",
  },
];
