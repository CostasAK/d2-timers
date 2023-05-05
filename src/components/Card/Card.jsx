import { Button, Typography, useTheme } from "@mui/material";

import DestinyDialog from "components/DestinyDialog";
import Img from "components/Img";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cssRgb } from "functions/cssRgb";
import { forwardRef } from "react";
import { pascalCase } from "functions/pascalCase";

export const Card = forwardRef(
  (
    {
      title,
      titleRule,
      children,
      modalContent,
      customModal,
      link,
      icon,
      className,
      floatIcon,
      highlight,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    titleRule = titleRule === undefined ? !floatIcon : titleRule;

    const highlightBackgroundColor =
      theme?.palette?.[highlight]?.dark ||
      theme?.palette?.[highlight]?.main ||
      theme?.palette?.[highlight] ||
      theme?.palette?.secondary?.dark;

    const highlightBorderColor =
      theme?.palette?.[highlight]?.light ||
      theme?.palette?.[highlight]?.main ||
      theme?.palette?.[highlight]?.dark ||
      theme?.palette?.[highlight] ||
      theme?.palette?.secondary?.light;

    const sxButton = Object.assign(
      {
        display: !floatIcon && icon ? "grid" : "block",
        padding: 2,
        gridTemplateColumns: !floatIcon && icon && "4.5rem 1fr",
        columnGap: 2,
        color: theme?.palette?.[highlight]?.constrastText || "#fff",
        "&:hover": {
          background: "none",
        },
        "& > img:first-child, &:hover > svg:first-child": {
          transitionDuration: theme.transitions.duration.standard,
          transitionProperty: "opacity, transform",
        },
        "&:hover > img:first-child, &:hover > svg:first-child": {
          transform: "scale(1.1)",
        },
      },
      highlight
        ? {
            borderColor: cssRgb(highlightBorderColor, 0.9),
            backgroundColor: cssRgb(highlightBackgroundColor, 0.5),
            background: `linear-gradient(30deg, ${cssRgb(
              highlightBackgroundColor,
              0.1
            )} 0%, ${highlightBackgroundColor} 100%)`,
            "&:hover": {
              backgroundColor: cssRgb(highlightBackgroundColor, 0.5),
              background: `linear-gradient(30deg, ${cssRgb(
                highlightBackgroundColor,
                0.1
              )} 0%, ${highlightBackgroundColor} 100%)`,
            },
          }
        : {}
    );

    const sxIcon = Object.assign(
      {
        color: theme.palette.text.primary,
        width: "100%",
        objectFit: "scale-down",
      },
      floatIcon
        ? {
            float: "left",
            margin: "0 0.5rem -1px 0",
            maxWidth: "3rem",
            maxHeight: "3rem",
            opacity: 1,
          }
        : {
            gridRow: "1/3",
            gridColumnStart: 1,
            alignSelf: "center",
            maxWidth: "4.5rem",
            maxHeight: "4.5rem",
            opacity: "var(--card-content-opacity)",
          }
    );

    const sxTitle = {
      "&::after": {
        content: titleRule ? "''" : "none",
        display: "block",
        marginBlock: "calc(0.95rem - 1px) 0.55rem",
        borderBottom: "1px solid " + theme.palette.text.primary,
      },
    };

    console.log(link || pascalCase(title));

    const linkProps =
      link || props.disabled
        ? { href: link, target: "_blank", rel: "noreferrer" }
        : { component: Link, to: pascalCase(title) };

    return (
      <>
        <DestinyDialog title={title} background={icon}>
          {modalContent}
        </DestinyDialog>
        <Button variant="triumph" {...linkProps} sx={sxButton} {...props}>
          <Img src={icon} sx={sxIcon} />
          <Typography variant="h4" sx={sxTitle}>
            {title}
          </Typography>
          <Typography variant="body1">{children}</Typography>
        </Button>
      </>
    );
  }
);

Card.propTypes = {
  title: PropTypes.string,
  titleRule: PropTypes.bool,
  modalContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    ),
  ]),
  link: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  floatIcon: PropTypes.bool,
  highlight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  customModal: PropTypes.bool,
};

Card.defaultProps = {
  floatIcon: false,
  highlight: false,
  customModal: false,
};
