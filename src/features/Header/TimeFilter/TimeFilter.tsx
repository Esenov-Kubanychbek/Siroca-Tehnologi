import { TabsProps } from "antd";
import { RequestList } from "../../../widgets";
import { ConfigProvider, Tabs } from "antd";
import { FC } from "react";
import AllTime from "./api/AllTime.json";
import Week from "./api/Week.json";
import Month from "./api/Month.json";

export const TimeFilter: FC<{ role: string }> = ({ role }) => {
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Всё время",
            children: (
                <RequestList
                    role={role}
                    api={AllTime}
                />
            ),
        },
        {
            key: "2",
            label: "Неделя",
            children: (
                <RequestList
                    role={role}
                    api={Week}
                />
            ),
        },
        {
            key: "3",
            label: "Месяц",
            children: (
                <RequestList
                    role={role}
                    api={Month}
                />
            ),
        },
    ];
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        inkBarColor: "#1C6AD2",
                        itemColor: "#252525",
                        itemHoverColor: "#1C6AD2",
                        itemSelectedColor: "#1C6AB1",
                        fontFamily: "Geologica",
                        fontSize: 20,
                    },
                },
            }}
        >
            <Tabs
                defaultActiveKey="1"
                items={items}
                tabBarStyle={{
                    marginLeft: "24px",
                    width: "350px",
                    fontWeight: 700,
                    marginBottom: "40px",
                }}
            />
        </ConfigProvider>
    );
};
