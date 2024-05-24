"use client";
import React, { FC } from "react";
import { Layout } from "antd";
import "./styles.scss";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <Layout className="auth-layout">{children}</Layout>;
};

export default AuthLayout;
