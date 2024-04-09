import { ChangeEvent, FC } from "react";
import { CustomTextArea } from "../../../../../shared/ui";

export const Comments: FC<{onChange: (e: ChangeEvent<HTMLTextAreaElement>)=> void}> = ({onChange}) => {
    return (
        <CustomTextArea
            name="text"
            placeholder="Напишите..."
            height={100}
            width={580}
            variant="TextArea"
            change={onChange}
        />
    );
};
