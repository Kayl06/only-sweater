import Image from "../Image";

function Item({ name, imagePath, price, renderedColors }: any) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "JPY",
  });
  return (
    <div className="item flex-none">
      <Image src={imagePath} alt={name} />
      <div className="item-info">
        <div className="item-colors py-2 flex gap-1">{renderedColors}</div>
        <div className="item-name">{name}</div>
      </div>
      <div className="flex justify-end mt-5">
        <p className="text-gray-600">{formatter.format(price)}</p>
      </div>
    </div>
  );
}

export default Item;
