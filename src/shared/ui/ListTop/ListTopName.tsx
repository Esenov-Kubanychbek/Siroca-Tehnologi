import { FC } from "react";

interface IProps {
    width?: number;
    name: string;
    maxWidth?: number;
    minWidth?: number;
}

export const ListTopName: FC<IProps> = (props) => {
    const { width, name } = props;
    return <div style={{ width: `${width}px`, textAlign: "center", maxWidth:`${props.maxWidth}px`,minWidth:`${props.minWidth}px` }}>{name}</div>;
};
