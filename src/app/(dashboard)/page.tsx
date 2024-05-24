"use client";
import { Button, Col, Flex, Row, Typography } from "antd";

import { Package } from "components";
import "./styles.scss";

export default function Home() {
  const { Text } = Typography;
  return (
    <Flex className="main" vertical>
      <Row gutter={[70, 50]}>
        <Col lg={12}>
          <Package
            packet={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              id: "2",
              imagePath: "null",
              name: "asdasd",
              tags: ["asdasd"],
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packet={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              id: "2",
              imagePath: "null",
              name: "asdasd",
              tags: ["asdasd"],
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packet={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              id: "2",
              imagePath: "null",
              name: "asdasd",
              tags: ["asdasd"],
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packet={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              id: "2",
              imagePath: "null",
              name: "asdasd",
              tags: ["asdasd"],
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packet={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              id: "2",
              imagePath: "null",
              name: "asdasd",
              tags: ["asdasd"],
            }}
          />
        </Col>
        <Col lg={12}>
          <Package
            packet={{
              amount: 2,
              currency: "dollar",
              details: ["asdasd"],
              id: "2",
              imagePath: "null",
              name: "asdasd",
              tags: ["asdasd"],
            }}
          />
        </Col>
      </Row>
      <Flex className="main__package-details" justify="space-between">
        <Flex>
          <Text>Seçilen Paket Tutarı:</Text>
          <Text strong className="main__package-details__price">
            3333₺
          </Text>
        </Flex>

        <Button type="primary" htmlType="submit">
          Devam Et
        </Button>
      </Flex>
    </Flex>
  );
}
