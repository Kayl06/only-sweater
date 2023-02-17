export interface IItems {
  name: string;
  imagePath: string;
  price: number;
  selectedColor: string;
}

export interface ItemsProps {
  items: IItems[][];
  colors: string[];
}
