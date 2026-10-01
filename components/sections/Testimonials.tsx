import Image from "next/image";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 0%, #ddf5a0 0%, #edfabc 18%, #f6fde0 38%, #fafcf0 58%, #ffffff 80%)",
      }}
    >
      <div className="container-page">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="heading-display text-3xl sm:text-4xl md:text-[44px] lg:text-[52px]">
              Discover What Our
              Community Is Saying
            </h2>
          </div>
          <p className="mt-2 self-end text-sm leading-relaxed text-brand-ink lg:col-span-7 sm:text-[15px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-card transition hover:shadow-card-lg sm:p-8"
            >
              {/* Avatar in its own row */}
              <span className="block h-15 w-15 overflow-hidden rounded-full bg-brand-surface ring-1 ring-brand-border/50 sm:h-16 sm:w-16">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </span>

              {/* Name + role in a separate row below */}
              <div className="mt-4">
                <p className="text-base font-bold text-brand-ink">{t.name}</p>
                <p className="text-sm text-brand-blue">{t.role}</p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-brand-ink sm:text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
