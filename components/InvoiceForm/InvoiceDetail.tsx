"use client"

import { Col, Form, Input, Row, Select } from "antd"

const invoiceToOptions = [
  { label: "WATCH EVOLUTION SRL", value: "WATCH EVOLUTION SRL" },
]

const taxOptions = [
  { label: "0%", value: "0%" },
  { label: "10%", value: "10%" },
  { label: "20%", value: "20%" },
]

export default function InvoiceDetail() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <h2 className="text-base font-medium mb-4 text-gray-700">Invoice Detail</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Invoice To" name="invoiceTo">
            <Select options={invoiceToOptions} placeholder="Select client" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Invoice Number" name="invoiceNumber">
            <Input placeholder="e.g. INV-1037" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Email" name="invoiceEmail">
            <Input placeholder="client@example.com" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Website" name="invoiceWebsite">
            <Input placeholder="www.client.com" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Phone no" name="invoicePhone">
            <Input placeholder="+39 000 000 0000" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Code no" name="invoiceCodeSdi">
            <Input placeholder="Cod. Sdi" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="VAT Number" name="invoiceVatNumber">
            <Input placeholder="P. I. 00000000000" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Address" name="invoiceAddress">
            <Input placeholder="City, Postal Code" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Address 2" name="invoiceAddress2">
            <Input placeholder="Street name" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Tax" name="invoiceTax">
            <Select options={taxOptions} placeholder="Select tax" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}
