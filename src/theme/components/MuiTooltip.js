import { fontFamily1 } from "theme/typography";

export const MuiTooltip = {
  defaultProps: {
    title: "",
    followCursor: true,
  },
  styleOverrides: {
    tooltip: {
      borderRadius: 0,
      backgroundColor: "rgba(52, 52, 62, 0.9)",
      "@supports (backdrop-filter: blur(16px))": {
        backdropFilter: "blur(16px) saturate(180%)",
        "-webkit-backdrop-filter": "blur(16px) saturate(180%)",
        backgroundColor: "rgba(52, 52, 62, 0.5)",
      },
      fontFamily: fontFamily1,
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.1,
      letterSpacing: "0.01em",
      textTransform: "uppercase",
      overflowWrap: "break-word",
      padding: "0.5em 1em",
    },
  },
};
