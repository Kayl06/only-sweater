import { InfoProps } from "../../utils/Info";
import InfoItem from "./InfoItem";

function Info({ items }: InfoProps) {
  const renderedItems = items.map((item, index) => {
    return <InfoItem key={index} {...item} />;
  });

  return <div className="info flex flex-col">{renderedItems}</div>;
}

export default Info;
