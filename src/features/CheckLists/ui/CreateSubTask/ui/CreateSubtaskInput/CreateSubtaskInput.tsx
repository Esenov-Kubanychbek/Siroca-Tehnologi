import { FC, useEffect, useRef } from "react";
import styles from "./CreateSubtaskInput.module.scss";
import { Mentions } from "antd";
import { allUsersListApi } from "@/shared/api";

interface ICreateSubTaskInput {
    value: string;
    onChange: (value: string) => void;
}

export const CreateSubtaskInput: FC<ICreateSubTaskInput> = ({ value, onChange }) => {
    const { allUsersNamesList } = allUsersListApi();
    const contentEditableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentEditableRef.current) {
            highlightMentions();
        }
    }, [value]);

    const handleInput = () => {
        if (contentEditableRef.current) {
            const newValue = contentEditableRef.current.innerText;
            onChange(newValue);
        }
    };

    const highlightMentions = () => {
        if (!contentEditableRef.current) return;
        const text = contentEditableRef.current.innerText;
        const highlightedText = text
            .split(" ")
            .map((word, index) => {
                const mention = word.startsWith("@") ? word.substring(1) : null;
                if (mention && allUsersNamesList.includes(mention)) {
                    return `<span class="${styles.UserMention}" key=${index}>${word}</span>`;
                }
                return word;
            })
            .join(" ");
        contentEditableRef.current.innerHTML = highlightedText;
    };
    const options = allUsersNamesList.map((user) => ({ value: user, label: user }));
    return (
        <div className={styles.CreateSubtaskInput}>
            <div
                ref={contentEditableRef}
                contentEditable
                className={styles.ContentEditable}
                onInput={handleInput}
                dangerouslySetInnerHTML={{ __html: value }}
            />
                <Mentions
                    options={options}
                    className={styles.customMention}
                />
        </div>
    );
};
