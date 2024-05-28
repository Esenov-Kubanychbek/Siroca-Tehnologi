export const getYear = (dateString: string): number => {
    const date = new Date(dateString);
    const year = date.getFullYear();

    switch (true) {
        case !!year:
            return year;
        default:
            return new Date().getFullYear();
    }
};
