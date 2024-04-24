import { ChangeEvent, KeyboardEvent } from "react";

export interface ISearchInput {
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    closeState?: boolean;
    closeFunc?: () => void;
}
