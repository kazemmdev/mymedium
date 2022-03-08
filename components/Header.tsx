import Link from "next/link";
import Image from "next/image";

const Header = ({color = ''}) => {
    return (
        <header className={"w-full border-black border-b " +(color?? '')}>
            <div className="max-w-7xl mx-auto flex justify-between p-4 md:px-9 mx-auto">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <a>
                            <Image height={34} width={160} src={"/logo.svg"}/>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center space-x-5">
                    <div className="hidden md:inline-flex items-center space-x-5">
                        <div className="cursor-pointer">Our Story</div>
                        <div className="cursor-pointer">Membership</div>
                        <div className="cursor-pointer">Write</div>
                    </div>
                    <div className="hidden sm:inline cursor-pointer">Sign in</div>
                    <div className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">
                        Get Started
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;