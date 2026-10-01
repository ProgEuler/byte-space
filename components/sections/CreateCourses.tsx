import Image from "next/image";
import { Check, Star } from "lucide-react";
import girl from "@/assets/girl.png";
import limeSpiralLeft from "@/assets/svg/spiral.svg";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const avatars = [
  "https://i.pravatar.cc/64?img=1",
  "https://i.pravatar.cc/64?img=5",
  "https://i.pravatar.cc/64?img=8",
  "https://i.pravatar.cc/64?img=14",
  "https://i.pravatar.cc/64?img=20",
  "https://i.pravatar.cc/64?img=33",
];

export default function CreateCourses() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse 70% 80% at -5% -5%, #ddf5a0 0%, #edfabc 20%, #f6fde0 38%, #fafcf0 55%, #ffffff 75%)",
      }}
    >
      <div className="container-page relative grid items-start gap-10 lg:grid-cols-2">
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <Image
            src={girl}
            alt="Creator with headset and tablet"
            priority
            quality={100}
            className="h-auto w-[60%] select-none absolute bottom-0 left-0 pointer-events-none"
            style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.18))" }}
          />
        </div>
        <div className="relative mx-auto h-[560px] w-full max-w-[460px] sm:h-[600px] lg:h-[640px]">
          <div className="pointer-events-none absolute right-20 top-[4%] z-40 w-16 sm:w-[72px] opacity-95">
            <div className="pointer-events-none absolute -left-0 sm:-left-4 md:-left-2 top-10 sm:top-14 md:top-16 z-50 w-[150px] select-none sm:w-[190px] md:w-[230px]">
              <Image
                src={limeSpiralLeft}
                alt=""
                width={240}
                height={340}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="absolute left-2 top-4 z-20 w-44 overflow-hidden rounded-2xl bg-brand-blue p-4 text-white shadow-card-lg sm:left-0 sm:top-6">
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
              Total Revenue
            </p>
            <p className="mt-0.5 text-[10px] text-white/70">July 1-28</p>
            <p className="mt-2 text-2xl font-extrabold leading-none text-white">
              $120.29
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[55%] rounded-full bg-brand-lime" />
            </div>
          </div>

          <div className="absolute left-0 top-44 z-20 w-44 overflow-hidden rounded-2xl bg-brand-blue p-4 text-white shadow-card-lg sm:top-52">
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
              Year to Date
            </p>
            <p className="mt-0.5 text-[10px] text-white/70">2023</p>
            <p className="mt-2 text-2xl font-extrabold leading-none text-white">
              $1,200.38
            </p>
            <div className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-lime px-2 py-0.5 text-[10px] font-bold text-brand-ink">
              +12S
            </div>
          </div>

          <div className="absolute bottom-10 right-2 z-20 w-60 rounded-2xl bg-white p-4 shadow-card-lg sm:right-4 sm:bottom-12">
            <p className="text-sm font-semibold text-brand-ink">
              Happy Students
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-brand-ink">
                4.5
              </span>
              <span className="text-[11px] text-brand-muted">(240)</span>
              <Star size={12} className="fill-brand-lime text-brand-lime" />
            </div>
            <div className="mt-2 flex items-center">
              <div className="flex -space-x-2">
                {avatars.map((src) => (
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
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-brand-lime text-[11px] font-bold text-brand-ink -ml-2 border-2 border-white">
                2K+
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2 sm:pt-6 lg:pt-16">
          <h2 className="heading-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[42px]">
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-muted sm:text-[15px]">
            <strong className="font-semibold text-brand-ink">ByteSpace</strong>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-brand-ink sm:text-base">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
