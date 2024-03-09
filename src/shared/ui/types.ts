import { ReactNode } from "react";

export interface IButton {
   variant: boolean;
   width: number;
   text: string;
}

export interface ICheck {
   name: string;
}

export interface IDate {
   name: string;
   dates: string;
   children: ReactNode;
}

export interface ISelect {
   name?: string;
   width?: number;
}

export interface IInput {
   width: number;
   placeholder: string;
}

export interface IText {
   placeholder: string;
}
