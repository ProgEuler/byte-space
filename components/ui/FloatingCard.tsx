import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** A small white floating card used in the hero illustration area. */
export default function FloatingCard({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-card-lg ${className}`}
    >
      {children}
    </div>
  );
}