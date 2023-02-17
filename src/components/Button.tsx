import classNames from "classnames";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
function Button({ children, className, ...rest }: ButtonProps) {
  const classes = classNames("", className);
  return <button {...rest} className={classes}>{children}</button>;
}

export default Button;
