import { FC } from "react";
import { CustomTextArea } from "../../../../../shared/ui";
import { editRequestApi } from "../../api/editRequestApi";

export const ShortDescription: FC = () => {
    const { requestState, requestChange } = editRequestApi();
    return (
        <CustomTextArea
            name="short_description"
            placeholder="Напишите..."
            height={100}
            width={580}
            variant="TextArea"
            change={requestChange}
            value={requestState.short_description === null ? "" : requestState.short_description}
        />
    );
};
