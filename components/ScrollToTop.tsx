"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable browser scroll restoration so page always starts at top
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Clear any hash from the URL so browser doesn't auto-scroll to anchors
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    // Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return null;
}
