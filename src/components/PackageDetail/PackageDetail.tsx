"use client";
import { Flex, List, Typography } from "antd";
import { FC } from "react";

import { useRouter } from "next/navigation";

import Cart from "components/Cart/Cart";
import { PackageDetailsProps } from "./types";

import Image from "next/image";
import "./styles.scss";

const PackageDetail: FC<PackageDetailsProps> = ({ packageItem }) => {
  const router = useRouter();

  const { Text } = Typography;

  return (
    <Flex className="package-detail" justify="space-between">
      <Flex className="package-detail__wrapper" vertical>
        <Flex align="center">
          <Text strong>Paket Detay | </Text>
          <Text strong className="package-detail__wrapper__price">
            {packageItem?.amount} {packageItem?.currency}
          </Text>
        </Flex>
        <div style={{ position: "relative", height: "200px" }}>
          <Image
            src={`https://picsum.photos/650/200` || packageItem?.imagePath}
            alt="asasdasd"
            style={{ objectFit: "cover", borderRadius: "8px" }}
            fill
          ></Image>
        </div>
        <Flex
          justify="space-between"
          align="center"
          style={{ marginTop: "20px" }}
        >
          <Text strong>Detay Açıklama </Text>
          <List
            grid={{
              gutter: 16,
            }}
            dataSource={packageItem?.tags}
            renderItem={(item) => (
              <List.Item className="package-detail__wrapper__tag">
                {item}
              </List.Item>
            )}
          />
        </Flex>
        <Flex className="package-detail__wrapper__text-area" vertical>
          <Text strong>{packageItem.moreInformation}</Text>
        </Flex>
      </Flex>
      <Flex className="package-detail__cart">
        <Cart handleButtonClick={() => router.push("/checkout")} />
      </Flex>
    </Flex>
  );
};

export default PackageDetail;
