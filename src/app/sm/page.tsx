"use client";

import React from "react";
import { Card, CardHeader, CircularProgress } from "@nextui-org/react";
import { useTheme } from "next-themes";

const SomethingPage = () => {
  const theme = useTheme();
  return (
    <Card
      shadow="lg"
      className="h-64 rounded-md border-2 p-4 m-3 flex justify-center items-center dark:bg-slate-900 dark:text-blue"
    >
      <CardHeader>SomethingPage</CardHeader>
      <CircularProgress className="dark:bg-slate-300 animate-spin" />
    </Card>
  );
};

export default SomethingPage;
