import { create } from "zustand";
import axios from "axios";
import { Data } from "iconsax-react";
import { IUserGet } from "../../../../shared/types/userTypes";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";

export interface dataAddCompanies {
    name: string;
    company_code: string;
    country: string;
    managers: (number | undefined)[];
    main_manager: number | null;
    domain: string;
}
export interface userCompany {
    first_name: string;
    last_name: string;
    id: number;
}
export interface dataCompanies {
    id: number;
    count_users: string;
    users: userCompany[];
    name: string;
    company_code: string;
    country: string;
    created_at: string | null | string;
    main_manager: number;
    managers: (number | undefined)[];
    domain: string;
    last_updated_at: string;
    count_applications: string;
}
interface Data {
    data: dataCompanies[];
}

interface DataStore extends Data {
    fetchDatas: () => Promise<void>;
    addCompany: (company: dataAddCompanies) => Promise<void>;
    selectedIdCompany: (id: number) => void;
    selectedCompanyData: dataCompanies | null;
    deleteCompany: (id: number) => Promise<void>;
    idCompany: number;
    modalViewCompany: boolean;
    openModalView: () => void;
    closeModalView: () => void;
    users: IUserGet[];
    getUsers: () => Promise<void>;
}

const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/company/list/?page=1`, authToken);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        return null;
    }
};

const addCompanies = async (datas: dataAddCompanies) => {
    console.log(datas);
    try {
        const response = await axios.post(`${BASE_URL}/company/create/`, datas, authToken);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(datas);
        console.error("Ошибка при добавлении компании:", error);
        return null;
    }
};
const deleteCompanies = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/company/${id}/`, authToken);
        return response;
    } catch (error) {
        console.error("Ошибка при удалении компании:", error);
        return null;
    }
};

const getUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users/profiles/?page=1`, authToken);
        return response.data;
    } catch (error) {
        console.log(error, "getUserError");
    }
};

const useDataStoreComponies = create<DataStore>((set) => ({
    data: [],
    modalViewCompany: false,
    selectedCompanyData: null,
    idCompany: 0,
    users: [],
    openModalView: () => {
        set({ modalViewCompany: true });
    },
    closeModalView: () => {
        set({ modalViewCompany: false });
    },
    fetchDatas: async () => {
        const datas = await fetchData();
        if (datas !== null) {
            set({ data: datas });
        }
    },
    addCompany: async (company) => {
        await addCompanies(company);
        const newData = await fetchData();
        if (newData !== null) {
            set({ data: newData });
        }
    },
    selectedIdCompany: (id: number) => {
        if (id !== null) {
            set((state) => {
                let selectedCompany = null;
                if (id !== null) {
                    selectedCompany = state.data.find((item) => item.id === id);
                }
                console.log(selectedCompany);

                return {
                    ...state,
                    selectedCompanyData: selectedCompany,
                    idCompany: id,
                };
            });
        }
    },
    deleteCompany: async (id: number) => {
        await deleteCompanies(id);
        const newData = await fetchData();
        if (newData !== null) {
            set({ data: newData });
            console.log(newData);
        }
    },
    getUsers: async () => {
        const users = await getUser();
        set({ users: users });
    },
}));

export { useDataStoreComponies };
