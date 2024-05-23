import { create } from 'zustand';
import axios from 'axios';
import { Data } from 'iconsax-react';
import { DataAddCompanies } from '../../../Modals/ViewCompany/api/dataInputCompanies';
import { ChangeEvent } from 'react';
import { authToken, BASE_URL } from '../../../../shared/variables/variables';

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
    name: string;
    country: string;
    count_users: string;
    count_applications: string;
    main_manager: string;
    last_updated_at: string;
    created_at: string | null | string;

    users?: userCompany[];
    company_code?: string;
    managers?: (number | undefined)[];
    domain?: string;
}
interface Data {
    data: dataCompanies[];
}
export interface manager {
    id?: number;
    first_name: string;
    surname: string,
    role_type: string,
    full_name: string,
}
export interface user {
    id: number,
    first_name: string,
    last_name: string
}
interface DataStore extends Data {
    fetchDatas: (page: number) => Promise<void>;
    addCompany: (company: dataAddCompanies, page: number) => Promise<void>;
    selectedIdCompany: (id: number) => Promise<void>;
    selectedCompanyData: DataAddCompanies;
    deleteCompany: (id: number, page: number) => Promise<void>;
    newSelectedCompany: (data: DataAddCompanies) => void;
    idCompany: number;
    modalViewCompany: boolean;
    openModalView: () => void;
    closeModalView: () => void;
    changeInputOne: (
        data: DataAddCompanies,
        state: DataAddCompanies | null,
        id: number | undefined,
        mainManager: number | undefined | false,
        maangers: (number | undefined)[],
    ) => void;
    changeInputCompany: (e: ChangeEvent<HTMLInputElement>) => void;
    searchCompanies: (text: string) => Promise<void>;
    searchReset: (data: dataCompanies[]) => void;
    addedNewManagers: (comopanies: DataAddCompanies, data: (number | undefined)[]) => Promise<void>;
    lamp: (text: string) => Promise<void>;
    countCompany: number;
}

const fetchData = async (page?: number) => {
    try {
        if (page !== undefined) {
            const response = await axios.get(`${BASE_URL}/company/list/?page=${page}`, authToken);
            return response.data;
        }
    } catch (error) {
        console.error(error, "getCompaniesListError");
        return null;
    }
};

const addCompanies = async (datas: dataAddCompanies) => {
    try {
        const response = await axios.post(`${BASE_URL}/company/create/`, datas, authToken);
        return response.data;
    } catch (error) {
        console.error("Ошибка при добавлении компании:", error);
        return null;
    }
};
const deleteCompanies = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/company/edit/${id}/`, authToken);
        return response;
    } catch (error) {
        console.error("Ошибка при удалении компании:", error);
        return null;
    }
};



const selectedId = async (id: number | undefined) => {
    try {
        const response = await axios.get(`${BASE_URL}/company/detail/${id}/`, authToken);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const useDataStoreComponies = create<DataStore>((set) => ({
    data: [],
    countCompany: 0,
    modalViewCompany: false,
    selectedCompanyData: {
        name: "",
        company_code: "",
        country: "",
        managers: [],
        main_manager: 0,
        domain: "",
    },
    idCompany: 0,

    openModalView: () => {
        set({ modalViewCompany: true });
    },
    closeModalView: () => {
        set({ modalViewCompany: false });
    },
    fetchDatas: async (page: number) => {
        const datas = await fetchData(page);
        if (datas !== null) {
            set({ data: datas.data });
            set({ countCompany: datas.count });
        }
    },
    addCompany: async (company, page) => {
        await addCompanies(company);
        const newData = await fetchData(page);
        set({ countCompany: newData.count });

        if (newData !== null) {
            set({ data: newData.data });
        }
    },
    selectedIdCompany: async (id: number) => {
        const data = await selectedId(id);

        set((state) => {
            return {
                ...state,
                selectedCompanyData: data,
                idCompany: id,
            };
        });
    },
    deleteCompany: async (id, page) => {
        await deleteCompanies(id);
        const newData = await fetchData(page);
        if (newData !== null) {
            set({ data: newData.data });
            set({ countCompany: newData.count });
        }
    },
    changeInputCompany: (e) => {
        const { name, value } = e.target;

        set((state) => ({
            ...state,
            selectedCompanyData: {
                ...state.selectedCompanyData,
                [name]: value,
            },
        }));
        console.log();
        
    },

    changeInputOne: async (data, state, id, mainManager, managers) => {
        console.log(id);
        if (state !== null) {
            const datas = {
                id: id,
                name: data.name ? data.name : state.name,
                company_code: data.company_code ? data.company_code : state.company_code,
                country: data.country ? data.country : state.country,
                main_manager: mainManager ? Number(mainManager) : null,
                domain: data.domain ? data.domain : state.domain,
                managers: managers,
            };
            try {
                const response = await axios.put(`${BASE_URL}/company/edit/${id}/`, datas, authToken);
                if (response.data) {
                    fetchData();
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    searchCompanies: async (text) => {
        try {
            const response = await axios.get(`${BASE_URL}/company/list/?search=${text}`, authToken);

            set({ data: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },
    searchReset: (data) => {
        set({ data: data });
    },
    addedNewManagers: async (companies, managers) => {
        const data = {
            id: companies.id,
            name: companies.name,
            company_code: companies.company_code,
            country: companies.country,
            main_manager: companies.main_manager,
            domain: companies.domain,
            managers: managers,
        };
        try {
            const response = await axios.put(`${BASE_URL}/company/edit/${companies.id}/`, data, authToken);
            if (response.data) {
                const selectedCompany = await selectedId(companies.id);
                set({ selectedCompanyData: selectedCompany });
            }
        } catch (error) {
            console.log(error);
        }
    },
    newSelectedCompany: (data) => {
        set({ selectedCompanyData: data });
    },
    lamp: async (text) => {
        try {
            const response = await axios.get(`${BASE_URL}/company/code/?company_name=${text}`);
            return response.data.codes;
        } catch (error) {
            console.log(error);
        }
    },
}));

export { useDataStoreComponies };
