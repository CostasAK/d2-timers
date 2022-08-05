const fontFamily1 = [
  "neue-haas-grotesk-display",
  "neue-haas-grotesk-text",
  "helvetica",
  "arial",
  "-apple-system",
  "blinkmacsystemfont",
  "sans-serif",
  "apple color emoji",
  "segoe ui emoji",
  "segoe ui symbol",
].join(",");

const fontFamily2 = [
  "arial",
  "helvetica",
  "neue-haas-grotesk-text",
  "neue-haas-grotesk-display",
  "-apple-system",
  "blinkmacsystemfont",
  "sans-serif",
  "apple color emoji",
  "segoe ui emoji",
  "segoe ui symbol",
].join(",");

export const typography = {
  fontFamily: fontFamily1,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    color: "white",
    fontFamily: fontFamily1,
    fontWeight: 700,
    fontSize: `${62 / 22}rem`,
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "-0.015em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  h2: {
    color: "white",
    fontFamily: fontFamily1,
    fontWeight: 600,
    fontSize: `${35 / 22}rem`,
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "0.375em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  h3: {
    color: "white",
    fontFamily: fontFamily1,
    fontWeight: 600,
    fontSize: `${36 / 22}rem`,
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  h4: {
    color: "white",
    fontFamily: fontFamily1,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  h5: {
    color: "white",
    fontFamily: fontFamily1,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  h6: {
    color: "white",
    fontFamily: fontFamily1,
    fontWeight: 600,
    fontSize: `${20 / 22}rem`,
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  subtitle1: {
    fontFamily: fontFamily1,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  subtitle2: {
    fontFamily: fontFamily1,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.1,
    paddingBlock: "0.2em",
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    overflowWrap: "break-word",
  },
  body1: {
    fontFamily: fontFamily1,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.1em",
  },
  body2: {
    fontFamily: fontFamily1,
    fontWeight: 400,
    fontStyle: "italic",
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  button: {
    fontFamily: fontFamily2,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.1,
    letterSpacing: "normal",
  },
  caption: {
    fontFamily: fontFamily1,
  },
  overline: {
    fontFamily: fontFamily1,
  },
  title: {
    fontFamily: fontFamily2,
    fontSize: "1.25rem",
    fontWeight: 400,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    lineHeight: 1.1,
  },
};
