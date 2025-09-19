"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/shared/header"
import type React from "react"

import { useAuth } from "@clerk/nextjs";
import { setTokenProvider } from "@/lib/apiClient";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { getToken } = useAuth();

  // register the provider once
  useEffect(() => {
    setTokenProvider(() => getToken());
  }, [getToken]);

  return (
  
  <div className="min-h-screen bg-[#f4f7fe] flex">
      {/* Sidebar fixed on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="ml-64 flex-1 p-6">
        {/* Header */}
        <Header />
        <aside>
        {children}
        </aside>
      </div>
    </div>
  )
}
