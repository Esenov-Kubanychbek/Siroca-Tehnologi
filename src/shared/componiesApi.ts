import { create } from 'zustand';
import axios from 'axios';
import { Data } from 'iconsax-react';

export interface dataAddCompanies {
    name: string,
    company_code: string,
    country: string,
    managers: [],
    main_manager:  number | null,
    domain: string  
}

export interface dataCompanies {
    id: number,
    count_users: string,
    users: string[],
    name: string,
    company_code: string,
    country: string,
    created_at:string,
    main_manager:[],
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
}





const fetchData = async () => {
    try {
        const response = await axios.get('http://16.171.68.251:80/api/v1/company/list/', {
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
        const response = await axios.post('http://16.171.68.251/api/v1/company/create/', datas,
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
        const response = await axios.delete(`http://16.171.68.251:80/api/v1/company/${id}/`)
        console.log(response.data);
        return response.data

    } catch (error) {
        console.error('Ошибка при удалении компании:', error);
        return null;
    }
};



const useDataStoreComponies = create<DataStore>((set) => ({
    data: [],
    selectedCompanyData: null,
    idCompany: 0,
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
         const deletes = await deleteCompanies(id);
         if(deletes){
            await fetchData();
         }
    }
}));

export { useDataStoreComponies };