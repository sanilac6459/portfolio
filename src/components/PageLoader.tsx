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
            "linear-gradient(135deg, #FFF8F7 0%, #F8F0F1 35%, #EBD8DD 65%, #D9B8C0 100%)",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src="/images/logo7.png"
            alt="Loading"
            className="w-50 h-50 object-contain"
          />

          <p
            className="text-sm tracking-widest uppercase"
            style={{
              color: "#800F2F",
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
