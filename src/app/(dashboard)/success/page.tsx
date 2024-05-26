"use client";

import { Result } from "antd";

import "./styles.scss";

export default function Success() {
  return (
    <Result
      className="success"
      status="success"
      title="Başarıyla Tamamlandı!"
      subTitle=""
    />
  );
}
