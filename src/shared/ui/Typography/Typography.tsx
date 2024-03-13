// import clsx from "clsx";
// import { FC, createElement } from "react";
// import styles from "./Typography.module.scss";
// import { ITags, TypographyProps } from "./model/types";
// import { capitalize as cap } from "@/shared/helper/utils";

// export const Typography: FC<TypographyProps> = (props) => {
//   const {
//     variant,
//     weight = "regular",
//     children,
//     className,
//     color = "",
//     ellipsis,
//     capitalize,
//   } = props;

//   const Tags = {
//     large: "h1",
//     h1: "h1",
//     h2: "h2",
//     h3: "h3",
//     button: "p",
//     body: "p",
//   };

//   const classNamedGenerated = clsx(
//     styles[variant],
//     styles[weight],
//     styles[color],
//     ellipsis && styles.ellipsis,
//     className
//   );

//   return createElement(
//     Tags[variant as keyof ITags],
//     { className: classNamedGenerated },
//     capitalize ? cap(children) : children
//   );
// };
