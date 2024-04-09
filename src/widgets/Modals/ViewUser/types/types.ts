import { ChangeEvent } from "react";

export interface IRole {
    change?: (e: ChangeEvent<HTMLInputElement>) => void;
    role?: string | null;
}
