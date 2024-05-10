import axios from 'axios'
import { create } from 'zustand'
import { BASE_URL, authToken } from '../../../../shared/variables/variables'

interface IFile {
    id?: number;
    file: string | File;
    application: number | undefined
    file_name?: string
}

interface ICreateFileApi {
    oneFile: IFile
    createFile: (file: IFile) => void
}

export const createFileApi = create<ICreateFileApi>((set) => ({
    oneFile: {
        id: 0,
        file: "",
        application: 0,
        file_name: ""
    },
    createFile: async (file) => {
        try {
            const formData = new FormData()
            Object.entries(file).forEach(([key, value]) => {
                formData.append(key, value as string);
            });
            const response = await axios.post(`${BASE_URL}/applications/file/`, formData, authToken)
            console.log(response, 'createFileApiSuccess')
            set({oneFile: response.data})
        } catch (error) {
            console.log(error, 'createFileApiError')
        }
    }
}))
