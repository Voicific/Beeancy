import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [initialLoad, setInitialLoad] = useState(isHome);

  useEffect(() => {
    // Only show loading screen on first mount of home page
    if (!isHome) {
      setInitialLoad(false);
    }
  }, [isHome]);

  return (
    <div className="bg-bg text-text min-h-screen flex flex-col">
      {initialLoad && (
        <LoadingScreen onComplete={() => setInitialLoad(false)} />
      )}

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
