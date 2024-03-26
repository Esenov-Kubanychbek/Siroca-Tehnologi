export const useToken = () => {
    const token = localStorage.getItem("access");
    if (token) {
        return true;
    } else {
        return false;
    }
};
