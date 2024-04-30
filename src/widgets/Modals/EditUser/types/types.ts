
import { Dispatch, SetStateAction } from "react"

export interface IViewUser {
    view: boolean
    setView: Dispatch<SetStateAction<boolean>>
}

export interface IEditUserModal {
    setModal: Dispatch<SetStateAction<boolean>>;
}
