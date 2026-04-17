export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Syncode logo">
      <rect width="48" height="48" rx="8" fill="#09090B" />
      <path
        d="M15 18L9 24L15 30"
        fill="none"
        stroke="#34D399"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 18L39 24L33 30"
        fill="none"
        stroke="#34D399"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 13L21 35"
        fill="none"
        stroke="#A1A1AA"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4" fill="#22D3EE" />
    </svg>
  )
}

export function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-normal text-white">Syncode</span>
    </div>
  )
}
