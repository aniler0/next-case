import { Button, Flex, Typography } from "antd";

import "./styles.scss";

import { useAppSelector } from "store/store";
import { CartProps } from "./types";

const Cart = ({ handleButtonClick, isLoading }: CartProps) => {
  const { cart } = useAppSelector((state) => state.cart);
  const { Title, Text } = Typography;

  return (
    <Flex className="main" vertical>
      <Title level={4} className="main__title">
        Sepetteki Paketler
      </Title>
      {isLoading ? (
        <>Loading</>
      ) : cart.length > 0 ? (
        cart.map((item, key) => (
          <Flex
            className="main__selected-package"
            key={key}
            justify="space-between"
            align="center"
          >
            <Text>{item.name}</Text>
            <Flex justify="center" align="center">
              <Title level={5} style={{ marginBottom: "0px" }}>
                {item.amount}
              </Title>
              <Text strong>{item.currency}</Text>
            </Flex>
          </Flex>
        ))
      ) : (
        <Text>Sepetinizde herhangi bir paket bulunmuyor.</Text>
      )}
      <Button
        disabled={cart.length === 0}
        className="paymentButton"
        type="primary"
        block
        onClick={handleButtonClick}
      >
        Ödeme Yap
      </Button>
    </Flex>
  );
};

export default Cart;
