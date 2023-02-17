import classNames from "classnames";

interface LinkProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
}

function Link({ to, children, className }: LinkProps) {
  const classes = classNames("text-dark-500", className);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();

    console.log("navigate to", to);
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
