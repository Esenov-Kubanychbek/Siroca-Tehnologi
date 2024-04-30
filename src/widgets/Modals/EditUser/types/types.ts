import { ChangeEvent } from "react";
import { Dispatch, SetStateAction } from "react";

export interface IRole {
    change?: (e: ChangeEvent<HTMLInputElement>) => void;
    role?: string | null;
}

export interface IEditUserModal {
    setModal: Dispatch<SetStateAction<boolean>>;
}
