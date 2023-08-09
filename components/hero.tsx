type Props = {
    link: string;
    linkText: string;
};

function NavLink({ link, linkText }: Props) {
    return (
        <a
            href={link}
            className="w-full h-full flex items-center rounded-full p-4 shadow-inactive hover:shadow-active hover:text-darkbg transition-all duration-300"
        >
            <span
                className="font-bighead uppercase text-center italic text-[5.8vw] 
            sm:text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] heromax:text-6xl leading-neg"
            >
                {linkText}
            </span>
        </a>
    );
}

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 grid-rows-1 max-w-[1800px] m-auto">
                <div className="aspect-square w-full border-white border-2 rounded-full p-1 lg:p-2">
                    <img
                        src="/SubMOASpoonieLogoNoBorder.png"
                        alt="Sub-MOA Spoonie Logo"
                        className="aspect-square w-full rounded-full"
                    />
                </div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden sm:block"></div>
                <div className="aspect-square w-full border-white border-b-2 rounded-full"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hover:animate-spin">
                    <img
                        src="/spoon1.png"
                        alt=""
                        className="aspect-square w-full rounded-full"
                    />
                </div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden md:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden md:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full">
                    <NavLink link="#what" linkText="What is a Sub-MOA Spoonie" />
                    
                </div>
                <div className="aspect-square w-full border-white border-l-2 rounded-full"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full block sm:hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden sm:block hover:animate-spin">
                    <img
                        src="/cane2.png"
                        alt=""
                        className="aspect-square w-full rounded-full"
                    />
                </div>
                <div className="aspect-square w-full border-white border-t-2 rounded-full hidden md:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hover:animate-spin">
                    <img
                        src="/spoon2.png"
                        alt=""
                        className="aspect-square w-full rounded-full"
                    />
                </div>
                <div className="aspect-square w-full border-white border-2 rounded-full">
                    <NavLink link="#challenge" linkText="Sub-MOA Spoonie Challenge" />
                </div>
                <div className="aspect-square w-full border-white border-r-2 rounded-full hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden md:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden sm:block"></div>
                <div className="aspect-square w-full border-white border-r-2 rounded-full"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full">
                    <NavLink link="#merch" linkText="Sub-MOA Spoonie Merch" />
                </div>
                <div className="aspect-square w-full border-white border-t-2 rounded-full hidden lg:block"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full"></div>
                <div className="aspect-square w-full border-white border-2 rounded-full hover:animate-spin">
                    <img
                        src="/cane1.png"
                        alt=""
                        className="aspect-square w-full rounded-full"
                    />
                </div>
                <div className="aspect-square w-full border-white border-2 rounded-full"></div>
                <div className="aspect-square w-full border-white border-t-2 rounded-full block sm:hidden"></div>
            </div>
        </div>
    );
}
