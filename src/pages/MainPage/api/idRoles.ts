import { create } from "zustand";
import { BASE_URL } from "../../../shared/variables/variables";

export interface IRoles {
    [key: string]: boolean | string,
}
interface IFetch {
    rolesState: IRoles | null,
    formatedState: IRoles | null,
    genRolesState: IRoles | null,
    getting: () => void,
    formateState: () => void
}

export const idRoles = create<IFetch>((set, get) => ({
    rolesState: null,
    genRolesState: null,
    formatedState: null,
    getting: async () => {
        try {
            await fetch(`${BASE_URL}/users/userpermissions/${localStorage.getItem("id")}/`, {
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Получаем данные ответа в формате JSON
            })
                .then(data => {
                    set({rolesState: data})
                })

            await fetch(`${BASE_URL}/users/${localStorage.getItem("role_type")}permissions/general/`, {
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("access")}`
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Получаем данные ответа в формате JSON
            })
                .then(data => {
                    set({ genRolesState: data });
                })
        } catch (error) {
            console.log(error);
        }
    },
    formateState: () => {
        const rolesState = get().rolesState
        const genRolesState = get().genRolesState
        const timeEntrDetail = rolesState && rolesState && Object.entries(rolesState).slice(3, Object.entries(rolesState).length)
        const timeEntrGeneral = genRolesState && genRolesState && Object.entries(genRolesState)
        timeEntrDetail && timeEntrDetail.map((el, index) => {
            if (el[1] === null) {
                timeEntrDetail[index][1] = timeEntrGeneral && timeEntrGeneral[index] ? timeEntrGeneral[index][1] : el[1]
            }
        })
        set({ formatedState: timeEntrDetail ? Object.fromEntries(timeEntrDetail) : null });
    }
}));
