import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StoreProvider, TanstackProvider } from "providers";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <TanstackProvider>
            <ToastContainer />
            <AntdRegistry>{children}</AntdRegistry>
          </TanstackProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
