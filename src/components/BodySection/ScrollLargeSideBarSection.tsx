import React, { ElementType, ReactNode, useState } from "react";
import { Button } from "../buttons/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

type ScrollLargeSideBarSectionProps = {
    children: ReactNode;
    title?: string;
    visibleItemCount?: number;
};

export function ScrollLargeSideBarSection({
    children,
    title,
    visibleItemCount = Number.POSITIVE_INFINITY,
}: ScrollLargeSideBarSectionProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const childrenArray = React.Children.toArray(children).flat();
    const showExpandButton = childrenArray.length > visibleItemCount;
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount);
    const ButtonIcon: ElementType = isExpanded ? ChevronUp : ChevronDown;
    return (
        <div>
            {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
            {visibleChildren}
            {showExpandButton && (
                <Button
                    variant={"ghost"}
                    className="w-full flex items-center rounded-lg gap-4 p-3"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <ButtonIcon className="w-6 h-6" />
                    <div>{isExpanded ? "Show Less" : "Show More"}</div>
                </Button>
            )}
        </div>
    );
}
