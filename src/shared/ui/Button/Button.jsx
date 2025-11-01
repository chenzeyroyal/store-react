import Icon from "../Icon";

import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = (props) => {
  const {
    className = "",
    label,
    href,
    ref,
    type = "button",
    mode = "plate",
    icon,
    onClick,
    isLabelHidden,
    isAccent,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? "a" : "button";
  const title = isLabelHidden ? label : undefined;
  const btnProps = { type };
  const linkProps = { href };
  const specificProps = isLink ? linkProps : btnProps;

  return (
    <Component
      className={classNames(
        className,
        styles.button,
        styles[mode],
        isAccent && styles.accent
      )}
      href={href}
      ref={ref}
      title={title}
      aria-label={title}
      onClick={onClick}
      {...specificProps}
    >
      {icon && <Icon name={icon} />}

      {!isLabelHidden && <span>{label}</span>}
    </Component>
  );
};

export default Button;
