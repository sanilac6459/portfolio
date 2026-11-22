import { useMemo } from "react";

// Very faint "dust" that drifts slowly down the page, swaying a little and fading in and out.
// Two out of three are soft pink, one out of three is rose.
// Pure CSS animation, so it costs almost nothing while scrolling.
const COUNT = 14;

const Sparkles = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => {
        const duration = 22 + Math.random() * 18; // 22–40s per fall, slow and calm
        return {
          rose: i % 3 === 0,
          size: 1.5 + Math.random() * 1.5, // 1.5–3px
          left: Math.random() * 100,
          duration,
          // negative delay: the page starts with dust already mid-fall
          delay: -Math.random() * duration,
        };
      }),
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="sparkle-layer fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <style>{`
        .sparkle-layer i {
          position: absolute;
          top: -10px;
          border-radius: 50%;
          opacity: 0;
          animation: sparkleFall linear infinite;
        }
        @keyframes sparkleFall {
          0%   { transform: translate(0, 0); opacity: 0; }
          10%  { opacity: 0.3; }
          50%  { transform: translate(10px, 50vh); }
          90%  { opacity: 0.3; }
          100% { transform: translate(-8px, 105vh); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sparkle-layer { display: none; }
        }
      `}</style>

      {dots.map((d, i) => (
        <i
          key={i}
          style={{
            left: `${d.left}vw`,
            width: d.size,
            height: d.size,
            background: d.rose ? "var(--rose)" : "#f5a3b8",
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
