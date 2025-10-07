import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(); // ✅ exports a valid middleware function

console.log('CLERK_SECRET_KEY exists ==>', !!process.env.CLERK_SECRET_KEY);
console.log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY exists? ==>', !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};