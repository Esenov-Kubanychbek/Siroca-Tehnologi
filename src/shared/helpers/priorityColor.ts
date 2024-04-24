export const priorityColor = (word: string) => {
    switch (word) {
        case "Низкий":
            return "blue";
        case "Средний":
            return "#B4A416";
        case "Высокий":
            return "red";
        default:
            return "black";
    }
};
