import { Dispatch, SetStateAction } from "react";
import { IUsersListUser } from "@/shared/types/userTypes";

export interface IUserTypes {
    user: IUsersListUser;
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
}
