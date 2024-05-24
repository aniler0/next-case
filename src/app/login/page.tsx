"use client";
import { Button, Form, Input } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import "./styles.scss";

export default function Login() {
  return (
    <Form
      className="login-form"
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Adınız Soyadınız"
        name="fullName"
        rules={[{ required: true }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        label="Email Adresiniz"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item style={{ marginTop: "30px" }}>
        <Button type="primary" htmlType="submit" block>
          Devam Et
        </Button>
      </Form.Item>
    </Form>
  );
}
