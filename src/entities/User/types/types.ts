import { Dispatch, SetStateAction } from "react";
import { IUser } from "../../../shared/types/userTypes";

export interface IUserTypes {
    user: IUser;
    setModal: Dispatch<SetStateAction<boolean>>;
}
