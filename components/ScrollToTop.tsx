"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable browser scroll restoration so page always starts at top
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Force scroll to top on page load/refresh (unless navigating to a hash)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
