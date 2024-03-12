import { FC } from "react";

export const StatusInner: FC<{ count: number }> = ({ count }) => {
    return <div>{count}</div>;
};
