import { ReactNode } from "react";

type Props = {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export default function Pill({ active, onClick, children, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition ${
        active
          ? "bg-brand-lime text-brand-ink"
          : "bg-brand-surface text-brand-ink hover:bg-[#EEF0F4]"
      } ${className}`}
    >
      {children}
    </button>
  );
}