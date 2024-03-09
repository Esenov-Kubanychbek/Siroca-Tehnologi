import "./Typography.scss";
import { ReactNode } from "react";

interface ITypography {
   variant: string;
   children: ReactNode;
}

export const Typography: React.FC<ITypography> = ({ children, variant }) => {
   return <div className={`${variant}`}>{children}</div>;
};
