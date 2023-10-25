import { ReactNode, createContext, useState, useContext, useEffect } from "react";

type SideBarProvider = {
    children: ReactNode;
};

type SideBarContextType = {
    isLargeOpen: boolean;
    isSmallOpen: boolean;
    toggle: () => void;
    close: () => void;
};

const SideBarContext = createContext<SideBarContextType | null>(null);

export function useSidebarContext() {
    const value = useContext(SideBarContext);
    if (value == null) throw Error("Cannot use outside of SidebarProvider");

    return value;
}

export function SideBarProvider({ children }: SideBarProvider) {
    const [isLargeOpen, setIsLargeOpen] = useState<boolean>(false);
    const [isSmallOpen, setIsSmallOpen] = useState<boolean>(false);

    function isScreenSmall() {
        return window.innerWidth < 1024;
    }

    function toggle() {
        if (isScreenSmall()) {
            setIsSmallOpen((prev) => !prev);
        } else {
            setIsLargeOpen((prev) => !prev);
        }
    }

    function close() {
        if (isScreenSmall()) {
            setIsSmallOpen(false);
        } else {
            setIsLargeOpen(false);
        }
    }

    useEffect(() => {
        const handler = () => {
            if (!isScreenSmall()) setIsSmallOpen(false);
        };

        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    return <SideBarContext.Provider value={{ isLargeOpen, isSmallOpen, toggle, close }}>{children}</SideBarContext.Provider>;
}
