import { cloneElement, isValidElement, useMemo } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

export const CardInner = ({ children, title, titleRule, icon }) => {
  const icon_element = useMemo(() => {
    if (!icon) return null;

    if (isValidElement(icon))
      return cloneElement(icon, {
        className: classNames("icon", icon.props.className),
      });

    return <img className="icon" src={icon} alt="" />;
  }, [icon]);

  return (
    <>
      {icon_element && icon_element}
      {title && (
        <h4 className={classNames("title", { "title-rule": titleRule })}>
          {title}
        </h4>
      )}
      {children && <section className="card-content">{children}</section>}
    </>
  );
};

CardInner.propTypes = {
  title: PropTypes.string,
  titleRule: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

CardInner.defaultProps = {
  titleRule: false,
};
