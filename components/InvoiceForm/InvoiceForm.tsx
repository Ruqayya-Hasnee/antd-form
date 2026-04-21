"use client"

import { Button, ConfigProvider, Form } from "antd"
import FormHeader from "./FormHeader"
import CompanyDetails from "./CompanyDetails"
import InvoiceDetail from "./InvoiceDetail"
import ContactPersonDetails from "./ContactPersonDetails"
import ProductDetails from "./ProductDetails"
import BankDetails from "./BankDetails"
import TermsConditions from "./TermsConditions"

export default function InvoiceForm() {
  const [form] = Form.useForm()

  const handleSubmit = (values: unknown) => {
    console.log("Invoice Form Values:", values)
  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#f59e0b" } }}>
      <div className="w-full p-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            company: "Watch portal",
            companyWebsite: "www.watchtrader.co.uk",
            companyEmail: "enquiries@watchtrader.co.uk",
            companyPhone: "0191 281 4976",
            companyReg: "12133403",
            companyAddress: "20-22 Bridge End, Leeds, West Yorkshire",

            invoiceTo: "WATCH EVOLUTION SRL",
            invoiceNumber: "Invoice INV-1037",
            invoiceEmail: "evolutionsrl.ar@gmail.com",
            invoiceWebsite: "www.watchevolution.it",
            invoicePhone: "0039 3454433718",
            invoiceCodeSdi: "Cod. Sdi : M5UXCR1",
            invoiceVatNumber: "P. I. 02337120519",
            invoiceAddress: "52100 Arezzo",
            invoiceAddress2: "Via Guido Monaco 56",
            invoiceTax: "10%",

            contactPerson: "Hassan Ali Abbas",

            product: "Rolex Watch",
            rate: "2,750.00",
            qty: "01",
            amount: "2,750.00",
            productDescription: "Rolex Daytona | Ref 16573 | SNR NT17695",

            bankCompanyName: "Sativai Habitual Unbearout LDR",
            bankName: "WISE",
            iban: "GB90 TRWI 6084 6167 5097 22",
            sortCode: "60-84-84",
            accountNumber: "57500722",
            swift: "TRWIGB2LXXX",

            termsDescription: "Rolex Daytona | Ref 16573 | SNR NT17695",
          }}
        >
          <div className="flex flex-col gap-4 p-4">
            <FormHeader />
            <CompanyDetails />
            <InvoiceDetail />
            <ContactPersonDetails />
            <ProductDetails />
            <BankDetails />
            <TermsConditions />
            <div className="flex justify-end">
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  )
}
