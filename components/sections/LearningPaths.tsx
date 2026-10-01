import IconBadge from "@/components/ui/IconBadge";
import { learningPaths } from "@/lib/paths";

export default function LearningPathsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-display text-3xl sm:text-4xl">
            Explore Diverse Learning Paths at ByteSpace
          </h2>
          <p className="mt-8 text-sm text-brand-muted sm:text-base">
            At ByteSpace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {learningPaths.map((p) => (
            <IconBadge key={p.id} icon={p.icon} label={p.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
