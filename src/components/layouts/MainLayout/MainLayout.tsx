"use client";
import { Flex, Layout } from "antd";

import { FC } from "react";
import Header from "../../Header/Header";
import "./styles.scss";
type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="main-layout">
      <Header />
      <Flex className="main-layout__wrapper">{children}</Flex>
    </Layout>
  );
};

export default MainLayout;
