import { ReactNode } from "react";

export type TypographyVariants = "h1" | "h2" | "h3" | "h4" | "button" | "body";

export interface ITags {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    button: string;
    body: string;
}

export type ColorVariants = "blue" | "white" | "black" | "error";

export interface TypographyProps {
    children: ReactNode;
    variant: TypographyVariants;
    className?: string;
    weight?: "bold" | "medium";
    color?: ColorVariants;
    truncate?: number;
    capitalize?: boolean;
}
