import Link from "next/link"
import { theme } from "@/lib/theme"

export function Footer() {
  return (
    <div className="mt-8 text-center text-xs text-gray-500">
      © 2025 All Rights Reserved
      <div className="mt-2 space-x-4">
        <Link href="/privacy" className="hover:underline" style={{ color: theme.colors.primary.lightBlue }}>
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:underline" style={{ color: theme.colors.primary.lightBlue }}>
          Terms of Use
        </Link>
      </div>
    </div>

    //     <div className="fixed bottom-6 right-6 flex gap-6 text-sm">
    //   <a href="#" className="hover:underline" style={{ color: theme.colors.link }}>
    //     Privacy Policy
    //   </a>
    //   <a href="#" className="hover:underline" style={{ color: theme.colors.link }}>
    //     Terms of Use
    //   </a>
    // </div>
    
  )
}
