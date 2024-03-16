import clsx from "clsx";
import { FC, createElement } from "react";
import styles from "./Typography.module.scss";
import { ITags, TypographyProps } from "./model/types";
import { capitalize as cap } from "../../../shared/helpers/utils";

export const Typography: FC<TypographyProps> = (props) => {
<<<<<<< HEAD
    const { variant, weight = "regular", children, className, color = "", ellipsis, capitalize } = props;

    const Tags = {
        large: "h1",
        h1: "h1",
        h2: "h2",
        h3: "h3",
=======
    const { variant, weight = "medium", children, className, color = "", capitalize } = props;

    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
>>>>>>> 26d228add0e2a806779107b31000adae3a06a644
        button: "p",
        body: "p",
    };

<<<<<<< HEAD
    const classNamedGenerated = clsx(
        styles[variant],
        styles[weight],
        styles[color],
        ellipsis && styles.ellipsis,
        className,
    );
=======
    const classNamedGenerated = clsx(styles[variant], styles[weight], styles[color], className);
>>>>>>> 26d228add0e2a806779107b31000adae3a06a644

    return createElement(
        Tags[variant as keyof ITags],
        { className: classNamedGenerated },
        capitalize ? cap(children) : children,
    );
};
