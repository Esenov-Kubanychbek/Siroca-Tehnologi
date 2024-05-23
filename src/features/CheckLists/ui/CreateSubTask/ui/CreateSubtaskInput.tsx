import React, { useEffect, useState, useRef, useMemo, Fragment, forwardRef, memo, TextareaHTMLAttributes } from "react";
import styles from "../CreateSubTask.module.scss"

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    keyWords?: string[];
    defaultValue?: string;
}

export const CreateSubtaskInput = forwardRef<HTMLTextAreaElement, InputProps>(({ value, onChange, keyWords = [], defaultValue = "", ...other }, ref) => {
    const keyWordsRef = useRef<HTMLDivElement>(null);
    const [innerValue, setInnerValue] = useState<string>(defaultValue);
    const [scrollValue, setScrollValue] = useState<number>(0);

    const inputValue = value !== undefined ? value : innerValue;
    const _keyWords = useMemo(() => new Set(keyWords), [keyWords]);

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(e);
        setInnerValue(e.target.value);
    };
    const scrollHandler = (e: React.WheelEvent<HTMLDivElement>) => {
        setScrollValue(e.currentTarget.scrollLeft);
    };
    const submitHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.keyCode === 13 || e.key === "Enter" || e.which === 13) {
            if (!e.repeat && e.currentTarget.form) {
                e.currentTarget.form.submit();
            }
            e.preventDefault();
        }
    };

    useEffect(() => {
        if (keyWordsRef.current) {
            keyWordsRef.current.scrollLeft = scrollValue;
        }
    }, [scrollValue]);

    return (
        <div className={styles.Input}>
            <div
                ref={keyWordsRef}
                className="Input__keyWordsWrapper"
                onWheel={scrollHandler}
            >
                {inputValue.split(" ").map((word, i) =>
                    _keyWords.has(word.toLowerCase()) ? (
                        <Fragment key={word + i}>
                            <span className="Input__keyWord">{word}</span>&nbsp;
                        </Fragment>
                    ) : (
                        <Fragment key={word + i}>{word}&nbsp;</Fragment>
                    ),
                )}
            </div>
            <textarea
                {...other}
                name="text"
                className="Input__field"
                ref={ref}
                value={inputValue}
                onChange={changeHandler}
                onKeyDown={submitHandler}
                rows={1}
            />
        </div>
    );
});

const MemoInput = memo(CreateSubtaskInput);

export default MemoInput;
