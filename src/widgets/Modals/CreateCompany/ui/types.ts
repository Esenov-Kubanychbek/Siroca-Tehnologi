import { ChangeEvent } from "react";

export interface ISelect {
    dataOption: string[] | undefined | number[];
    text?: string;
    width?: number;
    value?: string | number;
    name?: string;
    type?: string;
    change?: (e: ChangeEvent<HTMLSelectElement>) => void;
}
