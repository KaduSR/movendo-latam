import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`button-link button-link--${variant} ${className}`.trim()}
    >
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
    </Link>
  );
}
