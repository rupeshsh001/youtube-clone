import { ElementType } from "react";
import { buttonStyles } from "../buttons/Button";
import { twMerge } from "tailwind-merge";

type ScrollLargeSideBarItemsProps = {
    Icon: ElementType | string;
    title: string;
    url: string;
    isActive?: boolean;
};

export function ScrollLargeSideBarItems({ Icon, title, url, isActive = false }: ScrollLargeSideBarItemsProps) {
    return (
        <a
            href={url}
            className={twMerge(
                buttonStyles({ variant: "ghost" }),
                `w-full flex items-center rounded-lg gap-4 p-3 ${
                    isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
                }`
            )}
        >
            {typeof Icon === "string" ? <img src={Icon} className="w-6 h-6 rounded-full" /> : <Icon className="w-6 h-6" />}

            <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
        </a>
    );
}
