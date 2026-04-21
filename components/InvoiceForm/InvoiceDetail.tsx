"use client"

import { Col, Form, Input, Row, Select } from "antd"

export default function InvoiceDetail() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <h2 className="text-base font-medium mb-4 text-gray-700">Invoice Detail</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Invoice To" name="invoiceTo">
            <Select options={[{ label: "WATCH EVOLUTION SRL", value: "WATCH EVOLUTION SRL" }]} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Invoice Number" name="invoiceNumber">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Email" name="invoiceEmail">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Website" name="invoiceWebsite">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Phone no" name="invoicePhone">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Code no" name="invoiceCodeSdi">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="VAT Number" name="invoiceVatNumber">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Address" name="invoiceAddress">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Address 2" name="invoiceAddress2">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Tax" name="invoiceTax">
            <Select options={["10%", "20%", "0%"].map((v) => ({ label: v, value: v }))} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}
