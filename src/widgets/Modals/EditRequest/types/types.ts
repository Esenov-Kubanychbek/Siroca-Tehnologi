import { Dispatch, SetStateAction } from "react";
import { ICreateRequest } from "../../CreateRequest/api/createRequestApi";

export interface IEditRequest {
    request: ICreateRequest;
    setModal: Dispatch<SetStateAction<boolean>>;
    setRequest: Dispatch<SetStateAction<ICreateRequest>>;
}
