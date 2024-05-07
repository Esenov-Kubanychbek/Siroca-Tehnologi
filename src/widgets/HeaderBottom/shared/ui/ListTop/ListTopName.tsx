import { FC } from "react";

interface IProps {
    width: number;
    name: string;
}

export const ListTopName: FC<IProps> = (props) => {
    const { width, name } = props;
    return <div style={{ width: `${width}px`, textAlign: "center" }}>{name}</div>;
};
