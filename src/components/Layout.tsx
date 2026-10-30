import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoader from "./PageLoader";

const Layout = () => {
  return (
    <PageLoader>
      <div className="min-h-screen flex flex-col relative">
        {/* Fixed backdrop: stays put while every section scrolls over it */}
        <div className="backdrop" aria-hidden="true">
          <div className="backdrop-blob backdrop-blob-1" />
          <div className="backdrop-blob backdrop-blob-2" />
          <div className="backdrop-blob backdrop-blob-3" />
        </div>

        <Navbar />
        <main className="flex-1 relative z-10">
          <Outlet />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </PageLoader>
  );
};

export default Layout;
