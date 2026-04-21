"use client"

import { ConfigProvider } from "antd"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#f59e0b" } }}>
      {children}
    </ConfigProvider>
  )
}
