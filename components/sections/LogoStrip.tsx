import Image from "next/image";
import logoipsum from "@/assets/svg/logoipsum.svg";
import krowdz from "@/assets/svg/krowdz.svg";
import zapsend from "@/assets/svg/zapsend.svg";
import orbit from "@/assets/svg/orbit.svg";
import circles from "@/assets/svg/circles.svg";

const logos = [
  { id: 1, src: logoipsum, alt: "Logoipsum" },
  { id: 2, src: krowdz, alt: "Krowdz" },
  { id: 3, src: zapsend, alt: "Zapsend" },
  { id: 4, src: orbit, alt: "Orbit" },
  { id: 5, src: circles, alt: "Circles" },
];

export default function LogoStrip() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-page">
        <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {logos.map((l) => (
            <li
              key={l.id}
              className="flex items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={l.src}
                alt={l.alt}
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
