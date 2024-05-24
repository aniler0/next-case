import { Flex, List, Typography } from "antd";
import Image from "next/image";
import { GiDirectionSign } from "react-icons/gi";
import { IoBagAdd } from "react-icons/io5";

import "./styles.scss";
import { PackageProps } from "./types";

const Package = ({ packet }: PackageProps) => {
  const { Title } = Typography;

  return (
    <Flex className="package-wrapper">
      <div style={{ position: "relative", width: "200px" }}>
        <Image
          src={`https://picsum.photos/200` || packet.imagePath}
          alt={packet.name}
          className="image"
          layout="fill"
        />
      </div>

      <Flex
        vertical
        className="package-wrapper__content"
        justify="space-between"
      >
        <Flex vertical>
          <Flex justify="space-between">
            <Title level={4} className="package-wrapper__content__title">
              {packet.name}
            </Title>
            <Title level={4} className="package-wrapper__content__title">
              {packet.amount} {packet.currency}
            </Title>
          </Flex>
          <Flex justify="space-between" align="center">
            <List
              grid={{
                gutter: 16,
              }}
              dataSource={packet.details}
              className="package-wrapper__content__list"
              renderItem={(item) => (
                <List.Item>
                  <span>•</span>
                  {item}
                </List.Item>
              )}
            />
            <IoBagAdd className="bag-icon" size={25} cursor={"pointer"} />
          </Flex>
        </Flex>

        <Flex
          className="package-wrapper__content__tags"
          justify="space-between"
          align="center"
        >
          <List
            grid={{
              gutter: 16,
            }}
            dataSource={packet.tags}
            renderItem={(item) => (
              <List.Item className="package-wrapper__content__tags__tag">
                {item}
              </List.Item>
            )}
          />
          <GiDirectionSign
            className="direction-icon"
            size={25}
            cursor={"pointer"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Package;
