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
        <Flex>
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
        <Flex justify="space-between" align="flex-end">
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
          <Text strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio,
            semper id mauris nec, ornare luctus elit. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Mauris eu justo sapien. Nullam turpis magna, laoreet at finibus sit
            amet, ultrices et dolor. Suspendisse vestibulum gravida quam, nec
            interdum justo pulvinar nec. Aenean quam mauris, fermentum eu
            iaculis non, egestas a lorem.
          </Text>
          <br />
          <br />
          <Text strong>
            Sed ante justo, pulvinar dapibus enim id, euismod feugiat arcu.
            Mauris dictum sed tortor ut placerat. Sed leo ante, laoreet at
            egestas ut, dapibus et turpis. Duis non enim sed ante aliquet
            maximus eu et dui. Sed consequat iaculis libero, id pharetra purus
            blandit vitae. Etiam ut lobortis tortor, sed efficitur tortor. Duis
            facilisis quam sem, quis pulvinar erat aliquet sit amet. Aliquam
            velit orci, pellentesque eget varius finibus, sodales quis dolor.
          </Text>
        </Flex>
      </Flex>
      <Flex className="package-detail__cart">
        <Cart handleButtonClick={() => router.push("/checkout")} />
      </Flex>
    </Flex>
  );
};

export default PackageDetail;
