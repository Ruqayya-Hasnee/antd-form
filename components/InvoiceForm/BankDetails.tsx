"use client"

import { Button, Col, Form, Input, Row } from "antd"

export default function BankDetails() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-medium text-gray-700">Bank Details</h2>
        <Button type="primary">
          + Add Bank
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Company Name" name="bankCompanyName">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Bank Name" name="bankName">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="IBAN" name="iban">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Sort Code" name="sortCode">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Account Number" name="accountNumber">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Swift" name="swift">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}
