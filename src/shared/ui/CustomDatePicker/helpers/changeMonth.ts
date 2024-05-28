export const changeMonth = (dateString: string, change: "next" | "prev"): string => {
    const dateParts = dateString.split("-");
    let year = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    if (change === "next") {
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    } else if (change === "prev") {
        month--;
        if (month < 1) {
            month = 12;
            year--;
        }
    }

    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
};
