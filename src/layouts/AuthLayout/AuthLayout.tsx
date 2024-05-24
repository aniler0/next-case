"use client";
import { Layout } from "antd";
import React, { FC } from "react";

import "./styles.scss";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <Layout className="auth-layout">{children}</Layout>;
};

export default AuthLayout;
