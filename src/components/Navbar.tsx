import Image from "next/image";
import {ConnectButton} from "@mysten/dapp-kit";
import Link from 'next/link'
import "./navbar.css";
import "./sui-button.css";

const Navbar = () => {
    return (
        <div className="flex justify-between mx-3 md:mx-20 pt-5 my-auto">
            <div className="my-auto">
                <Link href="/">
                    <Image className="logo" src="logo.svg" alt="logo" width="50" height="50"/>
                </Link>
            </div>
            <div className="flex flex-row gap-3 md:gap-20">
                <div className="text-white text-xs md:text-base my-auto">
                    <div className="self-center">
                        <Link href="/staking">
                            Staking
                        </Link>
                    </div>
                </div>
                <div className="text-white text-xs md:text-base my-auto">
                    <div className="self-center">
                        <Link href="https://sui.bluemove.net/profile/223486">
                            NFT
                        </Link>
                    </div>
                </div>
                <ConnectButton className="connectButton" style={{
                    color: "white",
                }}/>
            </div>
        </div>
    )
}
export default Navbar;