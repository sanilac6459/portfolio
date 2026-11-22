import { useMemo } from "react";

// Soft "dust" that falls slowly down the page, swaying a little and fading in and out.
// Two out of three are soft pink, one out of three is rose.
// Pure CSS animation, so it costs almost nothing while scrolling.
const COUNT = 24;

const Sparkles = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => {
        const duration = 14 + Math.random() * 16; // 14–30s per fall
        return {
          rose: i % 3 === 0,
          size: 2 + Math.random() * 2.5, // 2–4.5px
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
          10%  { opacity: 0.55; }
          50%  { transform: translate(16px, 50vh); }
          90%  { opacity: 0.55; }
          100% { transform: translate(-14px, 105vh); opacity: 0; }
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
