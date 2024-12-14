import { createTamagui, createFont } from "@tamagui/web";
import { themes } from "@tamagui/themes/v2-themes";
import { tokens } from "@tamagui/themes";

const body = createFont({
  family: "Inter",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 20,
    5: 24,
    6: 32,
    7: 48,
    8: 64,
  },
});

const customConfig = {
  settings: {
    defaultFont: "body",
  },
  fonts: {
    body,
  },
  themes,
  media: {
    xs: { minWidth: 0 }, // Tailwind breakpoint xs
    sm: { minWidth: 640 }, // Tailwind breakpoint sm
    md: { minWidth: 768 }, // Tailwind breakpoint md
    lg: { minWidth: 1024 }, // Tailwind breakpoint lg
    xl: { minWidth: 1280 }, // Tailwind breakpoint xl
    "2xl": { minWidth: 1536 }, // Tailwind breakpoint 2xl
  },
  tokens,
  fastSchemeChange: true,
};

const tamaguiConfig = createTamagui(customConfig);

export type TamaguiConfig = typeof tamaguiConfig;

export default tamaguiConfig;
