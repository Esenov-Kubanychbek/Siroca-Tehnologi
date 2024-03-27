import { ChangeEvent } from "react";

export interface ISelect {
    dataOption: string[]  | undefined;
    name: string;
    placeholder: string;
    change?: (e: ChangeEvent<HTMLSelectElement>) => void;
}
