import { ChangeEvent } from "react";

export interface ICustomDatePicker {
    value: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
