import Image from "next/image"
import React from "react"

function FormHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center px-4">
      
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="w-60 lg:w-80 h-auto pt-6"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Invoice
      </h2>

    </div>
  )
}

export default FormHeader