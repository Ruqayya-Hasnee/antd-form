"use client"

import { Col, Form, Input, Row } from "antd"

export default function CompanyDetails() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <h2 className="text-base font-medium mb-4 text-gray-700">Company detail</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Company" name="company">
            <Input placeholder="Enter company name" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Website" name="companyWebsite">
            <Input placeholder="Please enter website URL" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Email" name="companyEmail">
            <Input placeholder="email@example.com" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Phone no" name="companyPhone">
            <Input placeholder="+44 000 000 0000" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Registration no" name="companyReg">
            <Input placeholder="Enter registration number" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Business Address" name="companyAddress">
            <Input placeholder="Enter business address" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}
