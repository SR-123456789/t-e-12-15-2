
import Link from "next/link";
import { FavoriteLink } from "./favorite-link";

export function Header() {
    return <header className="bg-orange-600 h-16 sticky flex items-center justify-between px-4">
        <Link href="/">
            <h1
                className="text-whitefont-extrabold"
                style={{ fontFamily: "Impact, sans-serif" }}
            >
                サンプル！！ECサイト
            </h1>
        </Link>
        <FavoriteLink />
        {/* <PrimeAlignJustify className="text-4xl mr-5" /> */}
    </header>
}