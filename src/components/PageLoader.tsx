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
            "linear-gradient(135deg, #FFF8F7 0%, #F8EFF0 45%, #F2E3E6 75%, #E9D5DA 100%)",
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
