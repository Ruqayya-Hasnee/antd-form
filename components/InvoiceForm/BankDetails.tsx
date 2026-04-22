"use client"

import { Button, Col, Form, Input, Row } from "antd"

export default function BankDetails() {
  return (
    <div className="w-full bg-gray-100 p-4 border border-gray-200 rounded-xl">
      <Form.List name="banks">
        {(fields, { add, remove }) => (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium text-gray-700">Bank Details</h2>
              <Button type="primary" onClick={() => add()}>+ Add Bank</Button>
            </div>
            {fields.map(({ key, name }) => (
              <div key={key}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={8} lg={4}>
                    <Form.Item label="Company Name" name={[name, "companyName"]}>
                      <Input placeholder="Enter company name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={4}>
                    <Form.Item label="Bank Name" name={[name, "bankName"]}>
                      <Input placeholder="e.g. WISE, HSBC" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={4}>
                    <Form.Item label="IBAN" name={[name, "iban"]}>
                      <Input placeholder="e.g. GB00 0000 0000 0000 00" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={4}>
                    <Form.Item label="Sort Code" name={[name, "sortCode"]}>
                      <Input placeholder="00-00-00" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={4}>
                    <Form.Item label="Account Number" name={[name, "accountNumber"]}>
                      <Input placeholder="Enter account number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={4}>
                    <Form.Item label="Swift" name={[name, "swift"]}>
                      <Input placeholder="e.g. TRWIGB2LXXX" />
                    </Form.Item>
                  </Col>
                </Row>
                <div className="flex justify-end mb-4">
                  <Button danger onClick={() => remove(name)}>Remove</Button>
                </div>
              </div>
            ))}
          </>
        )}
      </Form.List>
    </div>
  )
}
