import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Header_Logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#creators", label: "Creators" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <nav className="container-page flex h-20 items-center justify-between">
        <Image src={logo} alt="Logo" width={120} height={40} />

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-white/85 transition hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-brand-lime px-4 text-sm font-semibold text-brand-ink transition hover:bg-[#C7E800]"
          >
            Join Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
