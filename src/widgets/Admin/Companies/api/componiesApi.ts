import { create } from 'zustand';
import axios from 'axios';
import { Data } from 'iconsax-react';
import { IUserGet } from '../../../../shared/types/userTypes';
import { DataAddCompanies } from '../../../Modals/ViewCompany/api/dataInputCompanies';
import { ChangeEvent } from 'react';
import { authToken } from '../../../../shared/variables/variables';

export interface dataAddCompanies {
    name: string,
    company_code: string,
    country: string,
    managers: (number | undefined)[],
    main_manager: number | null,
    domain: string
}
export interface userCompany {
    first_name: string;
    last_name: string;
    id: number;
}
export interface dataCompanies {
    id: number,
    name: string,
    country: string,
    count_users: string,
    count_applications: string
    main_manager: number,
    last_updated_at: string,
    created_at: string | null | string,

    users?: userCompany[],
    company_code?: string,
    managers?: (number | undefined)[],
    domain?: string,
}
interface Data {
    data: dataCompanies[];
}

interface DataStore extends Data {
    fetchDatas: () => Promise<void>;
    addCompany: (company: dataAddCompanies) => Promise<void>;
    selectedIdCompany: (id: number) => Promise<void>;
    selectedCompanyData: DataAddCompanies;
    deleteCompany: (id: number) => Promise<void>;
    newSelectedCompany: (data: DataAddCompanies) => void;
    idCompany: number;
    modalViewCompany: boolean;
    openModalView: () => void;
    closeModalView: () => void;
    users: IUserGet[];
    getUsers: () => Promise<void>;
    changeInputOne: (data: DataAddCompanies, state: DataAddCompanies | null, id: number | undefined, mainManager: number | undefined | false, maangers: (number | undefined)[]) => void;
    changeInputCompany: (e: ChangeEvent<HTMLInputElement>) => void;
    searchCompanies: (text: string) => Promise<void>;
    searchReset: (data: dataCompanies[]) => void;
    addedNewManagers: (comopanies: DataAddCompanies, data: (number | undefined)[]) => Promise<void>;
    lamp: (text: string) => Promise<void>;
}

const fetchData = async () => {
    try {
        const response = await axios.get('http://13.51.161.14:80/api/v1/company/list/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem("access")}`,
            },
        });

        return response.data

    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        return null;
    }
};

const addCompanies = async (datas: dataAddCompanies) => {
    console.log(datas);

    try {
        const response = await axios.post('http://13.51.161.14:80/api/v1/company/create/', datas,
            {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('access')}`
                }
            });
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
        const response = await axios.delete(`http://13.51.161.14:80/api/v1/company/edit/${id}/`, authToken)
        return response
    } catch (error) {
        console.error("Ошибка при удалении компании:", error);
        return null;
    }
};

const getUser = async () => {
    try {
        const response = await axios.get('http://13.51.161.14:80/api/v1/users/profiles/', authToken);
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error, "getUserError");
    }
}

const selectedId = async (id: number | undefined) => {
    try {
        const response = await axios.get(`http://13.51.161.14:80/api/v1/company/detail/${id}/`, authToken);
        return response.data;
    } catch (error) {
        console.log(error);

    }
}



const useDataStoreComponies = create<DataStore>((set) => ({
    data: [],
    modalViewCompany: false,
    selectedCompanyData: {
        name: '',
        company_code: '',
        country: '',
        managers: [],
        main_manager: 0,
        domain: '',
    },
    idCompany: 0,
    users: [],

    openModalView: () => {
        set({ modalViewCompany: true })
    },
    closeModalView: () => {
        set({ modalViewCompany: false })
    },
    fetchDatas: async () => {
        const datas = await fetchData();
        if (datas !== null) {
            set({ data: datas });
            console.log(datas);
        }
    },
    addCompany: async (company) => {
        await addCompanies(company);
        const newData = await fetchData();
        if (newData !== null) {
            set({ data: newData });
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
        set({ users: users })
    },
    changeInputCompany: (e) => {
        const { name, value } = e.target;


        set((state) => ({
            ...state,
            selectedCompanyData: {
                ...state.selectedCompanyData,
                [name]: value,
            }
        }));
    },

    changeInputOne: async (data, state, id, mainManager, managers) => {

        if (state !== null) {
            const datas = {
                id: id,
                name: data.name ? data.name : state.name,
                company_code: data.company_code ? data.company_code : state.company_code,
                country: data.country ? data.country : state.country,
                main_manager: Number(mainManager),
                domain: data.domain ? data.domain : state.domain,
                managers: managers,
            }
            console.log(datas.managers);
            console.log(datas.main_manager);
            try {
                const response = await axios.put(`http://13.51.161.14:80/api/v1/company/edit/${id}/`, datas, authToken);
                console.log(response);
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
            const response = await axios.get(`http://13.51.161.14:80/api/v1/company/list/?search=${text}`, authToken);
            set({ data: response.data })
        } catch (error) {
            console.log(error);

        }
    },
    searchReset: (data) => {
        set({ data: data })
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
        }
        try {
            const response = await axios.put(`http://13.51.161.14:80/api/v1/company/edit/${companies.id}/`, data, authToken);
            console.log(response);
            if (response.data) {
               const selectedCompany = await selectedId(companies.id);
               set({selectedCompanyData: selectedCompany});
            }

        } catch (error) {
            console.log(error);

        }
    },
    newSelectedCompany: (data) => {
        set({selectedCompanyData: data});
    },
    lamp: async ( text ) => {
        try {
            const response = await axios.get(`http://13.51.161.14:80/api/v1/company/code/?company_name=${text}`);
            console.log(response);
            
            return response.data.codes;
        } catch (error) {
            console.log();
            
        }
    }
}))

export { useDataStoreComponies };
