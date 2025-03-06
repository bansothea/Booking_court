"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "../lib/supabaseClient"

export function useProtectedRoute() {
  const { user, loading } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin"); // Redirect if not logged in
    }
  }, [user, loading, router]);

  return { user, loading };
}
