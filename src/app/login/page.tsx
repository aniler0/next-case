"use client";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { LoginRequestModel } from "types/http/request/LoginRequestModel";

import { useRouter } from "next/navigation";

import { axiosInstance } from "services";
import { setUser } from "store/slices/userSlice";
import { useAppDispatch } from "store/store";
import { LoginResponseModel } from "types/http/response/LoginResponseModel";
import "./styles.scss";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const useLogin = useMutation({
    mutationFn: async (event: Event) => {
      return await axiosInstance.post<LoginResponseModel>("/api/users", event);
    },
    onSuccess: (res) => {
      dispatch(setUser(res.data.user));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("userToken", res.data.token);
      router.push("/");
    },
    onError: (err: any) => {
      toast.error(err.message, {
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
