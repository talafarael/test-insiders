"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Custom404() {
  const router = useRouter(
  )

  useEffect(() => {
    router.replace('/auth/login')
  }, [router])

  return <div className='h-[100vh] bg-[#ECFAE5] flex justify-center items-center'>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Redirecting to login...</h1>
  </div>

}
