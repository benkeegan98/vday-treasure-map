interface TreasureChestProps {
  isOpen: boolean
  showPaper: boolean
  onClick: () => void
  isClickable: boolean
}

export const TreasureChest = ({
  isOpen,
  showPaper,
  onClick,
  isClickable,
}: TreasureChestProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`treasure-chest ${isClickable ? 'chest-clickable' : ''}`}
      onClick={isClickable ? onClick : undefined}
      style={{ width: 180, height: 180 }}
    >
      {/* Inner glow when open */}
      <ellipse
        cx="100"
        cy="105"
        rx="50"
        ry="20"
        fill="#F4E4BC"
        className={`chest-glow ${isOpen ? 'visible' : ''}`}
      />

      {/* Paper scroll (rises when showPaper) */}
      <g className={`chest-paper ${showPaper ? 'emerging' : ''}`}>
        <rect x="60" y="60" width="80" height="100" rx="4" fill="#F4E4BC" stroke="#5C4033" strokeWidth="1.5" />
        {/* Decorative lines on paper */}
        <line x1="72" y1="80" x2="128" y2="80" stroke="#D4C4A0" strokeWidth="1" />
        <line x1="72" y1="90" x2="128" y2="90" stroke="#D4C4A0" strokeWidth="1" />
        <line x1="72" y1="100" x2="128" y2="100" stroke="#D4C4A0" strokeWidth="1" />
        {/* Heart at top of paper */}
        <path
          d="M100 75 C100 72, 94 68, 94 72 C94 76, 100 80, 100 80 C100 80, 106 76, 106 72 C106 68, 100 72, 100 75Z"
          fill="#A52A2A"
          opacity="0.6"
        />
        {/* Wax seal at bottom */}
        <circle cx="100" cy="148" r="8" fill="#A52A2A" opacity="0.7" />
        <text x="100" y="151" textAnchor="middle" fontSize="8" fill="#F4E4BC" fontFamily="serif">♥</text>
      </g>

      {/* Chest body */}
      <g className="chest-body">
        {/* Main body */}
        <rect x="30" y="110" width="140" height="60" rx="4" fill="#8B4513" stroke="#5C4033" strokeWidth="2.5" />
        {/* Bottom highlight */}
        <rect x="30" y="150" width="140" height="20" rx="0" fill="#704214" opacity="0.4" />
        {/* Horizontal band - top */}
        <rect x="28" y="115" width="144" height="8" rx="2" fill="#B8860B" stroke="#8B6914" strokeWidth="1" />
        {/* Horizontal band - middle */}
        <rect x="28" y="145" width="144" height="8" rx="2" fill="#B8860B" stroke="#8B6914" strokeWidth="1" />
        {/* Vertical band - center */}
        <rect x="92" y="108" width="16" height="64" rx="2" fill="#B8860B" stroke="#8B6914" strokeWidth="1" />
        {/* Keyhole */}
        <circle cx="100" cy="133" r="5" fill="#3D2314" />
        <rect x="98" y="133" width="4" height="8" rx="1" fill="#3D2314" />
      </g>

      {/* Chest lid — closed state */}
      <g className={`chest-lid-closed ${isOpen ? 'opening' : ''}`}>
        {/* Lid shape (slightly arched top) */}
        <path
          d="M28 112 Q28 90, 100 85 Q172 90, 172 112 L172 115 L28 115 Z"
          fill="#8B4513"
          stroke="#5C4033"
          strokeWidth="2.5"
        />
        {/* Lid band */}
        <path
          d="M28 108 Q28 88, 100 83 Q172 88, 172 108 L172 113 Q172 93, 100 88 Q28 93, 28 113 Z"
          fill="#B8860B"
          stroke="#8B6914"
          strokeWidth="1"
        />
        {/* Lid center band */}
        <path
          d="M92 112 L92 88 Q100 85, 108 88 L108 112 Z"
          fill="#B8860B"
          stroke="#8B6914"
          strokeWidth="1"
        />
      </g>

      {/* Chest lid — open state */}
      <g className={`chest-lid-open ${isOpen ? 'opening' : ''}`}>
        {/* Lid tilted back */}
        <path
          d="M28 112 L28 80 Q28 55, 100 50 Q172 55, 172 80 L172 112 Z"
          fill="#8B4513"
          stroke="#5C4033"
          strokeWidth="2.5"
          transform="translate(0, -45) scale(1, 0.5)"
          style={{ transformOrigin: '100px 112px' }}
        />
        {/* Inside of lid */}
        <path
          d="M30 68 Q30 58, 100 55 Q170 58, 170 68 L170 72 Q170 62, 100 59 Q30 62, 30 72 Z"
          fill="#704214"
          stroke="#5C4033"
          strokeWidth="1"
        />
        {/* Lid band on open lid */}
        <rect x="28" y="60" width="144" height="6" rx="2" fill="#B8860B" stroke="#8B6914" strokeWidth="0.8" />
      </g>
    </svg>
  )
}
