import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react";
import { Button } from "../buttons/Button";
import { useState } from "react";
import { useSidebarContext } from "../../context/SideBarContext";

const PageHeader = () => {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState<boolean>(false);

    return (
        <div className="flex gap-20 lg:gap-10 justify-between p-2 mb-6 mx-4">
            <PageHeaderFirstSection hidden={showFullWidthSearch} />
            <form
                className={`md:flex gap-4 flex-grow justify-center items-center ${
                    showFullWidthSearch ? "flex" : "hidden md:flex"
                }`}
            >
                {showFullWidthSearch && (
                    <Button variant="ghost" size="icon" onClick={() => setShowFullWidthSearch(false)}>
                        <ArrowLeft />
                    </Button>
                )}
                <div className="flex flex-grow max-w-[600px]">
                    <input
                        type="search"
                        placeholder="Search"
                        className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
                    />
                    <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0">
                        <Search />
                    </Button>
                </div>
                <Button size={"icon"} type="button">
                    <Mic />
                </Button>
            </form>
            <div className={`flex flex-shrink-0 items-center md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowFullWidthSearch(true)}>
                    <Search />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Mic />
                </Button>
                <Button variant="ghost" size="icon">
                    <Upload />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell />
                </Button>
                <Button variant="ghost" size="icon">
                    <User />
                </Button>
            </div>
        </div>
    );
};

type PageHeaderFirstSectionProps = {
    hidden?: boolean;
};

export function PageHeaderFirstSection({ hidden }: PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext();
    return (
        <div className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
            <Button variant="ghost" onClick={toggle}>
                <Menu />
            </Button>
            <a href="">
                <img
                    src="https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png"
                    alt="logo image"
                    className="h-6"
                />
            </a>
        </div>
    );
}

export default PageHeader;
