import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#FFE5E5",
      200: "#FF4D4D",
      300: "#FF4D4D",
      400: "#FF6666",
      500: "#FF3333",
      600: "#E60000",
      700: "#990000",
      800: "#800000",
      900: "#FF6666",
    },
    brandScheme: {
      100: "#FFE5E5",
      200: "#FF6666",
      300: "#FF6666",
      400: "#FF6666",
      500: "#FF3333",
      600: "#E60000",
      700: "#990000",
      800: "#800000",
      900: "#990000",
    },
    brandTabs: {
      100: "#FFE5E5",
      200: "#FF3333",
      300: "#FF3333",
      400: "#FF3333",
      500: "#FF3333",
      600: "#E60000",
      700: "#990000",
      800: "#800000",
      900: "#990000",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FFE5E5",
      500: "#FF3333",
      600: "#E60000",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
