<<<<<<< HEAD:src/widgets/Admin/Companies/api/componiesApi.ts
import { create } from 'zustand';
import axios from 'axios';
import { Data } from 'iconsax-react';
import { IUserGet } from '../../../../shared/types/userTypes';

export interface dataAddCompanies {
    name: string,
    company_code: string,
    country: string,
    managers: (number | undefined)[],
    main_manager:  number | null,
    domain: string  
=======
import { create } from "zustand";
import axios from "axios";
import { Data } from "iconsax-react";
import { BASE_URL } from "./variables/variables";

export interface dataAddCompanies {
    name: string;
    company_code: string;
    country: string;
    managers: [];
    main_manager: number | null;
    domain: string;
>>>>>>> 4371d691dd77e201cbd8264a285db11e36dca43a:src/shared/componiesApi.ts
}
export interface userCompany {
    first_name: string,
    last_name: string,
    id: number,
}
export interface dataCompanies {
<<<<<<< HEAD:src/widgets/Admin/Companies/api/componiesApi.ts
    id: number,
    count_users: string,
    users: userCompany[],
    name: string,
    company_code: string,
    country: string,
    created_at:string | null| string,
    main_manager:number,
    managers: (number | undefined)[],
    domain: string,
    last_updated_at: string,
    count_applications: string
=======
    id: number;
    count_users: string;
    users: string[];
    name: string;
    company_code: string;
    country: string;
    created_at: string;
    main_manager: [];
    managers: string;
    domain: string;
>>>>>>> 4371d691dd77e201cbd8264a285db11e36dca43a:src/shared/componiesApi.ts
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
    getUsers:() => Promise<void>;
}

const fetchData = async () => {
    try {
        const response = await axios.get('http://13.60.17.217:80/api/v1/company/list/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem("access")}`,
            },
        });
<<<<<<< HEAD:src/widgets/Admin/Companies/api/componiesApi.ts
        console.log(response);
        
        return response.data.results    

=======
        return response.data.results;
>>>>>>> 4371d691dd77e201cbd8264a285db11e36dca43a:src/shared/componiesApi.ts
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        return null;
    }
};

const addCompanies = async (datas: dataAddCompanies) => {
    console.log(datas);

    try {
<<<<<<< HEAD:src/widgets/Admin/Companies/api/componiesApi.ts
        const response = await axios.post('http://13.60.17.217:80/api/v1/company/create/', datas,
        {headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`
        }});
=======
        const response = await axios.post(`${BASE_URL}/company/create/`, datas, {
            headers: {
                Authorization: `JWT ${localStorage.getItem("access")}`,
            },
        });
>>>>>>> 4371d691dd77e201cbd8264a285db11e36dca43a:src/shared/componiesApi.ts
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
<<<<<<< HEAD:src/widgets/Admin/Companies/api/componiesApi.ts
        const response = await axios.delete(`http://13.60.17.217:80/api/v1/company/${id}/`)
        return response
=======
        const response = await axios.delete(`http://16.171.68.251:80/api/v1/company/${id}/`);
        console.log(response.data);
        return response.data;
>>>>>>> 4371d691dd77e201cbd8264a285db11e36dca43a:src/shared/componiesApi.ts
    } catch (error) {
        console.error("Ошибка при удалении компании:", error);
        return null;
    }
};

<<<<<<< HEAD:src/widgets/Admin/Companies/api/componiesApi.ts
const getUser = async () => {
    try {
        const response = await axios.get('http://13.60.17.217:80/api/v1/users/profiles/');

        return response.data.results
    } catch (error) {
        console.log(error, "getUserError");
    }
}



=======
>>>>>>> 4371d691dd77e201cbd8264a285db11e36dca43a:src/shared/componiesApi.ts
const useDataStoreComponies = create<DataStore>((set) => ({
    data: [],
    modalViewCompany: false,
    selectedCompanyData: null,
    idCompany: 0,
    users: [],
    openModalView: () => {
        set({modalViewCompany: true})
    },
    closeModalView: () => {
        set({modalViewCompany: false})
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
<<<<<<< HEAD:src/widgets/Admin/Companies/api/componiesApi.ts
         await deleteCompanies(id);
         const newData = await fetchData();
            if (newData !== null) {
                set({ data: newData });
                console.log(newData);
                
            }
    },
    getUsers: async () => {
        const users = await getUser();
        set({users: users})
    }
=======
        const deletes = await deleteCompanies(id);
        if (deletes) {
            await fetchData();
        }
    },
>>>>>>> 4371d691dd77e201cbd8264a285db11e36dca43a:src/shared/componiesApi.ts
}));

export { useDataStoreComponies };
