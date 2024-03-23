import { ChangeEvent } from "react";

export interface IInput {
    width: number;
    placeholder: string;
    height?: number;
    background?: string;
    value?: string | number | null;
    name?: string;
    type?: string;
    paddingLeft?:number;
    change?: (e: ChangeEvent<HTMLInputElement>) => void;
}
