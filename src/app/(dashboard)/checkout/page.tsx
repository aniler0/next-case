"use client";
import { Flex, Form, Input, Typography } from "antd";

import { useMutation, useQuery } from "@tanstack/react-query";
import { Cart } from "components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "services";
import { clearCart } from "store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { formatCardNumber } from "utils";
import "./styles.scss";

export default function Checkout() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { cart } = useAppSelector((state) => state.cart);
  const { Text } = Typography;

  const useCheckout = useMutation({
    mutationFn: (event: Event) => {
      return axiosInstance.post("/api/checkout", event);
    },
    onSuccess: (res) => {
      dispatch(clearCart());
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

  const { isLoading, isError, data, error } = useQuery<any, Error>({
    queryKey: ["contract"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/payment");
      return response.data;
    },
  });

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
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div
              className="checkout__main__contract__wrapper"
              dangerouslySetInnerHTML={{ __html: data }}
            ></div>
          )}
        </Flex>
      </Flex>
      <Flex className="checkout__cart">
        <Cart handleButtonClick={() => handleButtonClick()} />
      </Flex>
    </Flex>
  );
}
