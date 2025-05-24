"use client"
import { useGetTaskBoard } from "@/src/shared/hook/useTaskBoard/useTaskBoard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useGetTaskBoard()
  return (
    <div>
      {children}
    </div>
  )
}
