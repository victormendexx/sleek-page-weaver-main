export function FooterClipPath() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <clipPath id="footer-clip-path" clipPathUnits="objectBoundingBox">
          <path
            d="
              M0.0309,1
              H0.9707
              C0.9868,1 1,0.9636 1,0.9177
              V0.0854
              C1,0.0396 0.9868,0.003
              0.9707,0.003
              H0.3564
              C0.3403,0.003 0.3265,0.0396 0.3265,0.0854
              V0.1585
              C0.3265,0.2074 0.3125,0.2476 0.2947,0.2476
              H0.0324
              C0.0162,0.2476 0.003,0.2824 0.0027,0.3268
              L0.0026,0.3279
              C0.0022,0.4378 0.0014,0.6435 0.0012,0.8717
              L0.0011,0.9176
              C0.0011,0.9636 0.0143,1 0.0309,1
              Z
            "
            fill="#080846"
            stroke="#080846"
            strokeWidth="1"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
