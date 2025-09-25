"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // only animate once
    });
  }, []);

  return <>{children}</>;
}
