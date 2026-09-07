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
          background:
            "linear-gradient(135deg, #fffaf9 0%, #f9f0f1 45%, #f3e9eb 75%, #e8f1ec 100%)",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src="/logo2.png"
            alt="Loading"
            className="w-40 h-40 object-contain"
          />

          <p
            className="text-sm tracking-widest uppercase"
            style={{
              color: "rgb(164 19 60 / var(--tw-text-opacity, 1))",
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
