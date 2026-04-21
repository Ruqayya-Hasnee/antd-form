"use client"

import { Button } from "antd"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50">
      <h1 className="text-3xl font-bold">Invoice Management</h1>
      <Button type="primary" className="mt-4" onClick={() => router.push("/create-invoice")}>
        Click Me To Visit Form
      </Button>
    </div>
  )
}
