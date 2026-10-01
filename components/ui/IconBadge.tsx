import Image from "next/image";
import { LearningPath, learningPathIcons } from "@/lib/paths";

type Props = {
  icon: LearningPath["icon"];
  label: string;
};

export default function IconBadge({ icon, label }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border border-brand-border bg-white px-8 py-8 transition hover:shadow-card">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime">
        <Image
          src={learningPathIcons[icon]}
          alt=""
          width={24}
          height={24}
          className="h-8 w-8"
        />
      </div>
      <span className="text-sm font-medium text-brand-ink">{label}</span>
    </div>
  );
}
