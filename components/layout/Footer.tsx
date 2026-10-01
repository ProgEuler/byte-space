"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import logo from "@/assets/Header_Logo.png";

const footerLinks = [
  {
    items: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    items: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    items: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <footer className="bg-white">
      <div className="container-page pt-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src={logo}
              alt="ByteSpace"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-brand-muted">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              onSubmit={onSubscribe}
              className="mt-6 flex max-w-md items-center gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-brand-border bg-white px-5 py-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-muted focus:border-brand-blue"
                required
              />
              <button type="submit" className="rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue/90 active:bg-brand-blue/80">
                {submitted ? "Subscribed" : "Search"}
              </button>
            </form>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-brand-muted">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-7 md:gap-6">
            {footerLinks.map((col, idx) => (
              <ul key={idx} className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-brand-ink transition hover:text-brand-blue"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-brand-border py-6 text-xs text-brand-muted md:flex-row">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link href="#" className="hover:text-brand-ink">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-ink">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-ink">
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
