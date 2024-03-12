import React from "react";
import { propsInput } from "../../types/types";
import "./InputProfile.scss";

const InputProfile: React.FC<propsInput> = ({ name, placeholder, type }) => {
    return (
        <input
            type={type}
            className="InputProfile"
            name={name}
            placeholder={placeholder}
        />
    );
};

export default InputProfile;
