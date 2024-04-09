import { ChangeEvent } from "react";

export interface IInput {
    width: number;
    placeholder: string;
    height?: number;
    background?: string;
    value?: string | number;
    defaultValue?: string | number;
    name?: string;
    type?: string;
    paddingLeft?:number;
    allData?: string | boolean;
    datas?: string; 
    change?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?:() => void;
}
