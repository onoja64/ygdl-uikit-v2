import { Colors } from "./types";

export const baseColors = {
  failure: "#D94141",
  primary: "#C97A04",
  primaryBright: "#f7a73e",
  primaryDark: "#a36917",
  secondary: "#d48319",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ebcfa0",
  backgroundDisabled: "#fccb92",
  contrast: "#261d13",
  invertedContrast: "#261d13",
  input: "#eeeaf4",
  inputSecondary: "#5c3f1d",
  tertiary: "#45464A",
  text: "#ffffff",
  textDisabled: "#37383b",
  textSubtle: "#ffffff",
  borderColor: "#c27a1d",
  card: "#2e1f10",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5c4531 0%, #211609 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#d48319",
  background: "#000000",
  backgroundDisabled: "#c27a1d",
  contrast: "#261d13",
  invertedContrast: "#261d13",
  input: "#eeeaf4",
  inputSecondary: "#9a9a9d",
  primaryDark: "#a65b00",
  tertiary: "#45464A",
  text: "#ffffff",
  textDisabled: "#37383b",
  textSubtle: "#FFFFFF",
  borderColor: "#c27a1d",
  card: "#2e1f10",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5c4531 0%, #211609 100%)",
  },
};
