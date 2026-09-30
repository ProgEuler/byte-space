import Image from "next/image";
import { Bell, Star } from "lucide-react";
import FloatingCard from "@/components/ui/FloatingCard";
import HeroSearchForm from "@/components/sections/HeroSearchForm";
import right from "@/assets/MaskGroup.png";
import left from "@/assets/MaskGroup2.png";
import person from "@/assets/person.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue pt-32 pb-24">
      {/* grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-blue bg-grid opacity-60" />

      <Image
        src={right}
        alt="Right illustration"
        height={210}
        width={210}
        className="absolute left-0 top-1/2 -translate-y-1/2 object-cover"
      />
      <Image
        src={left}
        alt="Left illustration"
        height={210}
        width={210}
        className="absolute right-0 top-1/2 -translate-y-1/2 object-cover"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-display animate-fade-up text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <HeroSearchForm />
        </div>

        {/* illustration */}
        <div className="relative mx-auto mt-16 hidden h-[420px] max-w-3xl md:block">
          {/* lime disc */}
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime" />

          {/* main person photo */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
            <Image
              src={person}
              alt="Happy learner"
              fill
              sizes="300px"
              className="object-cover"
              priority
            />
          </div>

          {/* floating card: UX/UI badge */}
          <FloatingCard className="absolute left-2 top-12 w-44">
            <p className="text-xs font-semibold text-brand-ink">UX/UI Design</p>
            <p className="text-[10px] text-brand-muted">240 Courses</p>
          </FloatingCard>

          {/* floating card: Pricing */}
          <FloatingCard className="absolute right-6 top-10 w-44">
            <p className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">
              Total Revenue
            </p>
            <p className="mt-1 text-xl font-extrabold text-brand-ink">
              $120.29
            </p>
          </FloatingCard>

          {/* floating card: Happy students */}
          <FloatingCard className="absolute bottom-6 left-2 w-56">
            <p className="text-xs font-semibold text-brand-ink">
              Happy Students
            </p>
            <div className="mt-2 flex -space-x-2">
              {[
                "https://i.pravatar.cc/40?img=1",
                "https://i.pravatar.cc/40?img=5",
                "https://i.pravatar.cc/40?img=8",
                "https://i.pravatar.cc/40?img=14",
              ].map((src) => (
                <span
                  key={src}
                  className="h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-brand-surface"
                >
                  <Image
                    src={src}
                    alt=""
                    width={28}
                    height={28}
                    className="h-full w-full object-cover"
                  />
                </span>
              ))}
            </div>
          </FloatingCard>

          {/* floating card: learning progress */}
          <FloatingCard className="absolute bottom-10 right-4 w-44">
            <p className="text-xs font-semibold text-brand-ink">
              Learning Progress
            </p>
            <p className="mt-1 text-xl font-extrabold text-brand-ink">55%</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-surface">
              <div className="h-full w-[55%] rounded-full bg-brand-blue" />
            </div>
          </FloatingCard>

          {/* bell badge */}
          <div className="absolute right-16 top-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-card-lg">
            <Bell size={18} className="text-brand-ink" />
          </div>

          {/* star rating small chip */}
          <div className="absolute left-12 bottom-2 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 shadow-card-lg">
            <Star size={12} className="fill-brand-lime text-brand-lime" />
            <span className="text-[11px] font-semibold text-brand-ink">
              4.5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
