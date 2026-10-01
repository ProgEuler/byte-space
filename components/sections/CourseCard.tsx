import Image from "next/image";
import { Star } from "lucide-react";
import { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white p-3.5 sm:p-4 transition duration-200 hover:shadow-card">
      {/* Course Thumbnail Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        {/* Floating frosted glass pills on the image bottom */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between gap-1.5">
          <span className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-gray-800 backdrop-blur-md shadow-xs">
            {course.lessons ?? 17} Lessons
          </span>
          <span className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-gray-800 backdrop-blur-md shadow-xs">
            {course.duration ?? "2 hours 16 mins"}
          </span>
          <span className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-gray-800 backdrop-blur-md shadow-xs">
            {course.comments ?? 59} Comments
          </span>
        </div>
      </div>

      {/* Course Information */}
      <div className="pt-3.5 px-0.5">
        {/* Title and Rating Row */}
        <div className="flex items-center justify-between gap-2">
          <h3
            title={course.title}
            className="min-w-0 flex-1 truncate text-base sm:text-[17px] font-bold tracking-tight text-gray-900 leading-tight"
          >
            {course.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-gray-600">
            <span className="text-sm sm:text-base font-normal">{course.rating}</span>
            <Star size={15} className="fill-gray-300 text-gray-300" />
          </div>
        </div>

        {/* Author */}
        <p className="mt-1 text-xs text-gray-500">
          by{" "}
          <span className="font-medium text-brand-blue hover:underline cursor-pointer">
            {course.author}
          </span>
        </p>

        {/* Level and Students Row */}
        <div className="mt-3.5 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100/90 px-3.5 py-1.5 text-xs font-medium text-gray-600">
            {/* 3-bar level indicator icon matching design */}
            <svg
              className="h-3 w-3 text-gray-700"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <rect x="2" y="9" width="2.5" height="5" rx="1.25" />
              <rect x="6.75" y="5.5" width="2.5" height="8.5" rx="1.25" />
              <rect x="11.5" y="2" width="2.5" height="12" rx="1.25" />
            </svg>
            <span>{course.level}</span>
          </div>

          {/* Student Avatars + Badge */}
          <div className="flex items-center">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="relative h-6 w-6 sm:h-7 sm:w-7 overflow-hidden rounded-full border-[1.5px] border-white bg-gray-100 shadow-xs"
                >
                  <Image
                    src={`/avatars/course-student-${i}.png`}
                    alt=""
                    width={28}
                    height={28}
                    className="h-full w-full object-cover"
                  />
                </span>
              ))}
            </div>
            <span className="relative z-10 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-brand-lime text-[10px] font-bold text-gray-900 border-[1.5px] border-white -ml-1.5 shadow-xs">
              {course.studentsBadge ?? "26+"}
            </span>
          </div>
        </div>

        {/* Price and Period */}
        <div className="mt-3.5 flex items-baseline gap-0.5">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand-blue">
            ${course.price}
          </span>
          <span className="text-xs font-normal text-gray-500">
            {course.period}
          </span>
        </div>
      </div>
    </article>
  );
}
