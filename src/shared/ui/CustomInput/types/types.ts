import { ChangeEvent } from "react";

export interface IInput {
    id?: string;
    width: number;
    placeholder?: string;
    height?: number;
    background?: string;
    value?: string | number;
    defaultValue?: string | number;
    name?: string;
    type?: string;
    paddingLeft?: number;
    paddinfRight?: number;
    change?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    readOnly?: boolean;
    maxLength?: number;
    color?: string;
    trim?: boolean | string;
}
