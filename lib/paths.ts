export type LearningPath = {
  id: string;
  label: string;
  icon: "design" | "development" | "software" | "business" | "marketing" | "photography";
};

export const learningPaths: LearningPath[] = [
  { id: "design", label: "Design", icon: "design" },
  { id: "development", label: "Development", icon: "development" },
  { id: "software", label: "IT & Software", icon: "software" },
  { id: "business", label: "Business", icon: "business" },
  { id: "marketing", label: "Marketing", icon: "marketing" },
  { id: "photography", label: "Photography", icon: "photography" },
];