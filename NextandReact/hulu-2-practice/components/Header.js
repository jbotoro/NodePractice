import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
import Image from "next/image";
import HeaderItem from "./HeaderItem";


function Header() {
    return (
        <header className=''>
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image 
                alt = "Hulu Image"
                className="object-contain"
                src = 'https://links.papareact.com/ua6'
                width = {200}
                height = {100}
            />
        </header>
    )
}

export default Header
