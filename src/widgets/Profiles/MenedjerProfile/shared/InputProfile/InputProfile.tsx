import React from "react";
import { propsInput } from "../../types/types";
import "./InputProfile.scss";

const InputProfile: React.FC<propsInput> = ({ name, placeholder }) => {
    return (
        <input
            className="InputProfile"
            name={name}
            placeholder={placeholder}
        />
    );
};

export default InputProfile;
