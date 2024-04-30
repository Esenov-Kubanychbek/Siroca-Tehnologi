import { Dispatch, SetStateAction } from "react";

export interface IModalTypes {
    position: number;
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
    modalReady: boolean;
    setModalReady: Dispatch<SetStateAction<boolean>>;
    modalSuccess: boolean;
    setModalSuccess: Dispatch<SetStateAction<boolean>>;
}
