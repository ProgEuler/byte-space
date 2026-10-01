export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Lifelong Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    id: "james",
    name: "James L.",
    role: "Aspiring Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
];