import ItemList from "../components/items/ItemList";
import ItemImage from "../assets/images/items/sweater2.png";
import ViewMore from "../components/ViewMore";
import useIsMobile from "../hooks/use-isMobile";
import { useEffect, useState } from "react";

function ItemsPage() {
  const defaultItems = [
    [
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 10000,
        selectedColor: "bg-[#D9D9D9]",
      },
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 10000,
        selectedColor: "bg-[#fff]",
      },
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 10000,
        selectedColor: "bg-[#F5B05F]",
      },
    ],
    [
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 20000,
        selectedColor: "bg-[#B5D3F7]",
      },
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 20000,
        selectedColor: "bg-[#B5D3F7]",
      },
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 20000,
        selectedColor: "bg-[#B5D3F7]",
      },
    ],
    [
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 30000,
        selectedColor: "bg-[#B5D3F7]",
      },
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 30000,
        selectedColor: "bg-[#B5D3F7]",
      },
      {
        name: "ゆったりしたセーター",
        imagePath: ItemImage,
        price: 30000,
        selectedColor: "bg-[#B5D3F7]",
      },
    ],
  ];

  const isMobile = useIsMobile();
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    if (isMobile) {
      const mobileItems = [
        [
          {
            name: "ゆったりしたセーター",
            imagePath: ItemImage,
            price: 10000,
            selectedColor: "bg-[#D9D9D9]",
          },
          {
            name: "ゆったりしたセーター",
            imagePath: ItemImage,
            price: 10000,
            selectedColor: "bg-[#fff]",
          },
        ],
        [
          {
            name: "ゆったりしたセーター",
            imagePath: ItemImage,
            price: 20000,
            selectedColor: "bg-[#B5D3F7]",
          },
          {
            name: "ゆったりしたセーター",
            imagePath: ItemImage,
            price: 20000,
            selectedColor: "bg-[#B5D3F7]",
          },
        ],
        [
          {
            name: "ゆったりしたセーター",
            imagePath: ItemImage,
            price: 30000,
            selectedColor: "bg-[#F5B05F]",
          },
          {
            name: "ゆったりしたセーター",
            imagePath: ItemImage,
            price: 30000,
            selectedColor: "bg-[#F5B05F]",
          },
        ],
      ];

      setItems(mobileItems);
    } else {
      setItems(defaultItems);
    }
  }, [isMobile]);

  const colors = [
    "bg-[#fff]",
    "bg-[#D9D9D9]",
    "bg-[#B8B8B8]",
    "bg-[#F5B05F]",
    "bg-[#B5D3F7]",
  ];

  return (
    <div className="mt-20 lg:mt-40 mx-8 lg:mx-auto">
      <h1 className="text-3xl text-left lg:text-center mb-10 text-gray-900">
        Items
      </h1>

      <ItemList items={items} colors={colors} />

      <ViewMore className="flex justify-center mt-10" />
    </div>
  );
}

export default ItemsPage;
