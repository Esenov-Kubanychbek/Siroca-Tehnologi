import React from "react";
import "./Button.scss";
import { propsButton } from "../../types/types";

const Button: React.FC<propsButton> = ({ className, value }) => {
    return <button className={`Button ${className}`}>{value}</button>;
};

export default Button;
