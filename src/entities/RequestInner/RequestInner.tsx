import { FC } from "react";
import { IRequestInner } from "./model/types";

export const RequestInner: FC<IRequestInner> = (props) => {
    
    const { content, width } = props;
    return (
        <div
            style={{
                width: `${width}px`,
                height: "56px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: "700",
            }}
        >
            {content}
        </div>
    );
};
