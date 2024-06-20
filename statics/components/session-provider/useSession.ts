"use client";

import { getSession2 } from "@/lib/session/getSession";
import { SessionData } from "@/lib/session/session";
import { useState, useEffect } from "react";

export default function useSession() {
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const sessionData = await getSession2();
        setSession(sessionData);
      } catch (error) {
        console.error("Error getting session:", error);
      }
    }

    fetchSession();
  }, []);

  return session;
}