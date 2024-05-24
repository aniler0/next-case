"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC, useState } from "react";

type TanstackProviderProps = {
  children: React.ReactNode;
};

const TanstackProvider: FC<TanstackProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
