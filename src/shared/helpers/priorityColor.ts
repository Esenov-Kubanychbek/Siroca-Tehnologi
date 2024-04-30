export const priorityColor = (word: string) => {
    switch (word) {
<<<<<<< HEAD
        case "Низкий":
            return "blue";
        case "Средний":
            return "#B4A416";
        case "Высокий":
            return "red";
=======
        case "Самый низкий":
            return "#3A40D9";
        case "Низкий":
            return "#3A40D9";
        case "Средний":
            return "#D2C337";
        case "Высокий":
            return "#E51616";
        case "Самый высокий":
            return "#E51616";
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
        default:
            return "black";
    }
};
