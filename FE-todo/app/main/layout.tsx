"use client"
import { useGetUserQuery } from "@/src/api/user/useQuery";
import { Header } from "@/src/Molecules/Header";
import { useUserStore } from "@/src/store/userStore";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, isLoading } = useGetUserQuery()
  useEffect(() => {
    if (data && data.data) {
      addUser(data.data)
    }
  }, [data])
  const { addUser, user } = useUserStore()
  if (!user && isLoading) {
    return <h1>Laod</h1>
  }

  return (
    <div className="bg-[#AAB99A] min-h-[100vh]">
      <Header />
      {children}
    </div>
  )
}
