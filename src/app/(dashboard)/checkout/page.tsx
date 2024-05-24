"use client";
import { Flex, Form, Input, Typography } from "antd";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Cart } from "components";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppSelector } from "store/store";
import { formatCardNumber } from "utils";
import "./styles.scss";

export default function Checkout() {
  const router = useRouter();
  const [form] = Form.useForm();
  const { cart } = useAppSelector((state) => state.cart);

  const { Text } = Typography;

  const useCheckout = useMutation({
    mutationFn: (event: Event) => {
      return axios.post(
        "https://caseapi-fe.paramtech.com.tr/api/payment",
        event
      );
    },
    onSuccess: (res) => {
      router.push("/success");
    },
    onError: (err: any) => {
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
    },
  });

  const handleCardInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const sanitizedInput = e.target.value.replace(/[^0-9\s]/g, "");
    const formattedCardNumber = formatCardNumber(sanitizedInput);
    form.setFieldsValue({ cardNumber: formattedCardNumber });
  };

  const handleExpireDateInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const sanitizedInput = e.target.value.replace(/[^0-9]/g, "");
    const month = sanitizedInput.slice(0, 2);
    const year = sanitizedInput.slice(2, 4);

    let formattedExpireDate = `${month}`;
    if (year) {
      formattedExpireDate += `/${year}`;
    }

    form.setFieldsValue({ expireDate: formattedExpireDate });
  };

  const handleButtonClick = async () => {
    await form.validateFields();
    const formValues = form.getFieldsValue();
    const cardNumberWithoutSpaces = formValues.cardNumber.replaceAll(" ", "");
    const selectedPackageIds = cart.map((item) => item._id);

    const requestObject = {
      ...formValues,
      packageIds: selectedPackageIds,
      cardNumber: cardNumberWithoutSpaces,
    };
    useCheckout.mutate(requestObject);
  };
  return (
    <Flex className="checkout" justify="space-between">
      <Flex className="checkout__main" vertical>
        <Flex vertical>
          <Form name="basic" layout="vertical" autoComplete="off" form={form}>
            <Form.Item
              name="cardHolderName"
              label="Kart Üzerindeki İsim Soyisim"
              rules={[
                {
                  required: true,
                  message: "Lütfen isim soyisminizi giriniz!",
                  min: 3,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cardNumber"
              label="Kart Numaranız"
              rules={[
                {
                  required: true,
                  message: "Lütfen kart numaranızı girin!",
                  min: 19,
                },
              ]}
            >
              <Input
                onChange={handleCardInputChange}
                placeholder="xxxx xxxx xxxx xxxx"
                maxLength={19}
              />
            </Form.Item>

            <Form.Item
              label="Son Kul. Tar."
              name="expireDate"
              rules={[
                {
                  required: true,
                  message: "Lütfen son kullanma tarihini girin!",
                  min: 5,
                },
              ]}
            >
              <Input
                onChange={handleExpireDateInputChange}
                placeholder="MM/YY"
                maxLength={5}
              />
            </Form.Item>
            <Form.Item
              label="CVV/CVC"
              name="cvv"
              rules={[
                {
                  required: true,
                  message:
                    "CVV Kodunuzu doğru ve eksiksiz girdiğinizden emin olun!",
                  min: 3,
                  max: 3,
                },
              ]}
            >
              <Input type="password" maxLength={3} minLength={3} />
            </Form.Item>
          </Form>
        </Flex>
        <Flex className="checkout__main__contract" vertical>
          <Text strong>Sözleşme</Text>
          <div className="checkout__main__contract__wrapper"></div>
        </Flex>
      </Flex>
      <Flex className="checkout__cart">
        <Cart handleButtonClick={() => handleButtonClick()} />
      </Flex>
    </Flex>
  );
}
