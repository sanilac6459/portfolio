import React, { useState, useEffect } from "react";

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-portfolio-cream dark:bg-gray-900 flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/logo.png"
            alt="Loading"
            className="w-40 h-40 object-contain animate-pulse"
          />
          <p className="text-portfolio-navy/50 dark:text-white/50 text-sm tracking-widest uppercase">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoader;
