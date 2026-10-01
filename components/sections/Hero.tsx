import Image from "next/image";
import { Star } from "lucide-react";
import HeroSearchForm from "@/components/sections/HeroSearchForm";
import person from "@/assets/person.png";
import limeSpiralLeft from "@/assets/MaskGroup.png";
import whiteZigzagLeft from "@/assets/MaskGroup1.png";
import whiteDonutLeft from "@/assets/MaskGroup3.png";
import limeCylinderRight from "@/assets/MaskGroup2.png";
import whiteConeRight from "@/assets/Cone.png";
import whiteHelixRight from "@/assets/Frame.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue pt-24 sm:pt-28 md:pt-32 pb-0">

      <div className="pointer-events-none absolute inset-0 bg-grid-blue bg-grid opacity-60" />

      <div className="pointer-events-none absolute -left-8 sm:-left-4 md:-left-2 top-10 sm:top-14 md:top-16 w-[150px] sm:w-[190px] md:w-[230px] select-none z-0">
        <Image
          src={limeSpiralLeft}
          alt=""
          width={240}
          height={340}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="pointer-events-none absolute left-[12%] sm:left-[14%] md:left-[16%] top-[230px] sm:top-[260px] md:top-[280px] w-[70px] sm:w-[85px] md:w-[120px] select-none z-0">
        <Image
          src={whiteZigzagLeft}
          alt=""
          width={140}
          height={140}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="pointer-events-none absolute left-[2%] sm:left-[4%] md:left-[9%] bottom-6 sm:bottom-10 md:bottom-12 w-[180px] sm:w-[220px] md:w-[300px] select-none z-10">
        <Image
          src={whiteDonutLeft}
          alt=""
          width={280}
          height={280}
          priority
          className="w-full h-auto drop-shadow-md"
        />
      </div>

      <div className="pointer-events-none absolute -right-8 sm:-right-4 md:-right-2 top-8 sm:top-12 md:top-14 w-[140px] sm:w-[170px] md:w-[210px] select-none z-0">
        <Image
          src={limeCylinderRight}
          alt=""
          width={220}
          height={340}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="pointer-events-none absolute right-[12%] sm:right-[15%] md:right-[17%] top-[220px] sm:top-[245px] md:top-[265px] w-[80px] sm:w-[95px] md:w-[150px] select-none z-0">
        <Image
          src={whiteConeRight}
          alt=""
          width={160}
          height={160}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="pointer-events-none absolute right-[3%] sm:right-[5%] md:right-[9%] bottom-6 sm:bottom-10 md:bottom-12 w-[125px] sm:w-[155px] md:w-[230px] select-none z-10">
        <Image
          src={whiteHelixRight}
          alt=""
          width={220}
          height={280}
          priority
          className="w-full h-auto rotate-3 drop-shadow-md"
        />
      </div>

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-display animate-fade-up text-4xl sm:text-5xl md:text-[58px] leading-[1.12] text-white">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <HeroSearchForm />
        </div>
      </div>

      <div className="relative mx-auto mt-4 h-[380px] sm:h-[440px] md:h-[500px] w-full max-w-[1080px]">

        <div className="pointer-events-none absolute bottom-[-450px] sm:bottom-[-510px] md:bottom-[-970px] left-1/2 h-[750px] w-[750px] sm:h-[860px] sm:w-[860px] md:h-[1400px] md:w-[1400px] -translate-x-1/2 rounded-full bg-brand-lime" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[360px] sm:w-[420px] md:w-[580px] max-w-none">
          <Image
            src={person}
            alt="Happy learner holding laptop"
            width={516}
            height={483}
            priority
            quality={100}
            className="w-full h-auto block select-none pointer-events-none"
          />
        </div>

        <div className="absolute left-[7%] sm:left-[11%] md:left-[15%] lg:left-[19%] top-[14%] sm:top-[16%] md:top-[18%] z-20 rounded-2xl bg-white px-4 py-2.5 sm:px-4 sm:py-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <p className="text-xs sm:text-[13px] text-brand-ink">
            UI/UX Design
          </p>
          <p className="mt-0.5 text-[10px] sm:text-[11px] text-brand-muted font-medium">
            200 Courses <span className="mx-0.5">·</span> 1000+ Students
          </p>
        </div>

        <div className="absolute left-[3%] sm:left-[6%] md:left-[9%] lg:left-[13%] bottom-10 sm:bottom-14 md:bottom-16 z-20 rounded-2xl bg-white p-3 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <p className="text-xs sm:text-[13px] font-bold text-brand-ink">
            Happy Students
          </p>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-xs font-semibold text-brand-ink">4.5</span>
            <span className="text-[11px] text-brand-muted font-medium">(240)</span>
            <Star size={11} className="fill-brand-lime text-brand-lime ml-0.5" />
          </div>
          <div className="mt-2 flex items-center">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <img
                  key={num}
                  src={`/avatars/student-${num}.png`}
                  alt=""
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full object-cover border-[1.5px] border-white"
                />
              ))}
            </div>
            <span className="relative z-10 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-brand-lime text-[9px] font-bold text-brand-ink -ml-1.5 border-[1.5px] border-white">
              2K+
            </span>
          </div>
        </div>

        <div className="absolute right-[7%] sm:right-[11%] md:right-[15%] lg:right-[19%] top-[16%] sm:top-[18%] md:top-[20%] z-20 w-36 sm:w-44 rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <p className="text-[11px] sm:text-xs font-medium text-brand-ink/80">
            Learning Progress
          </p>
          <p className="mt-0.5 sm:mt-1 text-2xl sm:text-3xl font-extrabold text-brand-ink tracking-tight leading-none">
            55%
          </p>
          <div className="mt-2.5 sm:mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-brand-lime" />
          </div>
        </div>
      </div>
    </section>
  );
}
