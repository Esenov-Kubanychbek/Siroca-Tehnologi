import create from 'zustand';

interface DataAddCompanies {
    name: string;
    company_code: string;
    country: string;
    managers: string[];
    main_manager: string | null;
    domain: string;
}

interface DataInputCompaniesStore {
    dataInputCompanies: DataAddCompanies;
    changeInput: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    resetInput: () => void;
}

// Создаем хранилище Zustand
export const useDataInputCompaniesStore = create<DataInputCompaniesStore>((set) => ({
    dataInputCompanies: {
        name: "",
        company_code: "",
        country: "",
        managers: [],
        main_manager: null,
        domain: ""
    },
    // Функция изменения
    changeInput: (e) => {
        set((state) => ({
            dataInputCompanies: {
                ...state.dataInputCompanies,
                [e.target.name]: e.target.value
            }
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
                domain: ""
            }
        });
    }
}));

