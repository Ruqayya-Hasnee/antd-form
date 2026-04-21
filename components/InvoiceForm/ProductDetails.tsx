"use client"

import { Button, Col, Form, Input, Row, Select } from "antd"

const productOptions = [
  { label: "Rolex Watch", value: "Rolex Watch" },
  { label: "AP Watch", value: "AP Watch" },
  { label: "Patek Philippe", value: "Patek Philippe" },
]

const qtyOptions = ["01", "02", "03", "04", "05"].map((v) => ({ label: v, value: v }))

export default function ProductDetails() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-medium text-gray-700">Product Details</h2>
        <Button type="primary">+ Add Items</Button>
      </div>
      <Form.List name="products">
        {(fields) => (
          <>
            {fields.map(({ key, name }) => (
              <div key={key}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={6} lg={6}>
                    <Form.Item label="Product" name={[name, "product"]}>
                      <Select options={productOptions} placeholder="Select product" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6} lg={6}>
                    <Form.Item label="Rate" name={[name, "rate"]}>
                      <Input prefix="$" placeholder="0.00" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6} lg={6}>
                    <Form.Item label="Qty" name={[name, "qty"]}>
                      <Select options={qtyOptions} placeholder="Select qty" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6} lg={6}>
                    <Form.Item label="Amount" name={[name, "amount"]}>
                      <Input prefix="$" placeholder="0.00" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Form.Item label="Description" name={[name, "description"]}>
                      <Input.TextArea rows={2} placeholder="e.g. Rolex Daytona | Ref 16573 | SNR NT17695" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            ))}
          </>
        )}
      </Form.List>
    </div>
  )
}
