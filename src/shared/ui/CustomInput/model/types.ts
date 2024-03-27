import { ChangeEvent } from "react";

export interface IInput {
    width: number;
    placeholder: string;
    height?: number;
    background?: string;
    value?: string ;
    name?: string;
    type?: string;
    change?: (e: ChangeEvent<HTMLInputElement>) => void;
}
