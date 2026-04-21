"use client"

import { Button, Col, Form, Input, Row, Select } from "antd"

export default function ProductDetails() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-medium text-gray-700">Product Details</h2>
        <Button type="primary">
          + Add Items
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Form.Item label="Product" name="product">
            <Select options={[{ label: "Rolex Watch", value: "Rolex Watch" }]} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Form.Item label="Rate" name="rate">
            <Input prefix="$" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Form.Item label="Qty" name="qty">
            <Select options={["01","02","03","04","05"].map((v) => ({ label: v, value: v }))} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Form.Item label="Amount" name="amount">
            <Input prefix="$" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item label="Description" name="productDescription">
            <Input.TextArea rows={2} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}
