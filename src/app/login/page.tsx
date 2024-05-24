"use client";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { LoginRequestModel } from "types/http/request/LoginRequestModel";

import { useRouter } from "next/navigation";

import "./styles.scss";

export default function Login() {
  const router = useRouter();
  const useLogin = useMutation({
    mutationFn: (event: Event) => {
      return axios.post("https://caseapi-fe.paramtech.com.tr/api/users", event);
    },
    onSuccess: (res) => {
      router.push("/");
    },
    onError: (err: any) => {
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
    },
  });

  return (
    <Form
      className="login-form"
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={useLogin.mutate}
    >
      <Form.Item<LoginRequestModel>
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Lütfen mail adresinizi giriniz!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item<LoginRequestModel>
        label="Code"
        name="code"
        rules={[
          {
            required: true,
            message: "Lütfen kodunuzu girin!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item style={{ marginTop: "30px" }}>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={useLogin.isPending}
        >
          Devam Et
        </Button>
      </Form.Item>
    </Form>
  );
}
