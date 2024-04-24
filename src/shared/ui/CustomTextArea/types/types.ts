import { ChangeEvent } from "react";

export interface IText {
    placeholder: string;
    height?: number;
    width?: number;
    variant: string;
    value?: string;
    name?: string;
    change?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean;
}
