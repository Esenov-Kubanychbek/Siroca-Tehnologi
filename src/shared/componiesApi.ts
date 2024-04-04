import { create } from 'zustand';
import axios from 'axios';
import { Data } from 'iconsax-react';

export interface dataAddCompanies {
    name: string,
    company_code: string,
    country: string,
    managers: string[],
    main_manager:  number | null | string,
    domain: string  
}
export interface userCompany {
    first_name: string,
    last_name: string,
    id: number,
}
export interface dataCompanies {
    id: number,
    count_users: string,
    users: userCompany[],
    name: string,
    company_code: string,
    country: string,
    created_at:string | null| string,
    main_manager:number,
    managers: string,
    domain: string
}
interface Data {
    data: dataCompanies[];
}

interface DataStore extends Data {
    fetchDatas: () => Promise<void>;
    addCompany: (company: dataAddCompanies) => Promise<void>;
    selectedIdCompany: (id: number) => void;
    selectedCompanyData: dataCompanies | null;
    deleteCompany: (id: number ) => Promise<void>;
    idCompany: number;
    modalViewCompany: boolean;
    openModalView: () => void;
    closeModalView: () => void;
}





const fetchData = async () => {
    try {
        const response = await axios.get('http://13.60.17.217/api/v1/company/list/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('access')}`
            }
        });
        return response.data;

    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return null;
    }
};

const addCompanies = async (datas: dataAddCompanies) => {
    console.log(datas);

    try {
        const response = await axios.post('http://13.60.17.217/api/v1/company/create/', datas,
        {headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`
        }});
        console.log(response);
        
        return response.data;

    } catch (error) {
        console.log(datas);
        console.error('Ошибка при добавлении компании:', error);
        return null;
    }
};
const deleteCompanies = async (id:number) => {
    try {
        const response = await axios.delete(`http://13.60.17.217/api/v1/company/${id}/`)
        return response

    } catch (error) {
        console.error('Ошибка при удалении компании:', error);
        return null;
    }
};



const useDataStoreComponies = create<DataStore>((set) => ({
    data: [],
    modalViewCompany: false,
    selectedCompanyData: null,
    idCompany: 0,
    openModalView: () => {
        set({modalViewCompany: true})
    },
    closeModalView: () => {
        set({modalViewCompany: false})
    },
    fetchDatas: async () => {
        const datas = await fetchData();
        if (datas !== null) {
            set({ data: datas.results });
        }
    },
    addCompany: async (company) => {
        
        await addCompanies(company);
        const newData = await fetchData();
            if (newData !== null) {
                set({ data: newData.results });
            }
    },
    selectedIdCompany: (id: number) => {
        if (id !== null) {
            set((state) => {
                let selectedCompany = null
                if(id !== null){
                    selectedCompany = state.data.find(item => item.id === id);
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
                set({ data: newData.results });
            }
    }
}));

export { useDataStoreComponies };
