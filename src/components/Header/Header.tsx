import { Flex, Typography } from "antd";

import { Logo, User } from "icons";
import "./styles.scss";

const Header = () => {
  const { Title } = Typography;

  return (
    <Flex className="header" justify="space-between">
      <Logo style={{ cursor: "pointer" }} />
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
