export const BASE_URL = import.meta.env.VITE_API_URL;

export const authToken = {
    headers: {
        Authorization: `JWT ${localStorage.getItem("access")}`,
    },
}

export const PATHS = {
    auth: "/",
    admin: "/admin",
    work: "/work",
    rolessettings: "/rolessettings",
    main: "/main",
};
