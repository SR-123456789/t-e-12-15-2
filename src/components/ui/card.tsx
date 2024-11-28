import Image from "next/image";
import { mockDataItems } from "@/mocks/product";

export function Card() {
    return <a href={mockDataItems[0].Item.itemUrl} className="h-[300px]">
        <Image
            src={mockDataItems[0].Item.mediumImageUrls[0].imageUrl}
            alt={mockDataItems[0].Item.itemName}
            width={128}
            height={128} />
        <h2 className="text-center text-sm mt-2 w-32 line-clamp-5">
            {mockDataItems[0].Item.itemName}
        </h2>
    </a>;
}
