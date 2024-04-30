import { Dispatch, SetStateAction } from "react";

export interface ICreateJobTitleModal {
    setModal: Dispatch<SetStateAction<boolean>>;
    setModalSuccess: Dispatch<SetStateAction<boolean>>;
}
