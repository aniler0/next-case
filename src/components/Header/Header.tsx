"use client";
import { Flex, Typography } from "antd";

import { Logo, User } from "icons";
import { useRouter } from "next/navigation";

import "./styles.scss";

const Header = () => {
  const { Title } = Typography;
  const router = useRouter();

  return (
    <Flex className="header" justify="space-between">
      <Logo style={{ cursor: "pointer" }} onClick={() => router.push("/")} />
      <Flex align="center">
        <User />
        <Title className="header__title" level={5}>
          Demo
        </Title>
      </Flex>
    </Flex>
  );
};

export default Header;
