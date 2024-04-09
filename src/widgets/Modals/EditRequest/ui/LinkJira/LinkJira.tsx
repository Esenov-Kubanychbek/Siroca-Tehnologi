import { ChangeEvent, FC } from "react";
import styles from "./LinkJira.module.scss";
import { CustomInput } from "../../../../../shared/ui";
import { Link1 } from "iconsax-react";

export const LinkJira: FC<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({ onChange }) => {
    return (
        <div className={styles.LinkJira}>
            <CustomInput
                name="jira"
                width={570}
                height={44}
                placeholder="https://"
                paddingLeft={45}
                change={onChange}
            />
            <Link1
                className={styles.LinkIcon}
                size={24}
                color="#5C5C5C"
            />
        </div>
    );
};
