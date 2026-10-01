import Image from "next/image";
import person from "@/assets/person.png";
import CourseCard from "./CourseCard";
import limeSpiralLeft from "@/assets/svg/spiral.svg";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function GrowthStats() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse 70% 80% at -5% -5%, #ddf5a0 0%, #edfabc 20%, #f6fde0 38%, #fafcf0 55%, #ffffff 75%)",
      }}
    >
      <div className="container-page relative grid items-center gap-10 lg:grid-cols-2">
        <div className="max-w-lg">
          <h2 className="heading-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[42px]">
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-muted sm:text-[15px]">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-brand-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[560px] lg:h-[580px]">
          <div className="absolute left-6 top-16 z-10 w-[55%] sm:w-[66%]">
            <CourseCard
              course={{
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
              }}
            />
          </div>

          <div className="absolute bottom-0 right-0 z-20 w-[[72%] sm:w-[68%] md:w-[90%]">
            <Image
              src={person}
              alt="Happy learner with laptop"
              width={816}
              height={720}
              priority
              quality={100}
              className="w-full h-auto select-none pointer-events-none"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
            />
          </div>

          <div className="absolute right-0 top-[46%] z-30 w-[168px] sm:w-[190px] rounded-2xl bg-white p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <p className="text-[11px] font-medium text-gray-500">
              Learning Progress
            </p>
            <p className="mt-1 text-[32px] font-extrabold leading-none tracking-tight text-brand-ink">
              55%
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-brand-lime" />
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}
