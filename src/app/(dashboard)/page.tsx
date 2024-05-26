"use client";
import { Button, Col, Flex, Row, Typography } from "antd";

import { useQuery } from "@tanstack/react-query";
import { Package } from "components";

import { useRouter } from "next/navigation";
import { axiosInstance } from "services";
import { useAppSelector } from "store/store";
import { PackagesResponseModel } from "types/http/response/PackagesResponseModel";
import { calculateCart } from "utils/CalculateCart";
import "./styles.scss";

export default function Home() {
  const { isLoading, isError, data, error } = useQuery<
    PackagesResponseModel,
    Error
  >({
    queryKey: ["packages"],
    queryFn: async () => {
      const response = await axiosInstance.get<PackagesResponseModel>(
        "/api/packages"
      );
      return response.data;
    },
  });
  const { Text } = Typography;
  const { cart } = useAppSelector((state) => state.cart);

  const router = useRouter();

  if (isLoading) return <Text>Loading...</Text>;
  return (
    <Flex className="main" vertical>
      <Row gutter={[70, 50]}>
        {data?.allPackages?.map((packageItem, index) => (
          <Col key={index} lg={12}>
            <Package packageItem={packageItem} />
          </Col>
        ))}
      </Row>
      <Flex className="main__package-details" justify="space-between">
        <Flex>
          <Text>Seçilen Paket Tutarı:</Text>
          <Text strong className="main__package-details__price">
            {calculateCart(cart)}$
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
