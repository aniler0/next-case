"use client";
import { Button, Col, Flex, Row, Typography } from "antd";

import { Package } from "components";

import { useRouter } from "next/navigation";
import { useAppSelector } from "store/store";
import { calculateCart } from "utils/CalculateCart";
import "./styles.scss";

export default function Home() {
  const { Text } = Typography;
  const { cart } = useAppSelector((state) => state.cart);

  const router = useRouter();

  return (
    <Flex className="main" vertical>
      <Row gutter={[70, 50]}>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "1",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "2",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "3",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "4",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "5",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "6",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "7",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "8",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packageItem={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              _id: "9",
              imagePath: "https://picsum.photos/200",
              name: "asdasd",
              tags: ["asdasd"],
              __v: 0,
              createdAt: "2021-09-30T14:10:25.000Z",
              updatedAt: "2021-09-30T14:10:25.000Z",
              moreInformation: "asdasd",
              price: 2,
            }}
          />
        </Col>
      </Row>
      <Flex className="main__package-details" justify="space-between">
        <Flex>
          <Text>Seçilen Paket Tutarı:</Text>
          <Text strong className="main__package-details__price">
            {calculateCart(cart)}
          </Text>
        </Flex>

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => router.push("/checkout")}
        >
          Devam Et
        </Button>
      </Flex>
    </Flex>
  );
}
