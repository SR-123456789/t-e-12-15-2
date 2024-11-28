import Link from "next/link";
import { GrFavorite } from "react-icons/gr";

export function FavoriteLink() {
    return (
        <Link href="/favorite" className="flex items-center">
            <p className="px-1">Favorite</p>
            <GrFavorite />
        </Link>
    );
}