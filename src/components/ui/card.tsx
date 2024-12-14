import Image from "next/image";
import { mockDataItems } from "@/mocks/product";

type Props = {
  image: string;
  name: string;
  url: string;
};

export function Card(props: Props) {
  return (
    <a href={props.url} className="h-[300px]">
      <Image
        src={props.image}
        alt={mockDataItems[0].Item.itemName}
        width={128}
        height={128}
      />
      <h2 className="text-center text-sm mt-2 w-32 line-clamp-4">
        {props.name}
      </h2>
    </a>
  );
}
