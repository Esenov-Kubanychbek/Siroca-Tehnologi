import { FC } from "react";
import { IRequestInner } from "./model/types";

export const RequestInner: FC<IRequestInner> = (props) => {
    const { content, width } = props;
    return <div style={{ width: `${width}px` }}>{content}</div>;
};
