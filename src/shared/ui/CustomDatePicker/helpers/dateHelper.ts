export interface IDateHelper {
    day: number;
    value: string;
    color: string;
}

export const dateHelper = (dateString: string): IDateHelper[] => {
    const generateMonthDays = (year: number, month: number): IDateHelper[] => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const monthDays: IDateHelper[] = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            let color = "#A8A8A8";

            if (year === currentYear && month === currentMonth) {
                color = "#5C5C5C";
                if (date.getDay() === 0 || date.getDay() === 6) {
                    color = "#1C6AB1";
                }
            }

            monthDays.push({
                day: i,
                value: `${year}-${(month + 1).toString().padStart(2, "0")}-${i.toString().padStart(2, "0")}`,
                color: color,
            });
        }

        return monthDays;
    };

    let currentDate: Date;
    if (/\d{4}-\d{2}-\d{2}/.test(dateString)) {
        currentDate = new Date(dateString);
    } else {
        currentDate = new Date();
    }

    const firstDayOfMonth = new Date(currentDate);
    firstDayOfMonth.setDate(1);
    const year = firstDayOfMonth.getFullYear();
    const month = firstDayOfMonth.getMonth();
    const lastDayOfPreviousMonth = new Date(year, month, 0);
    const nextMonthStart = new Date(year, month + 1, 1);

    const startDayOfWeek = firstDayOfMonth.getDay();

    const lastMonthDays =
        startDayOfWeek !== 1
            ? generateMonthDays(lastDayOfPreviousMonth.getFullYear(), lastDayOfPreviousMonth.getMonth())
            : [];

    const nowMonthDays = generateMonthDays(year, month);

    const nextMonthDays =
        nextMonthStart.getDay() !== 0 && startDayOfWeek !== 1
            ? generateMonthDays(nextMonthStart.getFullYear(), nextMonthStart.getMonth())
            : [];

    const allDays: IDateHelper[] = [
        ...lastMonthDays.slice(-(startDayOfWeek === 0 ? 7 : startDayOfWeek - 1)),
        ...nowMonthDays,
    ];

    while (allDays.length < 42) {
        const nextDay = nextMonthDays[allDays.length - nowMonthDays.length];
        allDays.push({
            day: nextDay.day,
            value: nextDay.value,
            color: "#A8A8A8",
        });
    }

    return allDays;
};
