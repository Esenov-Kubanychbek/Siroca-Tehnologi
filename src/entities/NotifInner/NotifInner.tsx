import { FC } from "react";
import { INotifInner } from "./model/types";

export const NotifInner: FC<INotifInner> = (props) => {
    const { content, width } = props;
    return <div style={{ width: `${width}px` }}>{content}</div>;
};
