import design from "@/assets/svg/design.svg";
import development from "@/assets/svg/development.svg";
import software from "@/assets/svg/software.svg";
import business from "@/assets/svg/business.svg";
import marketing from "@/assets/svg/marketing.svg";
import photography from "@/assets/svg/photography.svg";

export type LearningPathIcon =
  | "design"
  | "development"
  | "software"
  | "business"
  | "marketing"
  | "photography";

export type LearningPath = {
  id: string;
  label: string;
  icon: LearningPathIcon;
};

export const learningPaths: LearningPath[] = [
  { id: "design", label: "Design", icon: "design" },
  { id: "development", label: "Development", icon: "development" },
  { id: "software", label: "IT & Software", icon: "software" },
  { id: "business", label: "Business", icon: "business" },
  { id: "marketing", label: "Marketing", icon: "marketing" },
  { id: "photography", label: "Photography", icon: "photography" },
];

export const learningPathIcons: Record<LearningPathIcon, string> = {
  design,
  development,
  software,
  business,
  marketing,
  photography,
};
