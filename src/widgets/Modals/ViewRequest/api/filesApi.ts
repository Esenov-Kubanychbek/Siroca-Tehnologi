import { create } from "zustand";

interface IFile {
    id?: number;
    file: string;
    application?: number;
}

interface IFilesApi {
    imagesList: IFile[];
    setImagesList: (images: IFile[]) => void;
    otherFilesList: IFile[];
    setOtherFilesList: (otherFiles: IFile[]) => void;
    findTypeOfFile: (files: IFile[]) => void;
}

export const filesApi = create<IFilesApi>((set) => ({
    imagesList: [],
    setImagesList: (images) => {
        set({ imagesList: images });
    },
    otherFilesList: [],
    setOtherFilesList: (otherFiles) => {
        set({ otherFilesList: otherFiles });
    },
    findTypeOfFile: (files) => {
        files.forEach((fileObj) => {
            const isImage =
                fileObj.file.endsWith(".jpg") ||
                fileObj.file.endsWith(".jpeg") ||
                fileObj.file.endsWith(".png") ||
                fileObj.file.endsWith(".gif") ||
                fileObj.file.endsWith(".svg");
            if (isImage) {
                set((prevState) => ({ imagesList: [...prevState.imagesList, fileObj] }));
            } else {
                set((prevState) => ({ otherFilesList: [...prevState.otherFilesList, fileObj] }));
            }
        });
    },
}));
