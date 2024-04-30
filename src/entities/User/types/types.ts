import { Dispatch, SetStateAction } from "react";
import { IUser } from "../../../shared/types/userTypes";

export interface IUserTypes {
    user: IUser;
<<<<<<< HEAD
    setModal: Dispatch<SetStateAction<boolean>>;
=======
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
}
