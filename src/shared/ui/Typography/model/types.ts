import { ReactNode } from "react";

export type TypographyVariants = "h1" | "large" | "h2" | "h3" | "button" | "body";

export interface ITags {
    large: string;
    h1: string;
    h2: string;
    h3: string;
    button: string;
    body: string;
}

export type ColorVariants = "black" | "white" | "gold";

export interface TypographyProps {
    children: ReactNode;
    variant: TypographyVariants;
    className?: string;
    weight?: "bold" | "semibold" | "medium" | "regular";
    color?: ColorVariants;
    truncate?: number;
    ellipsis?: boolean;
    capitalize?: boolean;
}
