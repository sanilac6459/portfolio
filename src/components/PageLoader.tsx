import React, { useState, useEffect } from "react";

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{
          background: "var(--page-bg)",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Logo painted with the theme's rose color (deep rose in light, pink in dark) */}
          <div
            role="img"
            aria-label="Loading"
            className="w-[200px] h-[200px]"
            style={{
              backgroundColor: "var(--rose)",
              WebkitMaskImage: "url(/images/logo7.png)",
              maskImage: "url(/images/logo7.png)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />

          <p
            className="text-sm tracking-widest uppercase"
            style={{
              color: "var(--wine)",
            }}
          >
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoader;
