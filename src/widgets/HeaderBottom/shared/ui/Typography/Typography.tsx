import clsx from "clsx";
import { FC, createElement } from "react";
import styles from "./Typography.module.scss";
import { ITags, TypographyProps } from "./types/types";
import { capitalize as cap } from "../../../shared/helpers/utils";

export const Typography: FC<TypographyProps> = (props) => {
    const { variant, weight = "medium", children, className, color = "", capitalize } = props;

    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        button: "p",
        body: "p",
    };

    const classNamedGenerated = clsx(styles[variant], styles[weight], styles[color], className);

    return createElement(
        Tags[variant as keyof ITags],
        { className: classNamedGenerated },
        capitalize ? cap(children) : children,
    );
};
