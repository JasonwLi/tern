import type { SVGProps } from "react";

// A tern in flight — the migratory bird that works its way pole to pole,
// just like a working holiday maker. Bold lime wings on a grape stamp.
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="40" height="40" rx="11" fill="#6C4DFF" />
      <path
        d="M9 25c4.4.2 7.8-1.4 11-5.2"
        stroke="#C8F560"
        strokeWidth="3.1"
        strokeLinecap="round"
      />
      <path
        d="M31 25c-4.4.2-7.8-1.4-11-5.2"
        stroke="#C8F560"
        strokeWidth="3.1"
        strokeLinecap="round"
      />
      <path
        d="M25.5 12.5c1.4-1.7 3-1.7 4.5 0"
        stroke="#C8F560"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
