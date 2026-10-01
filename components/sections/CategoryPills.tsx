"use client";

import { useState } from "react";
import Pill from "@/components/ui/Pill";
import CourseCard from "@/components/sections/CourseCard";
import { categories } from "@/lib/categories";
import { courses } from "@/lib/courses";

export default function CategoryPills() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="courses" className="bg-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-display text-3xl sm:text-4xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm text-brand-muted sm:text-base">
            At ByteSpace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex w-max gap-3 px-1 md:w-full md:flex-wrap md:justify-center">
            {categories.map((cat) => (
              <Pill
                key={cat}
                active={active === cat}
                onClick={() => setActive(cat)}
              >
                {cat}
              </Pill>
            ))}
            <button className="text-brand-blue">+ More</button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
