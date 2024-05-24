import { Flex, List, Typography } from "antd";
import Image from "next/image";

import Link from "next/link";
import { addToCart, deleteFromCart } from "store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { PackageProps } from "./types";

import "./styles.scss";

const Package = ({ packageItem }: PackageProps) => {
  const { Title } = Typography;

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const handlePackageClick = (packageId: string) => {
    const isSelected = cart.some((item) => item._id === packageId);

    if (isSelected) {
      dispatch(deleteFromCart(packageId));
    } else {
      dispatch(addToCart(packageItem));
    }
  };

  return (
    <Flex
      className={`package-wrapper${
        cart.some((item) => item._id === packageItem._id) ? " selected" : ""
      }`}
      onClick={() => handlePackageClick(packageItem._id)}
    >
      <div style={{ position: "relative", width: "200px" }}>
        <Image
          src={`https://picsum.photos/200` || packageItem.imagePath}
          alt={packageItem.name}
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
              {packageItem.name}
            </Title>
            <Title level={4} className="package-wrapper__content__title">
              {packageItem.amount} {packageItem.currency}
            </Title>
          </Flex>
          <Flex justify="space-between" align="center">
            <List
              grid={{
                gutter: 16,
              }}
              dataSource={["sda", "asdasd", "asdasdc", "sda", "asdasd"]}
              className="package-wrapper__content__list"
              renderItem={(item) => (
                <>
                  <List.Item className="item">
                    <span>•</span>
                    {item}
                  </List.Item>
                </>
              )}
            />
          </Flex>
        </Flex>
        <Flex justify="flex-start">
          <Link
            className="package-wrapper__content__detail"
            href={`/package/${packageItem._id}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Paket detayını görüntüle
          </Link>
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
            dataSource={packageItem.tags}
            renderItem={(item) => (
              <List.Item className="package-wrapper__content__tags__tag">
                {item}
              </List.Item>
            )}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Package;
