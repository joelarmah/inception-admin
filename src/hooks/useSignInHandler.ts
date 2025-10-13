"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSignIn, useUser, useSession, useAuth, useClerk } from "@clerk/nextjs";
import { getSignInUser, signOut } from "@/services/authService";

export function useSignInHandler() {

  const router = useRouter();
  const { isSignedIn } = useUser();
  const { signIn, setActive } = useSignIn();
  const { getToken } = useAuth();
  const { signOut: clerkSignOut } = useClerk();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Automatically redirect signed-in users
//   useEffect(() => {
//     if (isSignedIn) {
//       console.log("User already signed in, redirecting to dashboard");
//       router.push("/dashboard");
//     }
//   }, [isSignedIn, router]);

  // Handles sign-in logic
  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    setError("");

    try {

        // if (isSignedIn) {
        //   console.log("User already signed in");
        //   await clerkSignOut();
        //   return;
        // }

      const result = await signIn?.create({
        identifier: email,
        password: password,
      });

      console.log("Clerk sign-in result ==>", result);

      if (result?.status === "complete") {
        // Create Clerk session
        await setActive?.({ session: result.createdSessionId });

        const token = await getToken();

        console.log("Token ==>", token);

        if (token) {  
          const user = await getSignInUser(token);
          console.log("Fetched user ==>", user);
  
          // 🔸 Check if user is an admin
          if (user.user_type !== "admin" || user.is_admin) {
            setError("Access denied: Only admin users can log in here.");
            // await signOut?.(); // optional: sign out non-admins
            return;
          }
  
          // ✅ Save token and continue
          localStorage.setItem("token", token);
          router.push("/dashboard");
        }
      } else {
        console.log("Sign-in requires additional steps:", result);
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignIn,
    loading,
    error,
  };
}