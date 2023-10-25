import { ElementType } from "react";
import { buttonStyles } from "../buttons/Button";
import { twMerge } from "tailwind-merge";

type ScrollSideBarItemsProps = {
    Icon: ElementType;
    title: string;
    url: string;
};

export function ScrollSmallSideBarItems({ Icon, title, url }: ScrollSideBarItemsProps) {
    return (
        <a
            href={url}
            className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}
        >
            <Icon className="w-6 h-6" />
            <div className="text-sm">{title}</div>
        </a>
    );
}
