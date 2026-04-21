"use client"

import { Form, Input } from "antd"

export default function TermsConditions() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <h2 className="text-base font-medium mb-4 text-gray-700">Terms & Conditions</h2>
      <Form.Item label="Description" name="termsDescription">
        <Input.TextArea rows={3} />
      </Form.Item>
    </div>
  )
}
