"use client";
import { Button, ConfigProvider } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#f59e0b" } }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black">
        <h1 className="text-3xl font-bold">Invoice Management</h1>
        <Button type="primary" className="mt-4" onClick={() => router.push('/form')}>
          Click Me To Visit Form
        </Button>
      </div>
    </ConfigProvider>
  );
}