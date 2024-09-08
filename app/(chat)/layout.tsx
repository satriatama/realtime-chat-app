import Sidebar from '@/components/layout/sidebar'
import React from 'react'

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div className="relative flex-1">
        <main>{children}</main>
      </div>
    </div>
  )
}
