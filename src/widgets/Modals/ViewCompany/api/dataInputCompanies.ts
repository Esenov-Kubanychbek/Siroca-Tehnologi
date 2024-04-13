import { create } from "zustand";
import { dataCompanies } from "../../../Admin/Companies/api/componiesApi";
import axios from "axios";

// Добавляем объявление Symbol.iterator для типа number | undefined[]
declare global {
    interface NumberOrUndefinedArray extends Array<number | undefined> {
        [Symbol.iterator](): IterableIterator<number>;
    }
}
// Модифицированный интерфейс DataAddCompanies
interface DataAddCompanies {
    name: string;
    company_code: string;
    country: string;
    managers: (number | undefined)[];
    main_manager: number | null;
    domain: string;
}

interface DataInputCompaniesStore {
    changeInput: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    resetInput: () => void;
    dataInputCompanies: DataAddCompanies;
    addManager: (manager: number | undefined) => void;
    changeInputOne: (data: DataAddCompanies, state: dataCompanies | null, id: number | undefined) => void;
}
// Создаем хранилище Zustand
export const useDataInputCompaniesStore = create<DataInputCompaniesStore>((set) => ({
    dataInputCompanies: {
        name: "",
        company_code: "",
        country: "",
        managers: [],
        main_manager: null,
        domain: "",
    },
    // Функция изменения
    changeInput: (e) => {
        set((state) => ({
            dataInputCompanies: {
                ...state.dataInputCompanies,
                [e.target.name]: e.target.value,
            },
        }));
    },
    addManager: (manager) => {
        set((state) => ({
            dataInputCompanies: {
                ...state.dataInputCompanies,
                // Добавляем проверку на undefined
                managers: Array.isArray(state.dataInputCompanies.managers)
                    ? [...state.dataInputCompanies.managers, manager]
                    : [manager],
            },
        }));
    },
    // Новая функция сброса
    resetInput: () => {
        set({
            dataInputCompanies: {
                name: "",
                company_code: "",
                country: "",
                managers: [],
                main_manager: null,
                domain: "",
            },
        });
    },
    changeInputOne: async (data, state, id) => {
        if (state !== null) {
            const datas = {
                id: id,
                name: data.name ? data.name : state.name,
                company_code: data.company_code ? data.company_code : state.company_code,
                country: data.country ? data.country : state.country,
                main_manager: data.main_manager ? data.main_manager : state.main_manager,
                domain: data.domain ? data.domain : state.domain,
                managers: [...state.managers, ...data.managers],
            };
            try {
                const response = await axios.put(`http://13.60.17.217:80/api/v1/company/${id}/`, datas);
                console.log(response);
                return response;
            } catch (error) {
                console.log(error);
            }
            console.log(id);

            console.log(datas);
        }
    },
}));
