import {CSSProperties, ForwardedRef, forwardRef, ReactNode} from "react";

interface IProps {
    customColor: string;
    wrap: boolean;
    children: string | ReactNode;
    style: CSSProperties;
    as: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export const Text = forwardRef(function Text(
    {
        customColor,
        wrap = false,
        children,
        style,
        as = "span",
    }: IProps,
    forwardedRef: ForwardedRef<HTMLHeadingElement>
) {
    const Tag = as;
    return (
        <Tag
            ref={forwardedRef}

            style={{
                ...style,
                ...(customColor ? {color: customColor} : {}),
            }}
        >
            {children}

        </Tag>
    );
});