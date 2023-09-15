"use client";

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <Button
        variant="shadow"
        color="primary"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </Button>
      <Button variant="bordered" onClick={() => setTheme("dark")}>
        Dark Mode
      </Button>
      <Button variant="bordered" onClick={() => setTheme("purple-dark")}>
        Purple Dark
      </Button>
    </div>
  );
}
