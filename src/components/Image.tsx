import classNames from "classnames";
import logoWhite from "../assets/images/footer-bg/logo-white.png";
import logoNoBG from "../assets/brand/logo.png";
import { useEffect, useState } from "react";

interface ImageProps {
  logo?: boolean;
  noBg?: boolean;
  src?: string;
  alt?: string;
  className?: string;
}

function Image({
  logo = false,
  noBg = false,
  src,
  alt,
  className,
}: ImageProps) {
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    if (logo && !noBg) {
      setLogoSrc(logoWhite);
    }

    if (logo && noBg) {
      setLogoSrc(logoNoBG);
    }
  }, []);
  
  const classes = classNames(className);
  return <img className={classes} src={logoSrc ?? src} alt="" />;
}

export default Image;
