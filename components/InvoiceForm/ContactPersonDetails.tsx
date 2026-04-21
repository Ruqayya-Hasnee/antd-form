"use client"

import { Col, DatePicker, Form, Row, Select } from "antd"

const contactPersonOptions = [
  { label: "Hassan Ali Abbas", value: "Hassan Ali Abbas" },
]

export default function ContactPersonDetails() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <h2 className="text-base font-medium mb-4 text-gray-700">Contact Person Details</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Contact Person" name="contactPerson">
            <Select options={contactPersonOptions} placeholder="Select contact person" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Issue Date" name="issueDate">
            <DatePicker className="w-full" format="DD MMM, YYYY" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Form.Item label="Payable by" name="payableBy">
            <DatePicker className="w-full" format="DD MMM, YYYY" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  )
}
