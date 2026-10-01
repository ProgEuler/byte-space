import Image from "next/image";
import Link from "next/link";
import limeScribble from "@/assets/MaskGroup2.png";
import whiteScribble from "@/assets/MaskGroup.png";
import limeCone from "@/assets/MaskGroup1.png";
import whiteCone from "@/assets/MaskGroup3.png";
import whiteDonut from "@/assets/Cone.png";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-20 text-center">
      {/* grid pattern — matches Hero */}
      <div className="pointer-events-none absolute inset-0 bg-grid-blue bg-grid opacity-60" />

      {/* Top-left: large lime scribble + small white scribble */}
      <Image
        src={limeScribble}
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -left-12 -top-6 w-44 -rotate-12 sm:w-56"
      />
      <Image
        src={whiteScribble}
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute left-[14%] top-[10%] w-20 sm:w-28"
      />

      {/* Top-right: lime cone + white cone */}
      <Image
        src={limeCone}
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute right-[18%] top-[6%] w-28 rotate-[150deg] sm:w-36"
      />
      <Image
        src={whiteCone}
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute -right-4 -top-2 w-40 rotate-12 sm:w-52"
      />

      {/* Bottom-left: white cone + white donut */}
      <Image
        src={whiteCone}
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute -bottom-4 left-[3%] w-28 rotate-[200deg] sm:w-36"
      />
      <Image
        src={whiteDonut}
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute bottom-[6%] left-[10%] w-24 sm:w-32"
      />

      {/* Bottom-right: lime scribble */}
      <Image
        src={limeScribble}
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -bottom-8 right-[3%] w-44 rotate-[20deg] sm:w-56"
      />

      <div className="container-page relative">
        <h2 className="heading-display mx-auto max-w-3xl text-3xl text-white sm:text-4xl md:text-5xl">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-sm text-white/80 sm:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center justify-center bg-brand-lime px-8 text-base font-semibold text-brand-ink shadow-card transition hover:bg-[#C7E800] active:bg-[#B5D700] sm:text-base rounded-full"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
