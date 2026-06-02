import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const SalaryIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="6" width="19" height="13" rx="3" />
    <path d="M12 9v6m0 0-2.5-2.5M12 15l2.5-2.5" />
    <path d="M6 6V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V6" />
  </svg>
);

export const FundHomeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    <path d="m15.5 8.5 3-1-1 3" />
  </svg>
);

export const CashbackIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 11.5 12 5l9 6.5" />
    <path d="M5 10.5V19h14v-8.5" />
    <path d="M9 19v-4a3 3 0 0 1 6 0v4" />
    <path d="m13.5 8.5 3 3m0-3-3 3" />
  </svg>
);

export const EsimIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="2.5" width="14" height="19" rx="3" />
    <path d="M9 18h6" />
    <path d="M12 6.5a4 4 0 0 1 4 4M12 9a1.5 1.5 0 0 1 1.5 1.5" opacity="0.9" />
  </svg>
);

export const CardIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="19" height="14" rx="3" />
    <path d="M2.5 9.5h19" />
    <path d="M6 14.5h4" />
  </svg>
);

export const NoAtmIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M5.6 5.6 18.4 18.4" />
    <path d="M9.5 9.5c0-1 1.1-1.8 2.5-1.8s2.5.6 2.5 1.6c0 2.2-5 1.6-5 3.8 0 1 1.1 1.7 2.5 1.7s2.5-.7 2.5-1.7" opacity="0.85" />
  </svg>
);

export const TaxIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
);

export const MultiCurrencyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="9" r="6" />
    <path d="M15 6.2A6 6 0 1 1 17.8 15" />
    <path d="M9 6.5v5M7.5 8h2a1.2 1.2 0 0 1 0 2.4H7.8" opacity="0.9" />
  </svg>
);

export const BudgetIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <rect x="7" y="12" width="3" height="5" rx="1" />
    <rect x="12" y="8" width="3" height="9" rx="1" />
    <rect x="17" y="5" width="3" height="12" rx="1" />
  </svg>
);

export const ShareBillsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="8.5" r="3" />
    <circle cx="16.5" cy="9.5" r="2.5" />
    <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
    <path d="M14 19a4 4 0 0 1 6.5-3.1" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const TagIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12.5 12.5 3H20a1 1 0 0 1 1 1v7.5L11.5 21a1.5 1.5 0 0 1-2.1 0L3 14.6a1.5 1.5 0 0 1 0-2.1Z" />
    <circle cx="16.5" cy="7.5" r="1.3" />
  </svg>
);

export const VirtualCardIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="15" height="11" rx="2.5" />
    <path d="M2.5 9h15" />
    <path d="M18 12.5a4 4 0 1 1-2 7.4l-1.5.6.4-1.6a4 4 0 0 1 3.1-6.4Z" />
  </svg>
);

export const SupportIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" />
  </svg>
);

export const PiggyIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12.5a6 6 0 0 1 6-6h2.5A5.5 5.5 0 0 1 18 9.2l2-.7v3l-1.4.6A6 6 0 0 1 15 16v2h-2.5v-1.5h-3V18H7v-2a6 6 0 0 1-3-3.5Z" />
    <path d="M9 6.5C9 5 10.5 4 12 4" />
    <circle cx="14.5" cy="11" r="0.6" fill="currentColor" />
  </svg>
);

export const ScaleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4v16M7 20h10" />
    <path d="M5 7h14M8 4.5 5 7 2.5 12a3 3 0 0 0 5 0L5 7Zm11 0L16 7l-2.5 5a3 3 0 0 0 5 0L19 7Z" />
  </svg>
);

export const PassportIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="3" width="14" height="18" rx="2.5" />
    <circle cx="12" cy="10" r="3" />
    <path d="M9.5 15.5h5" />
  </svg>
);

export const HealthIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6l-7-3Z" />
    <path d="M12 8.5v5M9.5 11h5" />
  </svg>
);

export const CertificateIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="13" rx="2" />
    <path d="M7.5 7h9M7.5 10h5" />
    <circle cx="12" cy="17.5" r="2.5" />
    <path d="m10.5 19.5-1 3 2.5-1.3 2.5 1.3-1-3" />
  </svg>
);

export const SwapIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 8.5h13m0 0L13.5 5M17 8.5 13.5 12" />
    <path d="M20 15.5H7m0 0L10.5 12M7 15.5 10.5 19" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
