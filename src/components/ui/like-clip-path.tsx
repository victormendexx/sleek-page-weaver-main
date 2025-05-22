export function LikeClipPath() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <clipPath id="like-clip-path" clipPathUnits="objectBoundingBox">
          <path
            d="
              M0.9955,0.1285
              C0.9954,0.0576 0.9665,0 0.9332,0
              H0.0624
              C0.029,0 0,0.0575 0,0.1284
              V0.8716
              C0,0.9425 0.029,1 0.0624,1
              H0.7146
              C0.7479,1 0.7768,0.9425 0.7768,0.8716
              V0.7961
              C0.7768,0.7252 0.8057,0.6683 0.8391,0.6683
              H0.9464
              C0.9805,0.6683 1.0091,0.6101 1.0084,0.5382
              C1.0076,0.443 1.0069,0.3006 0.9955,0.1285
              Z
            "
            fill="#080846"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
