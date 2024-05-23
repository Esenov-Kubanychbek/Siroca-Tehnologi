export const BASE_URL = import.meta.env.VITE_API_URL;

export const authToken = {
    headers: {
        Authorization: `JWT ${localStorage.getItem("access")}`,
    },
};

export const prioritiesList: string[] = ["Самый высокий", "Высокий", "Средний", "Низкий", "Самый низкий"];
export const statusesList: string[] = ["К выполнению", "В работе", "В тестировании", "Выполнено", "Проверено"];

export const PATHS = {
    auth: "/",
    work: "/work",
    rolessettings: "/rolessettings",
    main: "/main",
};
